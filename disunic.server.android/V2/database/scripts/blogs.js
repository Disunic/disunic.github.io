let blogs = document.getElementById("blogs");

// Create an ajax get request
const xhrblo = new XMLHttpRequest();
xhrblo.open("GET", `./database/jsons/blogs.json`, true);

// What to do when response is ready
xhrblo.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    // console.log(api)
    let pro1 = "";
    api.forEach(function (element) {
      let pro2 = `
            <div class="card">
                <h2 class="Hn">${element["title"]}</h2>
                <p class="ab">${element["description"]}</p>
                <p class="lang">${element["language"]}</p>
                <div class="btns">
                    <a href="${element["url1"]}">Deployment</a>
                    <a href="${element["url2"]}">GitHub</a>
                    <a href="${element["url3"]}">Codepen</a>
                    <a href="${element["url4"]}">Download_Source_Code</a>
                </div>
            </div>`
      pro1 += pro2;
    });
    blogs.innerHTML = pro1;
  } else {
    console.log("_🤔");
  }
};
xhrblo.send();