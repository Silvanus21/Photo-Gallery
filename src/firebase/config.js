import * as firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/storage"; //storage

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJlg2SJga-WzAnmp1J6rso0fyvPHBwbhQ",
  authDomain: "selva-photo-gallery.firebaseapp.com",
  databaseURL: "https://selva-photo-gallery.firebaseio.com",
  projectId: "selva-photo-gallery",
  storageBucket: "selva-photo-gallery.appspot.com",
  messagingSenderId: "471786723834",
  appId: "1:471786723834:web:9269c37e5fc824d04a2c43",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectDatabase = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectDatabase, timeStamp}