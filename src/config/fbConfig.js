import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//initialize firebase 
var config = {
    apiKey: "AIzaSyCgDQhW_J45ZzFs2CcDijXRoAmLuWOcaro",
    authDomain: "reactproject-199d7.firebaseapp.com",
    databaseURL: "https://reactproject-199d7.firebaseio.com",
    projectId: "reactproject-199d7",
    storageBucket: "reactproject-199d7.appspot.com",
    messagingSenderId: "448168446917"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});
  
  export default firebase;