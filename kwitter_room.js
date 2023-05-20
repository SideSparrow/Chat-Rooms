
var firebaseConfig = {
      apiKey: "AIzaSyARAYuNZ6A67rQBNZD-nfBs0aouJXUmEv0",
      authDomain: "kwitter-7bf13.firebaseapp.com",
      databaseURL: "https://kwitter-7bf13-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bf13",
      storageBucket: "kwitter-7bf13.appspot.com",
      messagingSenderId: "392452319592",
      appId: "1:392452319592:web:a87ea23cc20f0f08038edd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
