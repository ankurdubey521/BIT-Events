import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCL-VLKHcCPMdmGHtO4OtjK9DkWEC-Rucc",
  authDomain: "bitevents-4d1c5.firebaseapp.com",
  databaseURL: "https://bitevents-4d1c5.firebaseio.com",
  projectId: "bitevents-4d1c5",
  storageBucket: "bitevents-4d1c5.appspot.com",
  messagingSenderId: "1012861969204",
  appId: "1:1012861969204:web:fd077944634a9ae0"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();