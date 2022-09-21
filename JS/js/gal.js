let modal = document.getElementById("myModal");
let imgs = document.querySelectorAll(".imgs");

let imgBox = document.getElementById("modalImg");

for(let i = 0; i < imgs.length; i++) {
    let img = imgs [i];
    img.onclick = function(){
        modal.style.display = "block";
        imgBox.src = this.src;
    }
}; 

let exit = document.getElementById("x")

exit.onclick = function(){
    modal.style.display = "none";
}