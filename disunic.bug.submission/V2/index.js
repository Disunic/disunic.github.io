const firebaseConfig = {
  apiKey: "AIzaSyA5LS_YWxEDQhLOP9x97R1cCLrxQoLP_Bs",
  authDomain: "bug-report-c135b.firebaseapp.com",
  projectId: "bug-report-c135b",
  storageBucket: "bug-report-c135b.appspot.com",
  messagingSenderId: "1088378230875",
  appId: "1:1088378230875:web:28d34c48fec9f1d838877e",
  measurementId: "G-R5209KV0JB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const fetchChat = db.ref("bugs/");
window.scrollTo(0, document.body.scrollHeight);
document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
  window.scrollTo(0, document.body.scrollHeight);
  e.preventDefault();
  window.scrollTo(0, document.body.scrollHeight);
  const timestamp = Date.now();
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const product = document.getElementById("product");
  const bug = document.getElementById("bug");
  const Username = username.value;
  const Email = email.value;
  const Product = product.value;
  const Explaing = bug.value;
  const YMD = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  username.value = "";
  email.value = "";
  bug.value = "";
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // db.ref("messages/" + timestamp).set({
  db.ref("Bugs/" + timestamp).set({
    Username,
    Email,
    Product,
    Explaing,
    YMD,
  });
  const Thanks = document.getElementById("Thanks")
  Thanks.innerHTML += ` <p class="p1">Thank you for your Feedback 👌</p>
    <p class="p2">We are trying to fixed this bug soon.</p>
    <button onclick="document.getElementById('Thanks').style.display='none'">Close</button>`
  Thanks.style.display = "block";
}