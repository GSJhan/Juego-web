#!/bin/bash

# Script para ejecutar seed data en la base de datos de PREPOL RESET

echo "🌱 Ejecutando seed data para PREPOL RESET..."

# Asegurarse de que estamos en el directorio correcto
cd "$(dirname "$0")/.."

# Verificar que DATABASE_URL está configurado
if [ -z "$DATABASE_URL" ]; then
  echo "❌ Error: DATABASE_URL no está configurado"
  exit 1
fi

# Ejecutar el script de seed
node scripts/seed-data.mjs

if [ $? -eq 0 ]; then
  echo "✅ Seed data ejecutado exitosamente"
else
  echo "❌ Error al ejecutar seed data"
  exit 1
fi
