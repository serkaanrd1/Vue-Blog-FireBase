import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCe96q4tTieJlsIu9FI04ucaV4OFMyuzQg",
  authDomain: "blog-vue-7ae17.firebaseapp.com",
  projectId: "blog-vue-7ae17",
  storageBucket: "blog-vue-7ae17.appspot.com",
  messagingSenderId: "771519649756",
  appId: "1:771519649756:web:f6682f57af70bb05f0e119"
};

const fb = initializeApp(firebaseConfig);

export { fb };

