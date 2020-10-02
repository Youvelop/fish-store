import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJu2hmxblUKeCX2ihlNDK6-_gCLIrywSA",
    authDomain: "catch-the-fish-12d29.firebaseapp.com",
    databaseURL: "https://catch-the-fish-12d29.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export 
export default base;