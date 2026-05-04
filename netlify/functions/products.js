const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'torres-fitwear';
const KEY = 'products';

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const store = getStore(STORE_NAME);

        if (event.httpMethod === 'GET') {
            const data = await store.get(KEY, { type: 'json' });
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ products: data || null })
            };
        }

        if (event.httpMethod === 'POST') {
            const expected = process.env.ADMIN_PASSWORD;
            if (!expected) {
                return {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ error: 'ADMIN_PASSWORD não configurada no servidor' })
                };
            }
            const provided = event.headers['x-admin-password'] || event.headers['X-Admin-Password'];
            if (provided !== expected) {
                return {
                    statusCode: 401,
                    headers,
                    body: JSON.stringify({ error: 'Palavra-passe incorrecta' })
                };
            }
            const body = JSON.parse(event.body || '{}');
            if (!Array.isArray(body.products)) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Lista de produtos inválida' })
                };
            }
            await store.setJSON(KEY, body.products);
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ ok: true, count: body.products.length })
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Método não suportado' })
        };
    } catch (e) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: e.message })
        };
    }
};
