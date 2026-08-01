// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYmCQRT5SxLxWOoV2F-N8KkOGU2cwftpA",
  authDomain: "wall-eve-b28aa.firebaseapp.com",
  projectId: "wall-eve-b28aa",
  storageBucket: "wall-eve-b28aa.firebasestorage.app",
  messagingSenderId: "99484213139",
  appId: "1:99484213139:web:c7ecdcecf7461958891266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export
export { db };