import firebase from "firebase"
import firebaseConfig from "../firebase/config"

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

export default db