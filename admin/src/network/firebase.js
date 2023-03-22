// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs2pRWGMOwuWrcv7nBS_CNMZjSl_CO1sQ",
  authDomain: "lively-oxide-333608.firebaseapp.com",
  projectId: "lively-oxide-333608",
  storageBucket: "lively-oxide-333608.appspot.com",
  messagingSenderId: "59916741197",
  appId: "1:59916741197:web:48e241404a457ea1b04a04",
  measurementId: "G-ST3T67XT5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const analytics = getAnalytics(app);
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storageRef = ref(storage, 'some-child');

const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
uploadBytes(storageRef, bytes).then((snapshot) => {
  console.log('Uploaded an array!');
});

