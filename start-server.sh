#!/bin/bash
# Script para servir a página localmente

# Verifica se o Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "Python não encontrado. Instale Python 3 para prosseguir."
    exit 1
fi

echo "🚀 Iniciando servidor local..."
echo "📍 Acesse: http://localhost:8000"
echo "⏹️  Pressione Ctrl+C para parar o servidor"

# Inicia servidor Python
python3 -m http.server 8000
