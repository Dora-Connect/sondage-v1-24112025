import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Configuration Firebase
// IMPORTANT: Remplacez ces valeurs par vos propres clés Firebase
// Obtenez-les depuis: https://console.firebase.google.com/
// 1. Créez un projet Firebase
// 2. Allez dans Project Settings > General
// 3. Scrollez jusqu'à "Your apps" et ajoutez une Web app
// 4. Copiez la configuration et remplacez les valeurs ci-dessous

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialiser Firebase
let app: FirebaseApp | undefined;
let db: Firestore | undefined;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Erreur d'initialisation Firebase:", error);
  // En mode développement, on continue sans Firebase
  console.warn("⚠️ Firebase non configuré. Les données ne seront pas sauvegardées.");
}

export { db };
export default app;
