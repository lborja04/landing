import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js';
import { getDatabase, ref, push, set, get} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js';


// Configuración desde variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para guardar mensaje de contacto
export async function saveContactMessage(data) {
  try {
    const messagesRef = ref(database, 'contacts'); // Cambiado de "votes" a "contacts"
    const newRef = push(messagesRef);
    await set(newRef, {
      ...data,
      timestamp: new Date().toISOString()
    });
    return { success: true, message: '✅ Mensaje enviado con éxito.' };
  } catch (error) {
    return { success: false, message: '❌ Error al enviar el mensaje.', error };
  }
}

export async function getTestimonials() {
  const db = getDatabase();
  const testimonialsRef = ref(db, 'testimonios');

  try {
    const snapshot = await get(testimonialsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No hay testimonios disponibles.");
      return {};
    }
  } catch (error) {
    console.error("Error al obtener testimonios:", error);
    return {};
  }
}


export async function addTestimonial({ nombre, mensaje, profesion, imagen }) {
  const db = getDatabase();
  const testimoniosRef = ref(db, 'testimonios');

  const nuevoTestimonioRef = push(testimoniosRef);

  const nuevoTestimonio = {
    nombre,
    mensaje,
    profesion
  };

  try {
    await set(nuevoTestimonioRef, nuevoTestimonio);
    console.log("Testimonio agregado con éxito.");
  } catch (error) {
    console.error("Error al agregar testimonio:", error);
  }
}
