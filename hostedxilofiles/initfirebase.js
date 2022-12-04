      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      import { getFirestore, collection, addDoc,getDocs,onSnapshot,query,deleteDoc,doc,getDoc,setDoc,updateDoc  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDgKgolN15lpR8XG8v35sZ53uwenoGTnow",
        authDomain: "xiloplayers.firebaseapp.com",
        projectId: "xiloplayers",
        storageBucket: "xiloplayers.appspot.com",
        messagingSenderId: "105717431557",
        appId: "1:105717431557:web:d8442597cb70eb883d4b6c"
      };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore();
      var q = query(collection(db, "playersXilo"));
