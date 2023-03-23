// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  ref,
      uploadBytesResumable,
      getDownloadURL ,getStorage, uploadBytes } from "firebase/storage";
import { Form } from "react-admin";

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
//const storage = getStorage(app);

const analytics = getAnalytics(app);

const storage = getStorage();
// 'file' comes from the Blob or File API
export async function handleUpload(file, fileName) {
      const storageRef = ref(storage,`pic/${fileName}`)
  var a ;
      const uploadTask = await uploadBytesResumable(storageRef, file).then( async (snapshot)=>{
      a = await getDownloadURL(snapshot.ref).then((url) => {
                      return url;
                  });
  })
  return a;
}
  //     uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //             const percent = Math.round(
  //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //             );
  //  
  //             // update progress
  //            
  //         },
  //         (err) => console.log(err),
  //         () => {
  //             // download url
  //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //                 console.log(url);
  //                 url1 = url
  //             });
  //         }
  //     ); 
  
