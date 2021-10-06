var firebaseConfig = {
      apiKey: "AIzaSyCRfLjmZHuk5J2jFAORSyUFVteTP1JpOk4",
      authDomain: "new-k-11bef.firebaseapp.com",
      projectId: "new-k-11bef",
      storageBucket: "new-k-11bef.appspot.com",
      messagingSenderId: "491977744955",
      appId: "1:491977744955:web:4c40d6b0dea9e374f4f21e"
};
firebase.initializeApp(firebaseConfig);

user_name2 = localStorage.getItem("user_name")
room_name2 = localStorage.getItem("room_name")

function send() {
      message = document.getElementById("MSG").value;
      firebase.database().ref(room_name2).push({
            name: user_name2,
            message: message,
            like: 0

      });
      document.getElementById("MSG").value = "";
};

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                  }
            });
      });
}
getData();

function Log0ut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}