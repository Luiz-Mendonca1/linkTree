
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqMkETtzzMdryCu3nVFmnZeA9gQZpaEeA",
  authDomain: "linktree-91745.firebaseapp.com",
  projectId: "linktree-91745",
  storageBucket: "linktree-91745.firebasestorage.app",
  messagingSenderId: "118473439623",
  appId: "1:118473439623:web:a00afa3b27a91e067f7b22"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth, db} 