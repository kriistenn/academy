import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyAGEPUhnQBlpux_5_RMQlYiyuDLBjKOsWE",
    authDomain: "form-submit-d159e.firebaseapp.com",
    projectId: "form-submit-d159e",
    storageBucket: "form-submit-d159e.appspot.com",
    messagingSenderId: "372043262223",
    appId: "1:372043262223:web:122b00bbee75e6967cf67a"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();