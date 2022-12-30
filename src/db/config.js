import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

//solo para update de productos
import { arrayProducts } from '../assets/data/products';
import { uploadCollectionItems } from '../helpers/firebaseHelpers';

const firebaseConfig = {
  apiKey: "AIzaSyBCw7S9TK5sYUV6IKG2iEpbc5cMvAJKYNI",
  authDomain: "lacuerdaproject.firebaseapp.com",
  projectId: "lacuerdaproject",
  storageBucket: "lacuerdaproject.appspot.com",
  messagingSenderId: "796537075987",
  appId: "1:796537075987:web:e0ed13a59accbd620dc2e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

//Correr por única vez cuando aún no he subido los productos a mi colección.
if (false) {
  setTimeout(() => {
    uploadCollectionItems(arrayProducts, 'products');
  }, 4000);
}
