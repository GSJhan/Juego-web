# Guía de Despliegue - PREPOL RESET

Esta guía explica cómo desplegar PREPOL RESET en producción usando Manus.

## 📋 Requisitos Previos

- Proyecto creado en Manus
- Base de datos MySQL/TiDB configurada
- Variables de entorno configuradas
- Código subido a GitHub

## 🚀 Despliegue en Manus

### Paso 1: Preparar el Proyecto

1. **Asegúrate que el código esté en GitHub**
   ```bash
   git push origin main
   ```

2. **Verifica que todas las dependencias estén en `package.json`**
   ```bash
   pnpm install
   ```

3. **Compila el proyecto localmente**
   ```bash
   pnpm build
   ```

### Paso 2: Configurar Variables de Entorno

En Manus Management UI → Settings → Secrets:

```
DATABASE_URL=mysql://usuario:contraseña@host:puerto/prepol_reset
JWT_SECRET=tu_jwt_secreto_seguro
VITE_APP_ID=tu_app_id_manus
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_TITLE=PREPOL RESET
VITE_APP_LOGO=🐕
```

### Paso 3: Ejecutar Migraciones

Antes del primer despliegue:

```bash
# En tu máquina local o en el servidor
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### Paso 4: Sembrar Datos Iniciales

```bash
# Ejecutar seed data
node scripts/seed-data.mjs
```

### Paso 5: Desplegar

En Manus Management UI:

1. Ve a **Dashboard**
2. Haz clic en **Publish**
3. Selecciona el checkpoint que deseas desplegar
4. Confirma el despliegue

El proyecto estará disponible en: `https://[tu-dominio].manus.space`

## 🔧 Configuración de Dominio Personalizado

1. Ve a **Settings → Domains**
2. Compra un dominio o conecta uno existente
3. Sigue las instrucciones de DNS
4. Espera a que se propague (24-48 horas)

## 📊 Monitoreo

### Ver Logs

```bash
# En Manus Management UI → Dashboard → Logs
# O acceder directamente a .manus-logs/
```

### Métricas

- **UV/PV**: Usuarios únicos y vistas de página
- **Errores**: Errores 500 y excepciones
- **Rendimiento**: Tiempo de respuesta

## 🔄 Actualizaciones

### Desplegar Cambios

1. Haz cambios en el código
2. Commit y push a GitHub
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push origin main
   ```

3. En Manus, crea un nuevo checkpoint
   ```bash
   # O en la UI: Save Checkpoint
   ```

4. Publica el nuevo checkpoint

### Rollback

Si algo sale mal:

1. Ve a **Dashboard → Version History**
2. Selecciona la versión anterior
3. Haz clic en **Rollback**

## 🗄️ Mantenimiento de Base de Datos

### Backup

```bash
# Exportar base de datos
mysqldump -u usuario -p prepol_reset > backup.sql

# Importar desde backup
mysql -u usuario -p prepol_reset < backup.sql
```

### Limpiar Datos Antiguos

```bash
# Eliminar duelos antiguos (más de 30 días)
DELETE FROM duels WHERE createdAt < DATE_SUB(NOW(), INTERVAL 30 DAY);

# Optimizar tablas
OPTIMIZE TABLE users, districts, levels, quizzes, userProgress;
```

## 🔐 Seguridad en Producción

### Checklist de Seguridad

- [ ] JWT_SECRET es fuerte y único
- [ ] DATABASE_URL usa conexión segura (SSL)
- [ ] VITE_APP_ID es válido en Manus
- [ ] Logs no exponen información sensible
- [ ] CORS está configurado correctamente
- [ ] Rate limiting está activo
- [ ] Validación de entrada en todos los endpoints

### Monitorear Seguridad

```bash
# Ver intentos de acceso fallidos
grep "401\|403" .manus-logs/networkRequests.log

# Verificar cambios en base de datos
SELECT * FROM users WHERE lastSignedIn > DATE_SUB(NOW(), INTERVAL 1 DAY);
```

## 📈 Optimización de Rendimiento

### Caché

- Service Worker cachea assets estáticos
- Queries se cachean con React Query
- CDN sirve imágenes y archivos estáticos

### Compresión

- Gzip habilitado en Express
- Assets minificados en build
- Imágenes optimizadas

### Monitoreo

```bash
# Ver tiempo de respuesta
grep "duration" .manus-logs/networkRequests.log | head -20

# Identificar queries lentas
# En base de datos: SHOW SLOW QUERIES
```

## 🐛 Troubleshooting

### Error: "Database connection failed"

```bash
# Verificar DATABASE_URL
echo $DATABASE_URL

# Probar conexión
mysql -u usuario -p -h host -P puerto prepol_reset -e "SELECT 1"
```

### Error: "OAuth callback failed"

- Verifica VITE_APP_ID
- Confirma OAUTH_SERVER_URL
- Revisa logs en .manus-logs/devserver.log

### Error: "Service worker failed to register"

- Verifica que HTTPS está activo
- Comprueba que sw.js está en public/
- Revisa browserConsole.log

### Bajo rendimiento

1. Revisa .manus-logs/networkRequests.log
2. Identifica queries lentas
3. Agrega índices en base de datos
4. Optimiza componentes React

## 📞 Soporte

Si necesitas ayuda:

1. Revisa los logs en .manus-logs/
2. Consulta la documentación de Manus
3. Abre un issue en GitHub
4. Contacta al equipo de Manus

## 📝 Changelog

### v1.0.0 (Inicial)
- Estructura completa del juego
- 4 distritos, 12 niveles, 60 quizzes
- Sistema de duelos multijugador
- PWA instalable
- Certificados digitales

---

**¡Listo para desplegar PREPOL RESET!** 🚀
