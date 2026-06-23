// ========== CONFIGURACIÓN DE FIREBASE ==========
// IMPORTANTE: Reemplaza estos valores con tus credenciales reales de Firebase

const firebaseConfig = {
    apiKey: "TU_API_KEY",                              // Obtén esto de Firebase Console
    authDomain: "tu-proyecto.firebaseapp.com",         // Reemplaza con tu authDomain
    projectId: "tu-proyecto",                          // Reemplaza con tu projectId
    storageBucket: "tu-proyecto.appspot.com",          // Reemplaza con tu storageBucket
    messagingSenderId: "123456789",                    // Reemplaza con tu messagingSenderId
    appId: "1:123456789:web:abcdef123456"              // Reemplaza con tu appId
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencias después de inicializar
const auth = firebase.auth();
const db = firebase.firestore();

console.log('✅ Firebase inicializado correctamente');
