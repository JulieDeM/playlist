var pageTwo = new XMLHttpRequest();
var image1 = document.getElementById('imageSpot1');
console.log(image1)
var image2 = document.getElementById('imageSpot2');
var image3 = document.getElementById('imageSpot3');
var image4 = document.getElementById('imageSpot4');
var image5 = document.getElementById('imageSpot5');
var image6 = document.getElementById('imageSpot6');
var divScroll = document.getElementById('scrollClass');
var buttonsubmit = document.getElementById('buttonsubmi');
var bin = document.getElementById('appDiv');
var allImages = document.getElementsByClassName('albumImages');
var newP = document.createElement('p');
var clearTracks = document.getElementById('buttonclear');
var submitBit = document.getElementById('buttonsubmit');

window.onload = function(){
  console.log("testtwo");
  pageTwo.onreadystatechange = function(){
    if(pageTwo.readyState === 4 && pageTwo.status < 400){
        var jason = JSON.parse(pageTwo.responseText);
        console.log("TESTONE");
console.log("CAN I GET HERE");
  for (var i = 0; i < allImages.length; i++) {
      // allImages[i];
      // console.log(allImages[i])
      if(jason.results[i].cover_art === "21.jpg"){
        image1.addEventListener('click', function(){
          newP.innerHTML = "<img src='./images/" + jason.results[1].cover_art + "'/>";
          newP.appendChild(bin)
        })
        }
        console.log(jason.results[i].cover_art)
      }
    }
}
}

clearTracks.addEventListener('click', function(){
  newP.innerHTML="";
  bin.appendChild(newP)
})








//
//
//
//
//
//
// window.onload = function(){
//   pageTwo.onreadystatechange = function(){
//     if(pageTwo.readyState === 4 && pageTwo.status < 400){
//         var jason = JSON.parse(pageTwo.responseText);
// }
// // for (var i = 0; i < array.length; i++) {
// //   array[i]
// // }
//   if(jason.results[i].cover_art.value === image1){
//
//   }
//         image1 = image1.innerHTML += "<img src='./images/" + jason.results[1].cover_art + "'/>";
//         image2.innerHTML += "<img src='./images/" + jason.results[2].cover_art + "'/>";
//         image3.innerHTML += "<img src='./images/" + jason.results[3].cover_art + "'/>";
//         image4.innerHTML += "<img src='./images/" + jason.results[4].cover_art + "'/>";
//         image5.innerHTML += "<img src='./images/" + jason.results[5].cover_art + "'/>";
//
//
//       }
//       image1.addEventListener('click', function(){
//         bin.innerHTML = "testing this"
//       })
//     }
//   pageTwo.open('Get', 'https://lit-fortress-6467.herokuapp.com/object');
//   pageTwo.send();
// }


// window.onload = function(){
//   pageTwo.onreadystatechange = function(){
//     if(pageTwo.readyState === 4 && pageTwo.status < 400){
//         var jason = JSON.parse(pageTwo.responseText);
// }
// var i+=function getRandomInt(0, 6) {
//   return Math.floor(Math.random() * (6 - 0 + 1)) + 0;
//
//
//         image1.innerHTML += "<img src='./images/" + jason.results[1].cover_art + "'/>";
//         image2.innerHTML += "<img src='./images/" + jason.results[2].cover_art + "'/>";
//         image3.innerHTML += "<img src='./images/" + jason.results[3].cover_art + "'/>";
//         image4.innerHTML += "<img src='./images/" + jason.results[4].cover_art + "'/>";
//         image5.innerHTML += "<img src='./images/" + jason.results[5].cover_art + "'/>";
//
//       }
//       // scrollClass.appendChild.image1;
//     }
//   pageTwo.open('Get', 'https://lit-fortress-6467.herokuapp.com/object');
//   pageTwo.send();
// }
