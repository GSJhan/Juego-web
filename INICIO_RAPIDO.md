# ⚡ Guía de Inicio Rápido - PREPOL RESET

## Lo que necesitas para que funcione el login/registro

### 1️⃣ Obtén tus Credenciales de Firebase (5 minutos)

**Opción A: Si tienes un proyecto Firebase existente**
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Haz clic en el ícono de engranaje ⚙️ → **Configuración del proyecto**
4. Desplázate a **"Tus aplicaciones"** y busca tu app web
5. Copia el objeto de configuración que ves (contiene `apiKey`, `authDomain`, etc.)

**Opción B: Si no tienes proyecto Firebase**
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Haz clic en **"Crear proyecto"**
3. Nombre: `prepol-reset` (o el que prefieras)
4. Sigue los pasos
5. Una vez creado, ve a **Configuración del proyecto** → **"Tus aplicaciones"**
6. Haz clic en `</>` para crear una app web
7. Copia la configuración

### 2️⃣ Reemplaza los valores en tu código

Abre el archivo **`js/firebase-config.js`** y reemplaza:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyD...",                              // ← Tu API Key
    authDomain: "tu-proyecto.firebaseapp.com",         // ← Tu Auth Domain
    projectId: "tu-proyecto",                          // ← Tu Project ID
    storageBucket: "tu-proyecto.appspot.com",          // ← Tu Storage Bucket
    messagingSenderId: "123456789",                    // ← Tu Messaging Sender ID
    appId: "1:123456789:web:abcdef123456"              // ← Tu App ID
};
```

### 3️⃣ Habilita Email/Password en Firebase

1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Authentication** (Autenticación)
4. Haz clic en **"Sign-in method"** (Método de inicio de sesión)
5. Busca **"Email/Password"** y haz clic en el lápiz
6. **Activa** la opción
7. Haz clic en **"Guardar"**

### 4️⃣ Crea una Base de Datos Firestore

1. En Firebase Console, ve a **Firestore Database**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Iniciar en modo de prueba"**
4. Elige tu región
5. Haz clic en **"Crear"**

### 5️⃣ Configura las Reglas de Seguridad

1. En Firestore, ve a la pestaña **"Reglas"**
2. Reemplaza todo el contenido con esto:

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

3. Haz clic en **"Publicar"**

### 6️⃣ ¡Listo! Prueba tu aplicación

1. Abre `index.html` en tu navegador
2. Haz clic en **"Registrarse"**
3. Crea una cuenta (ej: usuario: `juan`, contraseña: `1234`)
4. ¡Deberías ver el dashboard!
5. Prueba a cerrar sesión y vuelve a iniciar sesión

---

## ¿Qué cambios se hicieron en tu código?

✅ **Nuevo archivo: `js/firebase-config.js`**
- Contiene la configuración de Firebase
- Se carga antes de `app.js`

✅ **Actualizado: `js/app.js`**
- Mejor manejo de errores
- Mensajes más claros
- Validación de que Firebase esté inicializado
- Logs en consola para debugging

✅ **Actualizado: `index.html`**
- Ahora carga `firebase-config.js` en el orden correcto

---

## Troubleshooting

### ❌ "Firebase no está configurado correctamente"
**Solución:** Verifica que `firebase-config.js` esté en la carpeta `js/` y que los valores sean correctos.

### ❌ "Este usuario ya existe"
**Solución:** El usuario ya fue registrado. Intenta con otro nombre de usuario.

### ❌ "Usuario o contraseña incorrectos"
**Solución:** Verifica que escribiste correctamente el usuario y contraseña. Recuerda que es sensible a mayúsculas/minúsculas.

### ❌ "Permiso denegado" al guardar datos
**Solución:** Las reglas de Firestore no están configuradas. Sigue el paso 5 nuevamente.

### ❌ "Email/Password no está habilitado"
**Solución:** Ve a Firebase Console → Authentication → Sign-in method → Activa Email/Password

---

## Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `js/firebase-config.js` | **NUEVO** - Tu configuración de Firebase |
| `js/app.js` | Lógica de la aplicación (actualizado) |
| `index.html` | HTML principal (actualizado) |
| `FIREBASE_SETUP.md` | Guía detallada de configuración |

---

## ¿Necesitas ayuda?

1. **Abre la consola del navegador** (F12 o Ctrl+Shift+I)
2. Ve a la pestaña **"Console"**
3. Intenta registrarte o iniciar sesión
4. Busca mensajes de error en rojo
5. Cópialos y comparte para obtener ayuda

---

**¡Éxito! 🚀**
