import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCVMTmMc2JBlD5Z4nAhYdOTEhlT3W0mFL8",
 authDomain: "complaint-forum-9ab0e.firebaseapp.com",
 databaseURL: "https://complaint-forum-9ab0e-default-rtdb.firebaseio.com",
 projectId: "complaint-forum-9ab0e",
 storageBucket: "complaint-forum-9ab0e.appspot.com",
 messagingSenderId: "130438648024",
 appId: "1:130438648024:web:6f573a9b461ce23a3b47ad"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

