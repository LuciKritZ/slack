import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD91wi2RqrCHB7YQwehCmZ1CxyAxN7UJ84",
	authDomain: "slack-bfadb.firebaseapp.com",
	databaseURL: "https://slack-bfadb-default-rtdb.firebaseio.com",
	projectId: "slack-bfadb",
	storageBucket: "slack-bfadb.appspot.com",
	messagingSenderId: "1049809722086",
	appId: "1:1049809722086:web:8ff91de95e2437b4cd3927",
	measurementId: "G-EW7TVHZS00",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp();

// For explicit imports
export {auth, provider, firebaseTimestamp};

// For default import
export default db;
