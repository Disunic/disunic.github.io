let searchch = document.getElementById("searchch");
let engine = ""
function changesearchengine() {
    document.getElementById("searchengines").style.display = "block"
    document.getElementById("main").style.opacity = "10%"
    document.getElementById("main2").style.opacity = "10%"
}
function changesearchenginecls() {
    document.getElementById("searchengines").style.display = "none"
    document.getElementById("main").style.opacity = "100"
    document.getElementById("main2").style.opacity = "100"
}
function googlesearchforlogic() {
    engine = "Google"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Google");
    let searchch = document.getElementById("searchch");
    searchch.src = "./img/external/googlelogo.png";
    changesearchenginecls()
    noneInformationdesign();
}
function informationsearchforlogic() {
    engine = "Information"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Information");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/disuniclogo.png";
    changesearchenginecls()
    Informationdesign()
}
function bingsearchforlogic() {
    engine = "Bing"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Bing");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/binglogo.jpeg";
    changesearchenginecls()
    noneInformationdesign();
}
function bravesearchforlogic() {
    engine = "Brave"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Brave");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/brave.png";
    changesearchenginecls()
    noneInformationdesign();
}
function yahoosearchforlogic() {
    engine = "Yahoo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Yahoo");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/yahoologo.jpeg";
    changesearchenginecls()
    noneInformationdesign();
}
function duckduckgosearchforlogic() {
    engine = "DuckDuckGo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "DuckDuckGo");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/duckduckgologo.png";
    changesearchenginecls()
    noneInformationdesign();
}
function metagersearchforlogic() {
    engine = "Metager"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Metager");
    let searchch = document.getElementById("searchch");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/metager.png";
    changesearchenginecls()
    noneInformationdesign();
}

function Informationdesign(){
    document.getElementById("logo").style.display ="none";
    document.getElementById("searchcontent").style.display ="none";
    document.getElementById("chatbox").style.display ="block";
    document.getElementById("bidark").setAttribute("onclick","")
    document.getElementById("main2").style.display ="none";
    onlight()
}
function noneInformationdesign(){
    document.getElementById("logo").style.display ="inline-flex";
    document.getElementById("searchcontent").style.display ="block";
    document.getElementById("chatbox").style.display ="none";
    document.getElementById("bidark").setAttribute("onclick","darkmode()")
    document.getElementById("main2").style.display ="block";
}
function check() {
    // for search
    document.getElementById("sugen").style.display = "none";
    if (localStorage.getItem("engine") === "Google") {
        googlesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Bing") {
        bingsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Information") {
        informationsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Brave") {
        bravesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Yahoo") {
        yahoosearchforlogic()
    }
    else if (localStorage.getItem("engine") === "DuckDuckGo") {
        duckduckgosearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Metager") {
        metagersearchforlogic()
    }
    else {
        googlesearchforlogic()
    }
    // for mode
    if (localStorage.getItem("mode") === "light"){
        document.getElementById("bilight").style.display = "none"
        console.log("Light Mode")
        onlight()
    }
    else if (localStorage.getItem("mode") === "dark"){
        document.getElementById("bidark").style.display = "none"
        console.log("Dark Mode")
        ondark()
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("bilight").style.display = "none"
        console.log("Light Mode")
        onlight()
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("bidark").style.display = "none"
        console.log("Dark Mode")
        ondark()
    }
}
function lightmode(){
    localStorage.removeItem("mode")
    localStorage.setItem("mode","light")
    onlight()
}
function darkmode(){
    localStorage.removeItem("mode")
    localStorage.setItem("mode","dark")
    ondark()
}
function onlight(){
    document.getElementById("bilight").style.display = "none"
    document.getElementById("bidark").style.display = "block"
    document.getElementById("body").style.background = "white"
    document.getElementById("u").style.color = "#1f2533"
    document.getElementById("searchch").style.boxShadow = "0px 0px 5px 0px #747474"
    document.getElementById("nav").style.background = "white"
    document.getElementById("ch3").style.color = "black"
    document.getElementById("searchbar").style.background = "white"
    document.getElementById("inp").style.background = "white"
    document.getElementById("inp").style.color = "black"
    document.getElementById("btn").style.color = "black"
    document.getElementById("sed1").style.background = "white"
    document.getElementById("se1h2").style.color = "black"
    document.getElementById("searchengines").style.background = "white"
    document.getElementById("searchengines").style.color = "black"
    document.getElementById("biclose").style.color = "black"
    document.getElementById("sugen").style.background = "white"
    document.getElementById("sugen").style.color = "black";
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    $('input').removeClass('inp');
}
function ondark(){
    document.getElementById("bilight").style.display = "block"
    document.getElementById("bidark").style.display = "none"
    document.getElementById("body").style.background = "#1f2533"
    document.getElementById("u").style.color = "white"
    document.getElementById("searchbar").style.background = "white"
    document.getElementById("sugen").style.background = "white"
    document.getElementById("searchch").style.boxShadow = "0px 0px 5px 0px #ffffff"
    document.getElementById("nav").style.background = "rgb(97 97 97 / 24%)"
    document.getElementById("ch3").style.color = "white"
    document.getElementById("searchbar").style.background = "#1f2533"
    document.getElementById("inp").style.background = "#1f2533"
    document.getElementById("inp").style.color = "white"
    document.getElementById("btn").style.color = "white"
    document.getElementById("sed1").style.background = "#1f2533"
    document.getElementById("se1h2").style.color = "white"
    document.getElementById("searchengines").style.background = "#1f2533"
    document.getElementById("searchengines").style.color = "white"
    document.getElementById("biclose").style.color = "white"
    document.getElementById("sugen").style.background = "#1f2533"
    document.getElementById("sugen").style.color = "white";
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    $('input').addClass('inp');
}
function inpclick(){
    document.getElementById("main2").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("searchcontent").style.marginTop = "85px";
    document.getElementById("searchcontent").style.width = "90%";
    document.getElementById("btn2").style.display = "block";
}
function inpclickback(){
    document.getElementById("main2").style.display = "";
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.marginTop = "0px";
    document.getElementById("searchcontent").style.width = "85%";
    document.getElementById("btn2").style.display = "none";
}