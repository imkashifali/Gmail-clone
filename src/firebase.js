import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBJpL_QQFtT_mXg4TgyL7Hs6IT2b8jYZYY",
	authDomain: "fix-1ef96.firebaseapp.com",
	projectId: "fix-1ef96",
	storageBucket: "fix-1ef96.appspot.com",
	messagingSenderId: "689760649494",
	appId: "1:689760649494:web:99e8bb3e8677c0ecd79037",
	measurementId: "G-1NCW5SD1RM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
