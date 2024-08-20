import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJzIGk3Q-gKqX8jjAqI9ziPcNXNBGOkuU",
    authDomain: "mera-geomapping-a34e7.firebaseapp.com",
    projectId: "mera-geomapping-a34e7",
    storageBucket: "mera-geomapping-a34e7.appspot.com",
    messagingSenderId: "1050555560211",
    appId: "1:1050555560211:web:0cee73753172ea1d3c6ae6",
    measurementId: "G-BK2RDBZVV6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };