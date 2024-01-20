// window.SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   const recognition = new SpeechRecognition();
//   recognition.interimResults = true;
//   const transcript_element = document.getElementById("transcript");
//   const talk_button = document.getElementById("start");
//   const end_button = document.getElementById("end");
//   let Qt = document.getElementById("transcript");

//   recognition.addEventListener("result", (e) => {
//     const transcript = Array.from(e.results)
//       .map((result) => result[0])
//       .map((result) => result.transcript)
//       .join("");
//     Qt.textContent = transcript;
//     console.log(transcript);
//     let val = (document.querySelector("input").value = transcript);
//     if (e.results[0].isFinal) {
//       if (val == "open YouTube") {
//         let text = "Opening YouTube";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://www.youtube.com/",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;
//       } else if (val == "open Keep notes") {
//         let text = "Opening Keep Notes";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://keep.google.com/u/0/",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;
//       } else if (val == "open Google Map") {
//         let text = "Opening Google Map";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://www.google.co.in/maps/",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;
//       } else if (val == "open Gmail") {
//         let text = "Opening Gmail From Google";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://mail.google.com/",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;
//       }
//       else if (val == "open spotify") {
//         let text = "Opening Spotify";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://open.spotify.com/browse/featured",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;}
//         else if (val ==" spotify") {
//         let text = "Opening Spotify";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//         setTimeout(function () {
//           window.open(
//             "https://open.spotify.com/browse/featured",
//             "_self",
//             window.location.reload()
//           );
//         }, 500);
//         bn.disabled = true;
//       } else if (val == "Google") {
//         let text =
//           "   Ooooo ! google is my competitor. But Google Is Better then me. ";
//         const spel = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(spel);
//       }
//       else if (val == "barrel roll") {
//         barrelroll();
//         setTimeout(function (){
//           window.location.reload()
//         },1000)
//         bn.disabled=true;
//       }
      
//     }
//     if (e.results[0].isFinal) {
//       let bn = setTimeout(function () {
//         window.open(
//           "https://google.com/search?q=" + transcript,
//           "_self",
//           window.location.reload()
//         );
//       }, 2000);

//       let textt = "Opening " + transcript + "On Search Result";
//       const spell = new SpeechSynthesisUtterance(textt);
//       window.speechSynthesis.speak(spell);
//     }
//   });
//   recognition.addEventListener("end", () => {
//     end_button.disabled = true;
//     talk_button.disabled = false;
//   });
//   talk_button.addEventListener("click", () => {
//     end_button.disabled = false;
//     talk_button.disabled = true;
//     recognition.start();
//     setTimeout(function () {
//       show();
//       end_button.disabled = true;
//       talk_button.disabled = false;
//       recognition.stop();
//       recognition.addEventListener("end", () => recognition.stop());
//       console.log("enf");
//     }, 8000);
//   });

//   end_button.addEventListener("click", () => {
//     end_button.disabled = true;
//     recognition.addEventListener("end", () => recognition.stop());
//     talk_button.disabled = false;
//     recognition.stop();
//     recognition.addEventListener("end", () => recognition.stop());
//   });