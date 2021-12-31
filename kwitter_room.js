
var firebaseConfig = {
      apiKey: "AIzaSyANaTrgQdC8WOXs_LNCQnt_A5zMMDaWnT0",
      authDomain: "kwitter-app-9706d.firebaseapp.com",
      databaseURL: "https://kwitter-app-9706d-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9706d",
      storageBucket: "kwitter-app-9706d.appspot.com",
      messagingSenderId: "682707557151",
      appId: "1:682707557151:web:e4e690e94e3d819016ee2a"
    };
  
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
