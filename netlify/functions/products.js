import { getStore } from '@netlify/blobs';

const STORE_NAME = 'torres-fitwear';
const KEY = 'products';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
};

export default async (request, context) => {
    if (request.method === 'OPTIONS') {
        return new Response('', { status: 200, headers: corsHeaders });
    }

    try {
        const store = getStore(STORE_NAME);

        if (request.method === 'GET') {
            const data = await store.get(KEY, { type: 'json' });
            return new Response(
                JSON.stringify({ products: data || null }),
                { status: 200, headers: corsHeaders }
            );
        }

        if (request.method === 'POST') {
            const expected = process.env.ADMIN_PASSWORD;
            if (!expected) {
                return new Response(
                    JSON.stringify({ error: 'ADMIN_PASSWORD não configurada no servidor' }),
                    { status: 500, headers: corsHeaders }
                );
            }
            const provided = request.headers.get('x-admin-password');
            if (provided !== expected) {
                return new Response(
                    JSON.stringify({ error: 'Palavra-passe incorrecta' }),
                    { status: 401, headers: corsHeaders }
                );
            }
            const body = await request.json().catch(() => ({}));
            if (!Array.isArray(body.products)) {
                return new Response(
                    JSON.stringify({ error: 'Lista de produtos inválida' }),
                    { status: 400, headers: corsHeaders }
                );
            }
            await store.setJSON(KEY, body.products);
            return new Response(
                JSON.stringify({ ok: true, count: body.products.length }),
                { status: 200, headers: corsHeaders }
            );
        }

        return new Response(
            JSON.stringify({ error: 'Método não suportado' }),
            { status: 405, headers: corsHeaders }
        );
    } catch (e) {
        return new Response(
            JSON.stringify({ error: e.message }),
            { status: 500, headers: corsHeaders }
        );
    }
};
