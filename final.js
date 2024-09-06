//for loop to add tabindex 0 to all images 
function tabImage() {
    let tabItems = document.querySelectorAll(".thumbs");
    for(let i = 0; i < tabItems.length; i++) {
        tabItems[i].setAttribute("tabindex", "0");
    }
}

function show(thumbBig) {
    document.querySelector("#largePicture").innerHTML = thumbBig.alt;
    document.querySelector("#largePicture").style.backgroundImage = `url(${thumbBig.src})`
}

function hide() {
    document.querySelector("#largePicture").innerHTML = "Hover (or tab) over an image to display it here";
    document.querySelector("#largePicture").style.backgroundImage = `url(${''})`
}
