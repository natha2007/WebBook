function popitup(url, windowName){
    newWindow = window.open(url, windowName,'height=400,width=600');
    if (window.focus) {newWindow.focus()}
    return false;
}

const modifyButton = document.getElementById("modBtn");
const accueil = document.getElementById("accueil");

/*
modifyButton.addEventListener("click", (event) => {
    popitup("/html/popup.html","popup window");
});
*/
    
const modifyBookCover = document.getElementById("mdBookCov");
const title = document.getElementById("title");
const author = document.getElementsByClassName("author");
const endText = document.getElementById("endText");

console.log(title);
console.log(modifyButton);


modifyBookCover.addEventListener("click", (event) => {
    title.innerHTML = "my new title";
    endText.innerHTML = "my new endText";
    [].forEach.call(author,function(author){author.innerHTML="new author";});
});

const changeButtonsDiv = document.getElementById("configHead");

changeButtonsDiv.style.display = "none";

modifyButton.addEventListener("click", (event) => {
    if (changeButtonsDiv.style.display === "none"){
        changeButtonsDiv.style.display = "block";
    } else {
        changeButtonsDiv.style.display = "none";
    }
   
});

const importDiv = document.getElementById("bodyImport");
const importButton = document.getElementById("impBook");

importDiv.style.display = "none";

importButton.addEventListener("click", (event) => {
    if (importDiv.style.display === "none"){
        importDiv.style.display = "block";
    } else {
        importDiv.style.display = "none";
    }
});
