// ========== CONFIGURACIÓN DE FIREBASE ==========
const firebaseConfig = {
  apiKey: "AIzaSyBJ2Rzx4w_7UwDl_0iV7uGoe22WIjBCiPg",
  authDomain: "prep0l-reset.firebaseapp.com",
  projectId: "prep0l-reset",
  storageBucket: "prep0l-reset.firebasestorage.app",
  messagingSenderId: "828820833195",
  appId: "1:828820833195:web:87eae0c3a0f778eb2908ee"
};

// ========== INICIALIZAR FIREBASE ==========
try {
  // Inicializar la aplicación Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Obtener referencia a Firestore
  const db = firebase.firestore();
  
  // Configurar Firestore
  db.settings({
    experimentalForceLongPolling: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });
  
  console.log('✅ Firebase inicializado correctamente');
  console.log('✅ Firestore conectado y disponible globalmente');
  
} catch (error) {
  console.error('❌ Error al inicializar Firebase:', error);
  console.error('Detalles:', error.message);
}

// ========== VERIFICACIÓN DE DISPONIBILIDAD ==========
// Esperar a que Firebase esté completamente listo
window.addEventListener('load', function() {
  if (typeof db !== 'undefined') {
    console.log('✅ Variable db está disponible globalmente');
  } else {
    console.error('❌ Variable db NO está disponible');
  }
});
