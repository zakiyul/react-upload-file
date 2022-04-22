import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAbzjua7mcp2uY9CDfamRvIp7A444Zwd0I",
  authDomain: "uploadingfile-a615e.firebaseapp.com",
  projectId: "uploadingfile-a615e",
  storageBucket: "uploadingfile-a615e.appspot.com",
  messagingSenderId: "831724499732",
  appId: "1:831724499732:web:0f5b137291f4d7d1844801"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);