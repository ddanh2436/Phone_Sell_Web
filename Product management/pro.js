// Import the functions you need from the SDKs you need
console.log("Sds");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1xXPfWiKtFqxOF2WTlfWZ723j0wIvs8",
  authDomain: "webbanhang-4c605.firebaseapp.com",
  databaseURL: "https://webbanhang-4c605-default-rtdb.firebaseio.com",
  projectId: "webbanhang-4c605",
  storageBucket: "webbanhang-4c605.appspot.com",
  messagingSenderId: "41721583308",
  appId: "1:41721583308:web:658729e557d77e1c2d1469",
  measurementId: "G-H2WQH34MTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();

function showProduct() {
  const dbref = ref(db);
  for (let i = 1; i < 21; i++) {
    get(child(dbref, `Products/Product ${i}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = snapshot.val();
          const productName = productData.Name;
          const productPrice = productData.Price;
          const productQuantity = productData.Quantity;

          const trTable = document.createElement("tr");
          trTable.setAttribute("id", `Product${i}`);

          const tdTableID = document.createElement("td");
          const tdTableName = document.createElement("td");
          const tdTablePrice = document.createElement("td");
          const tdTableQuantity = document.createElement("td");

          tdTableID.innerText = i;
          tdTableName.innerText = productName;
          tdTablePrice.innerText = productPrice;
          tdTableQuantity.innerText = productQuantity;

          trTable.appendChild(tdTableID);
          trTable.appendChild(tdTableName);
          trTable.appendChild(tdTablePrice);
          trTable.appendChild(tdTableQuantity);

          document.getElementById("table").appendChild(trTable);
        }
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
      });
  }
}

function loadInfo(id){
  
}




function selectOnlyRow() {
  for (i = 1; i < 11; i++) {
    try {
      document.getElementById(i).checked = false;
    } catch (error) {}
  }
  document.getElementById(id).checked = true;
}



window.addEventListener("load", showProduct);
