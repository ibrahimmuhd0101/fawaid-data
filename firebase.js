import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYNuZAhhJlIj794j5no4IQDGzhaufLpk4",
  authDomain: "fawaid-data.firebaseapp.com",
  projectId: "fawaid-data",
  storageBucket: "fawaid-data.firebasestorage.app",
  messagingSenderId: "762791746370",
  appId: "1:762791746370:web:bcd2355a9a1170388706db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
