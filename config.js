import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1u4CNsGuK34fmPpMPPRaYd8XkL8zrlak",
    authDomain: "teamvotingapp-a6f30.firebaseapp.com",
    databaseURL: "https://teamvotingapp-a6f30-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp-a6f30",
    storageBucket: "teamvotingapp-a6f30.appspot.com",
    messagingSenderId: "1034193756692",
    appId: "1:1034193756692:web:a8d0a307c652253698bd01"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();