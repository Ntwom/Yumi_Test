/*Go To Top Button*/
window.addEventListener("scroll", function(){
	var topbtn =document.querySelector(".top_btn");
	topbtn.classList.toggle("show_top_btn", window.scrollY>0);
});

/*Search Box*/
function openSearch() {
  document.getElementById("search-box").style.display = "block";
}

function closeSearch() {
  document.getElementById("search-box").style.display = "none";
}


