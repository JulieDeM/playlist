var pageOne = new XMLHttpRequest();
var image1 = document.getElementById('onealbum');
var image2 = document.getElementById('twoalbum');
var image3 = document.getElementById('threealbum');
var emptArr =[];
var num = [0,1,2,3,4];


window.onload = function(){
  pageOne.onreadystatechange = function(){
    if(pageOne.readyState === 4 && pageOne.status < 400){
        var jason = JSON.parse(pageOne.responseText);
        var i = Math.floor(Math.random(emptArr)*4);
        var j = Math.floor(Math.random(emptArr)*4);
        var k = Math.floor(Math.random(emptArr)*4);
        console.log(i);
        image1.innerHTML += "<img src='./images/" + jason.results[i].cover_art + "'/>";
        image2.innerHTML += "<img src='./images/" + jason.results[j].cover_art + "'/>";
        image3.innerHTML += "<img src='./images/" + jason.results[k].cover_art + "'/>";
        emptArr.filter;
        // if()
      }
    }
  pageOne.open('Get', 'https://lit-fortress-6467.herokuapp.com/object');
  pageOne.send();
}
