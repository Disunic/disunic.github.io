function googlesearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function bingsearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function bravesearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function yahoosearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function duckduckgosearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function metagersearch() {
    document.getElementById("inp").setAttribute('name', 'disunic')
}
function search() {
    let input = document.getElementById("inp").value
    if (engine === "Google") {
        window.open("https://google.com/search?q=" + input, "_self")
    }
    else if (engine === "Bing") {
        window.open("https://www.bing.com/search?q=" + input, "_self")
    }
    else if (engine === "Brave") {
        window.open("https://search.brave.com/search?q=" + input, "_self")
    }
    else if (engine === "Yahoo") {
        window.open("https://in.search.yahoo.com/search;_ylt=Awr1Tfk6LyNkpswTTja6HAx.;_ylc=X1MDMjExNDcyMzAwMgRfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZAMxSEM0dUtjbVJ2cWouRGJNYzlnbjBBBG5fcnNsdAMwBG5fc3VnZwM5BG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAM2BHF1ZXJ5A2dvb2dsZQR0X3N0bXADMTY4MDAyNzQ1Mw--?p=" + input, "_self")
    }
    else if (engine === "DuckDuckGo") {
        window.open("https://duckduckgo.com/q=" + input, "_self")
    }
    else if (engine === "Metager") {
        window.open("https://metager.org/meta/meta.ger3?eingabe=" + input, "_self")
    }
    else {

    }
}
