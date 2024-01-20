let database = document.getElementById("content");

const xhrnewm = new XMLHttpRequest();
xhrnewm.open("GET", `./Api.Disunic.io/databases/database.json`, true);

xhrnewm.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    console.table(api)
    let con = "";
    api.forEach(function (element) {
      let contentss = `
            <section id="sed1">
            <div class="se1">
                <h2>${element["title"]}</h2>
                <p>${element["description"]}</p>
                <a onclick="audiolay()" href="${element["trynow"]}" target="_blank">Try Now</a>
                <a onclick="audiolay()" style="display:${element["display"]}" href="${element["download"]}" target="_blank">Download</a>
                <p class="avail">${element["available"]}</p>
            </div>
            <div class="se2">
                <img src="${element["image"]}" draggable="false" style="${element["display"]}">
            </div>
        </section>`
      con += contentss;
    });
    database.innerHTML = con;
  } else {
    console.log("_🤔");
  }
};
xhrnewm.send();