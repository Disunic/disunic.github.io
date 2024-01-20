window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("navbar").style.marginTop = "0px";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.borderRadius = "0px";
        document.getElementById("navbar").style.borderBottom = "5px solid white";
        // document.getElementById("navbar").style.boxShadow = "0px 3px 7px 2px white";
    } else {
        document.getElementById("navbar").style.width = "85%";
        document.getElementById("navbar").style.top = "35px";
        document.getElementById("navbar").style.borderRadius = "10px";
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar").style.borderBottom = "none";

    }
}