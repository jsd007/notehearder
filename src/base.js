import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD-7STwMrXGsOPK3elBxOT8Gjm3-iNNs2I",
    authDomain: "vivid-bond-151713.firebaseapp.com",
    databaseURL: "https://vivid-bond-151713.firebaseio.com",
    projectId: "vivid-bond-151713",
    storageBucket: "vivid-bond-151713.appspot.com",
    messagingSenderId: "1016040658837"
})

const db = database(app)

export default Rebase.createClass(db)
