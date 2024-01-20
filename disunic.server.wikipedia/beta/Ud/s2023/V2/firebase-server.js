const firebaseConfig = {
    apiKey: "AIzaSyDcOVAuNj_0IWhQ8URyUPYBxymcF_N0e0w",
    authDomain: "wikipedia-search-keyword-8ae01.firebaseapp.com",
    projectId: "wikipedia-search-keyword-8ae01",
    storageBucket: "wikipedia-search-keyword-8ae01.appspot.com",
    messagingSenderId: "673726685404",
    appId: "1:673726685404:web:340541dbb02f87e65c1419",
    measurementId: "G-CR41HKMRJ9"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const fetchChat = db.ref("test/");
  window.scrollTo(0, document.body.scrollHeight);
  document.getElementById("message-form").addEventListener("submit", sendMessage);
  function sendMessage(e) {
    window.scrollTo(0, document.body.scrollHeight);
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
    const timestamp = Date.now();
    const seearch = document.getElementById("query");
    const Search = seearch.value;
    document
      .getElementById("messages")
    db.ref("Search/" + timestamp).set({
      Search,
    //   YMD,
    });
    
  }