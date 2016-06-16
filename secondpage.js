var pageTwo = new XMLHttpRequest();

var divScroll = document.getElementsByClassName('scrollClass')[0];
var buttonsubmit = document.getElementById('buttonsubmi');
var bin = document.getElementById('appDiv');
var allImages = document.getElementsByClassName('albumImages');
var newP = document.createElement('p');
var clearTracks = document.getElementById('buttonclear');
var submitBtn = document.getElementById('buttonsubmit');

pageTwo.onreadystatechange = function () {
  if(pageTwo.readyState === 4 && pageTwo.status < 400){
    var albums = JSON.parse(pageTwo.responseText).results;
    for (var i = 0; i < albums.length; i++) {
      var imgUrl = albums[i].cover_art;
      var img = document.createElement('img');
      img.src = 'images/' + imgUrl;
      img.addEventListener('click', function () {
        alert('hello')
        if(imgUrl === img.src){
          newP.innerHTML = albums[i].title;
          bin.appendChild(newP);
          console.log(newP)
        }
        else{

        }
      })
      divScroll.appendChild(img);
    }
  }
}

  pageTwo.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  pageTwo.send();


// make api call to get albums √
// iterate over data and append images to DOM √
//

// window.onload = function (){
//   console.log("testtwo");
//   pageTwo.onreadystatechange = function(){
//     console.log("hello there")
//     if(pageTwo.readyState === 4 && pageTwo.status < 400){
//       var jason = JSON.parse(pageTwo.responseText);
//       console.log(jason);
//       allImages.addEventListener('click', function(){
//       for (var i = 0; i < allImages.length; i++) {
//         if(jason.results[i].cover_art === "images/21.jpg"){
//             newP.innerHTML = jason.results[i].cover_art;
//             newP.appendChild(bin);
//         console.log(jason.results[i].cover_art)
//       }
//     }
//   })
//     pageTwo.open('GET', 'https://lit-fortress-6467.herokuapp.com/object',true);
//     pageTwo.send();
//   }
// }
// }

// clearTracks.addEventListener('click', function(){
//   newP.innerHTML="";
//   bin.appendChild(newP)
//   pageTwo.preventDefault();
// })


// submitBtn.addEventListener('click', function(){
//
//
//   pageTwo.open('POST', 'https://lit-fortress-6467.herokuapp.com/post');
//   pageTwo.send();
// })






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
