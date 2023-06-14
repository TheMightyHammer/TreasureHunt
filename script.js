var randomNumber1 = (Math.floor(Math.random()*200)+1);
var randomNumber2 = (Math.floor(Math.random()*200)+1);
var randomNumber3 = (Math.floor(Math.random()*200)+1);
var randomNumber4 = (Math.floor(Math.random()*200)+1);
var randomNumber5 = (Math.floor(Math.random()*200)+1);
var randomNumber6 = (Math.floor(Math.random()*200)+1);
var randomNumber7 = (Math.floor(Math.random()*200)+1);
var randomNumber8 = (Math.floor(Math.random()*200)+1);
var randomNumber9 = (Math.floor(Math.random()*200)+1);


document.querySelectorAll("img")[0].src="https://picsum.photos/id/"+randomNumber1+"/200/";
document.querySelectorAll("img")[1].src="https://picsum.photos/id/"+randomNumber2+"/200/";
document.querySelectorAll("img")[2].src="https://picsum.photos/id/"+randomNumber3+"/200/";
document.querySelectorAll("img")[3].src="https://picsum.photos/id/"+randomNumber4+"/200/";
document.querySelectorAll("img")[4].src="https://picsum.photos/id/"+randomNumber5+"/200/";
document.querySelectorAll("img")[5].src="https://picsum.photos/id/"+randomNumber6+"/200/";
document.querySelectorAll("img")[6].src="https://picsum.photos/id/"+randomNumber7+"/200/";
document.querySelectorAll("img")[7].src="https://picsum.photos/id/"+randomNumber8+"/200/";
document.querySelectorAll("img")[8].src="https://picsum.photos/id/"+randomNumber9+"/200/";


function refreshPage() {
    window.location.reload();
}

for (var i =0; i<document.querySelectorAll(".box").length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        this.classList.toggle("filter");
});
}
//  if (document.querySelectorAll("img") {
//     
//  }

// document.querySelector(".box")[i].classList.toggle('filter')