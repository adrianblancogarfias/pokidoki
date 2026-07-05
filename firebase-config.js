/* ======================================================
   CONFIGURACIÓN DE FIREBASE
   ------------------------------------------------------
   Reemplazá los valores de abajo con los de TU proyecto.
   Los sacás en: Firebase Console > ⚙️ Configuración del
   proyecto > Tus apps > Config del SDK (selecciona "Config").

   Este archivo lo usan tanto catalogo.html como admin.html,
   así que solo tenés que editarlo UNA vez, acá.
====================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyAh8AjPwt1bLXZk-oUILDqQt4GLq_9J4iA",
  authDomain: "mi-app2026.firebaseapp.com",
  databaseURL: "https://mi-app2026-default-rtdb.firebaseio.com",
  projectId: "mi-app2026",
  storageBucket: "mi-app2026.firebasestorage.app",
  messagingSenderId: "1000701553730",
  appId: "1:1000701553730:web:b6c6427eadab924aea51db",
  measurementId: "G-4V54DR9DTZ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

/* ======================================================
   CONFIGURACIÓN DE CLOUDINARY (subida de fotos)
   ------------------------------------------------------
   Servicio gratis para guardar las fotos que subís desde
   el panel de administración (no requiere tarjeta).
   Sacás estos dos datos en cloudinary.com, después de
   crear tu cuenta y tu "upload preset" sin firmar.
   Ver INSTRUCCIONES.md para el paso a paso.
====================================================== */

const CLOUDINARY_CLOUD_NAME = "bhalzajw";
const CLOUDINARY_UPLOAD_PRESET = "pokidoki";