let searchch = document.getElementById("searchch");
let searchch2 = document.getElementById("searchch2");
let engine = "";
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
function changesearchengine2() {
    document.getElementById("searchengines").style.display = "block"
    document.getElementById("main").style.opacity = "10%"
    document.getElementById("main2").style.opacity = "10%"
}
function changesearchenginecls2() {
    document.getElementById("searchengines").style.display = "none"
    document.getElementById("logo").style.display = "none"
    document.getElementById("main").style.opacity = "100"
    document.getElementById("main2").style.opacity = "100"
}
function googlesearchforlogic() {
    engine = "Google"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Google");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    searchch.src = "./img/external/googlelogo.png";
    searchch2.src = "./img/external/googlelogo.png";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function googlesearchforlogic2() {
    engine = "Google"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Google");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    searchch.src = "./img/external/googlelogo.png";
    searchch2.src = "./img/external/googlelogo.png";
    changesearchenginecls2();
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
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/binglogo.jpeg";
    searchch2.src = "./img/external/binglogo.jpeg";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function bingsearchforlogic2() {
    engine = "Bing"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Bing");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/binglogo.jpeg";
    searchch2.src = "./img/external/binglogo.jpeg";
    changesearchenginecls2()
}
function bravesearchforlogic() {
    engine = "Brave"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Brave");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/brave.png";
    searchch2.src = "./img/external/brave.png";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function bravesearchforlogic2() {
    engine = "Brave"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Brave");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/brave.png";
    searchch2.src = "./img/external/brave.png";
    changesearchenginecls2()
}
function yahoosearchforlogic() {
    engine = "Yahoo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Yahoo");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/yahoologo.jpeg";
    searchch2.src = "./img/external/yahoologo.jpeg";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function yahoosearchforlogic2() {
    engine = "Yahoo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Yahoo");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/yahoologo.jpeg";
    searchch2.src = "./img/external/yahoologo.jpeg";
    changesearchenginecls2()
}
function duckduckgosearchforlogic() {
    engine = "DuckDuckGo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "DuckDuckGo");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/duckduckgologo.png";
    searchch2.src = "./img/external/duckduckgologo.png";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function duckduckgosearchforlogic2() {
    engine = "DuckDuckGo"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "DuckDuckGo");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/duckduckgologo.png";
    searchch2.src = "./img/external/duckduckgologo.png";
    changesearchenginecls2()
}
function metagersearchforlogic() {
    engine = "Metager"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Metager");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/metager.png";
    searchch2.src = "./img/external/metager.png";
    changesearchenginecls()
    noneInformationdesign();
    check2();
}
function metagersearchforlogic2() {
    engine = "Metager"
    localStorage.removeItem("engine");
    localStorage.setItem("engine", "Metager");
    let searchch = document.getElementById("searchch");
    let searchch2 = document.getElementById("searchch2");
    document.getElementById("searchengines").style.display = "none"
    searchch.src = "./img/external/metager.png";
    searchch2.src = "./img/external/metager.png";
    changesearchenginecls2()
}

function Informationdesign() {
    document.getElementById("logo").style.display = "none";
    document.getElementById("searchcontent").style.display = "none";
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("bidark").setAttribute("onclick", "")
    document.getElementById("main2").style.display = "none";
    onlight()
}
function noneInformationdesign() {
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.display = "block";
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("bidark").setAttribute("onclick", "darkmode()")
    document.getElementById("main2").style.display = "block";
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
        Informationdesign()
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
}
function check2() {
    // for mode
    if (localStorage.getItem("mode") === "light") {
        document.getElementById("bilight").style.display = "none"
        console.log("Light Mode")
        onlight()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (localStorage.getItem("mode") === "dark") {
        document.getElementById("bidark").style.display = "none"
        console.log("Dark Mode")
        ondark()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("bilight").style.display = "none"
        console.log("Light Mode")
        onlight()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("bidark").style.display = "none"
        console.log("Dark Mode")
        ondark()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
}


function lightmode() {
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "light")
    onlight()
}
function darkmode() {
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "dark")
    ondark()
}
function onlight() {
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
    $('.sed1').css("background","white")
    $('.se1h2').css("color","black")
    document.getElementById("searchengines").style.background = "white"
    document.getElementById("searchengines").style.color = "black"
    document.getElementById("biclose").style.color = "black"
    document.getElementById("sugen").style.background = "white"
    document.getElementById("sugen").style.color = "black";
    document.getElementById("btn2").style.color = "black";
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    $('input').removeClass('inp');
}
function ondark() {
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
    $('.sed1').css("background","#1f2533")
    $('.se1h2').css("color","white")
    document.getElementById("se1h2").style.color = "white"
    document.getElementById("searchengines").style.background = "#1f2533"
    document.getElementById("searchengines").style.color = "white"
    document.getElementById("biclose").style.color = "white"
    document.getElementById("sugen").style.background = "#1f2533"
    document.getElementById("sugen").style.color = "white";
    document.getElementById("btn2").style.color = "white";
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    $('input').addClass('inp');
}
function inpclick() {
    document.getElementById("main2").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("searchcontent").style.marginTop = "0px";
    document.getElementById("searchcontent").style.width = "100%";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("searchcontent").style.animation = "ani1 500ms";
    document.getElementById("searchch2").style.display = "block";
    document.getElementById("nav").style.display = "none";
    document.getElementById("searchcontent").style.borderRadius = "0px";
    document.getElementById("searchbar").style.borderRadius = "0px";
    document.getElementById("searchbar").style.height = "65px";
    document.getElementById("info").style.display = "none"
    document.getElementById("google").setAttribute("onclick", "googlesearchforlogic2(),googlesearch()")
    document.getElementById("bing").setAttribute("onclick", "bingsearchforlogic2(),bingsearch()")
    document.getElementById("brave").setAttribute("onclick", "bravesearchforlogic2(),bravesearch()")
    document.getElementById("yahoo").setAttribute("onclick", "yahoosearchforlogic2(),yahoosearch()")
    document.getElementById("duckduckgo").setAttribute("onclick", "duckduckgosearchforlogic2(),duckduckgosearch()")
    document.getElementById("metager").setAttribute("onclick", "metagersearchforlogic2(),metagersearch()")
}
function inpclickback() {
    document.getElementById("main2").style.display = "";
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.marginTop = "0px";
    document.getElementById("searchcontent").style.width = "85%";
    document.getElementById("searchcontent").style.animation = "ani2 500ms";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("searchch2").style.display = "none";
    document.getElementById("nav").style.display = "flex";
    document.getElementById("searchcontent").style.borderTopRightRadius = "10px";
    document.getElementById("searchcontent").style.borderTopLeftRadius = "10px";
    document.getElementById("searchbar").style.borderTopLeftRadius = "10px";
    document.getElementById("searchbar").style.borderTopRightRadius = "10px";
    document.getElementById("sugen").style.display = "none";
    document.getElementById("searchbar").style.height = "55px";
    document.getElementById("info").style.display = "flex";
    removeandcorrect()
}
function removeandcorrect() {
    document.getElementById("google").setAttribute("onclick", "googlesearchforlogic(),googlesearch()")
    document.getElementById("info").setAttribute("onclick", "informationsearchforlogic()")
    document.getElementById("bing").setAttribute("onclick", "bingsearchforlogic(),bingsearch()")
    document.getElementById("brave").setAttribute("onclick", "bravesearchforlogic(),bravesearch()")
    document.getElementById("yahoo").setAttribute("onclick", "yahoosearchforlogic(),yahoosearch()")
    document.getElementById("duckduckgo").setAttribute("onclick", "duckduckgosearchforlogic(),duckduckgosearch()")
    document.getElementById("metager").setAttribute("onclick", "metagersearchforlogic(),metagersearch()")
}