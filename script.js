function openMenu(){
    document.querySelector(".resnavbar").style.display="flex";
}

function closemenu(){
    document.querySelector(".resnavbar").style.display="none";
}

// Show button after scrolling 100px
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll smoothly to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


//to get the navigation file ot all html


async function getHTMLfile(){
let newPromise = new Promise(function(resolve){
  let request = new XMLHttpRequest();
  request.open('GET',"navigation.html");
  request.onload = function(){
    if (request.status==200){
      resolve(request.response);
    }
    else{
      resolve("file not found , Take a good look on your file or check the file path");
    }
  }
  request.send();
});
document.getElementById("navigationBar").innerHTML= await newPromise;
}

getHTMLfile();


//to get the year for copyright 

let newDate = new Date().getFullYear();
document.getElementById("CopyrightYear").innerHTML=newDate;