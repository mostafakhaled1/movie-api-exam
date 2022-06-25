$(document).ready(function(){
  $('.iconBar').click(function(){
    $('.iconToggelButton').toggleClass('close');
    $('.slideMenu').toggleClass('show');
  })
})
let fullName = document.getElementById('Name');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let email = document.getElementById('Email');
let age = document.getElementById('age');
let repassword = document.getElementById('repassword');
var allMovies=document.getElementById("searchAll");  // input search
var navLinks = document.querySelectorAll(".nav-link");
// get data
var treandMovie= [];
var itemMovie ="";
async function getData(){
  //let myResponse = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=11e108235fef823a7157ef00690999&language=en-US&page=1`);
  let myResponse = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b3c3e4f87a6808403cbe2a94f7a28b9e");
  let myData = await myResponse.json();
  treandMovie=myData.results;
  displayMovie();
}
allMovies.onkeyup=function(){
  getData(allMovies.value)};
getData();


// show data
function displayMovie()
{
var itemMovie ="";
for (var i=0; i < treandMovie.length; i++)
{
    itemMovie+=`
    <div class="col-md-4 col-sm-12">
    <div class="imgFilm">
      <img src="https://image.tmdb.org/t/p/w500${treandMovie[i].poster_path}" id="images">
      <div class="hoverTitle">
        <h2 id="title">${treandMovie[i].title}</h2>
        <p class="lead" id="pragraph">${treandMovie[i].overview}</p>
        <h6 id="rate"> Rate : ${treandMovie[i].vote_average}</h6>
        <h6 id="date">${treandMovie[i].release_date}</h6>
       </div>
    </div>
  </div>`;
}
document.getElementById("rowData").innerHTML = itemMovie;
}
// add event on link                                                                                                                                                                           
$(".nav-link").click(function (e) {
  let item=$(e.target).text();
     if(item =="Now playing")
  {
      movies("now_playing");
  }
  else if(item=="Popular")
  {
      movies("popular");
  }
  else if(item=="Top Rated")
  {
      movies("top_rated");
  }
  else if(item=="Trending")
  {
      
      movies("popular");
  }
  else if(item=="Upcoming")
  {
      movies("upcoming");
  }
})
// searcth
function search(searchTerm){
  for (let i = 0; i < treandMovie.length; i++) {
     let searchResult=[];
      if(treandMovie[i].original_title.toLowerCase().includes(searchTerm.toLowerCase()) == true ){
          console.log(treandMovie[i].original_title)
          searchResult.push(treandMovie[i]);
          displayMovie();
  }
  }
};
$("#searchAll").on("input",function (e){
let searchValue=e.target.value;
search(searchValue); 
})
// contact us .......
// save data in array 
var addValue= [];
if(localStorage.product !== null)
{
  addValue = JSON.parse(localStorage.product)
}else
{
  addValue = [];
}
// add data and show by local storage
function addPro() {
    if(vaildName() && vaildAge() && vaildEmail() && vaildPassword() && vaildRepassword() && vaildphone()){
      temp = {
        name : fullName.value,
        phone :phone.value,
        password: password.value,
        email  : email.value,
        age  : age.value,
        repassword : repassword.value
      }
      addValue.push(temp);
      console.log(localStorage.setItem('product',JSON.stringify(addValue)));
    }
}
// regax
// regex input name
function vaildName(){
  var testValid = false;
  var regex = /^[A-z][a-z]{3,10}[0 - 9]?$/
  if(regex.test(fullName.value) == true)
  {
    document.getElementById('Regex').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex').style.display = "block";
    testValid = false;
  }
  return testValid; 
}

// regex input phone
function vaildphone(){
  var testValid = false;
  var regex = /^[0-9\-\+]{9,15}$/
  if(regex.test(phone.value) == true)
  {
    document.getElementById('Regex1').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex1').style.display = "block";
    testValid = false;
  }
  return testValid; 
}

// regex input password
function vaildPassword(){
  var testValid = false;
  var regex = /^[A-z][a-z]{3,10}[0 - 9]?$/
  if(regex.test(password.value) == true)
  {
    document.getElementById('Regex2').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex2').style.display = "block";
    testValid = false;
  }
  return testValid; 
}

// regex input Email
function vaildEmail(){
  var testValid = false;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if(regex.test(email.value) == true)
  {
    document.getElementById('Regex3').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex3').style.display = "block";
    testValid = false;
  }
  return testValid; 
}

// regex input age
function vaildAge(){
  var testValid = false;
  var regex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/
  if(regex.test(age.value) == true)
  {
    document.getElementById('Regex4').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex4').style.display = "block";
    testValid = false;
  }
  return testValid; 
}

// regex input REpassword
function vaildRepassword(){
  var testValid = false;
  var regex = /^[A-z][a-z]{3,10}[0 - 9]?$/
  if(regex.test(repassword.value) == true)
  {
    document.getElementById('Regex5').style.display= "none";
    testValid = true;
  }else
  {
    document.getElementById('Regex5').style.display = "block";
    testValid = false;
  }
  return testValid; 
}


