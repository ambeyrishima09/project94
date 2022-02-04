
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAbjMxQeBD8ly46Kcay5ZNh-JKLKiJ5fhw",
      authDomain: "classtest-99cb9.firebaseapp.com",
      projectId: "classtest-99cb9",
      storageBucket: "classtest-99cb9.appspot.com",
      messagingSenderId: "379207061564",
      appId: "1:379207061564:web:e4fd4b4c519be07f59b339",
      measurementId: "G-7CJSTRZQ7S"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
