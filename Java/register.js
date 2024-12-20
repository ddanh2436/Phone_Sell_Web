// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBujIwoE2iCfachjj2GHITya8Yuz5IqRfI",
  authDomain: "sale-web-58c64.firebaseapp.com",
  databaseURL: "https://sale-web-58c64-default-rtdb.firebaseio.com",
  projectId: "sale-web-58c64",
  storageBucket: "sale-web-58c64.appspot.com",
  messagingSenderId: "769764857149",
  appId: "1:769764857149:web:2e72c9e9e33dac508ee154",
  measurementId: "G-E7HGTV4N3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const loginButton = document.querySelector("#login");
loginButton.addEventListener("click", checkLogin);
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();
function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const dbref = ref(db);
  get(child(dbref, "User/" + username)).then((snapshot) => {
    if (snapshot.exists()) {
      if (password == snapshot.val()) {
        alert("Login succesful");
        window.location="./productpage/product.html"
      } else {
        alert("Wrong email or password");
      }
    }
  });
}
