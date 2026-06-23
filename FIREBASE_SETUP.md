# 🔧 Guía de Configuración de Firebase para PREPOL RESET

## Paso 1: Obtener tus Credenciales de Firebase

### 1.1 Accede a Firebase Console
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Crear proyecto"** o selecciona uno existente

### 1.2 Obtén tu Configuración Web
1. En la consola de Firebase, ve a **Configuración del proyecto** (ícono de engranaje)
2. Selecciona la pestaña **"General"**
3. Desplázate hacia abajo hasta la sección **"Tus aplicaciones"**
4. Si no tienes una app web, haz clic en el ícono `</>` para crear una
5. Copia la configuración que se muestra (verás un objeto con `apiKey`, `authDomain`, etc.)

## Paso 2: Habilitar Autenticación por Email/Contraseña

1. En la consola de Firebase, ve a **Authentication** (Autenticación)
2. Haz clic en la pestaña **"Sign-in method"** (Método de inicio de sesión)
3. Busca **"Email/Password"** (Correo electrónico/Contraseña)
4. Haz clic en el ícono de editar (lápiz)
5. Activa la opción **"Email/Password"**
6. Haz clic en **"Guardar"**

## Paso 3: Crear Base de Datos Firestore

1. En la consola de Firebase, ve a **Firestore Database**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Iniciar en modo de prueba"** (para desarrollo)
4. Elige la ubicación más cercana a tu región
5. Haz clic en **"Crear"**

### Reglas de Seguridad de Firestore (Importante)
Después de crear la base de datos, ve a la pestaña **"Reglas"** y reemplaza el contenido con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

Luego haz clic en **"Publicar"**.

## Paso 4: Actualizar tu Código

### 4.1 Abre el archivo `js/firebase-config.js`

Reemplaza los valores de placeholder con tus credenciales reales:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyD...",                              // Tu API Key
    authDomain: "prepol-reset.firebaseapp.com",        // Tu Auth Domain
    projectId: "prepol-reset",                         // Tu Project ID
    storageBucket: "prepol-reset.appspot.com",         // Tu Storage Bucket
    messagingSenderId: "123456789",                    // Tu Messaging Sender ID
    appId: "1:123456789:web:abcdef123456"              // Tu App ID
};
```

### 4.2 Actualiza el archivo `index.html`

Asegúrate de que el archivo HTML cargue el archivo de configuración ANTES de `app.js`:

```html
<!-- FIREBASE SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"></script>

<!-- FIREBASE CONFIG -->
<script src="js/firebase-config.js"></script>

<!-- APP JS -->
<script src="js/app.js"></script>
```

### 4.3 Actualiza `js/app.js`

Reemplaza la sección de inicialización de Firebase (líneas 1-18) con:

```javascript
// ========== INICIALIZAR FIREBASE ==========
// La configuración se carga desde firebase-config.js
// No necesitas repetir la inicialización aquí

console.log('✅ Firebase inicializado correctamente');

// ========== DATOS DEL JUEGO ==========
// ... resto del código
```

## Paso 5: Prueba tu Aplicación

1. Abre `index.html` en tu navegador
2. Intenta **registrarte** con un nuevo usuario
3. Luego intenta **iniciar sesión** con esas credenciales
4. Verifica que los datos se guarden en Firestore

## Solución de Problemas

### Error: "El proyecto no está configurado correctamente"
- Verifica que copiaste correctamente todos los valores de Firebase
- Asegúrate de que `firebase-config.js` se carga antes de `app.js`

### Error: "Email/Password no está habilitado"
- Ve a **Authentication → Sign-in method** y activa **Email/Password**

### Error: "Permiso denegado" al guardar datos
- Verifica que las reglas de Firestore estén publicadas correctamente
- Asegúrate de que estés autenticado antes de guardar datos

### No puedo registrarme
- Verifica que tu contraseña tenga al menos 4 caracteres
- Comprueba que el email sea válido (el sistema usa `usuario@prepol.local`)
- Abre la consola del navegador (F12) para ver mensajes de error detallados

## Estructura de Datos en Firestore

Cuando un usuario se registra, se crea un documento en la colección `users`:

```
/users/{uid}
├── username: "nombreUsuario"
├── soles: 100
├── rank: "Ciudadano"
├── completedLevels: []
└── createdAt: "2024-01-01T12:00:00.000Z"
```

## Próximos Pasos

Una vez que todo funcione:
1. Cambia las reglas de Firestore a **modo de producción** para mayor seguridad
2. Considera agregar validación de email
3. Implementa recuperación de contraseña
4. Agrega más contenido de preguntas en `gameData.quizzes`

---

¿Necesitas ayuda adicional? Abre la consola del navegador (F12) para ver mensajes de error detallados.
