exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const { items, payer, shipment } = JSON.parse(event.body);

        if (!items || items.length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Carrinho vazio' }) };
        }

        const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
        if (!ACCESS_TOKEN) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Token não configurado' }) };
        }

        // Montar itens do Mercado Pago
        const mpItems = items.map(item => ({
            title: item.name,
            quantity: item.quantity,
            unit_price: parseFloat(item.price),
            currency_id: 'BRL'
        }));

        // Adicionar frete como item se existir
        if (shipment && shipment.cost > 0) {
            mpItems.push({
                title: 'Frete Correios PAC',
                quantity: 1,
                unit_price: parseFloat(shipment.cost),
                currency_id: 'BRL'
            });
        }

        // Criar preferência de pagamento
        const preference = {
            items: mpItems,
            payer: {
                name: payer?.name || '',
                phone: { number: payer?.phone || '' },
                address: {
                    zip_code: payer?.cep || '',
                    street_name: payer?.street || '',
                    street_number: parseInt(payer?.number) || 0
                }
            },
            back_urls: {
                success: 'https://ilmaqwert.github.io/torres-fitwear/?status=approved',
                failure: 'https://ilmaqwert.github.io/torres-fitwear/?status=failure',
                pending: 'https://ilmaqwert.github.io/torres-fitwear/?status=pending'
            },
            auto_return: 'approved',
            statement_descriptor: 'TORRES FITWEAR',
            external_reference: `order_${Date.now()}`
        };

        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('MP Error:', data);
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Erro ao criar pagamento', details: data }) };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                id: data.id,
                init_point: data.init_point,
                sandbox_init_point: data.sandbox_init_point
            })
        };
    } catch (error) {
        console.error('Error:', error);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Erro interno' }) };
    }
};
