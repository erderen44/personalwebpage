var projectNumber = 1;
showProject(projectNumber);

function changePic(n) {
  showProject(projectNumber += n);
}

function currentPic(n) {
  showProject(projectNumber = n);
}

function showProject(n) {
  var i;
  var projectsToShow = document.getElementsByClassName("col-12 projects");
  var dots = document.getElementsByClassName("dot");
  if (n > projectsToShow.length) {projectNumber = 1} 
  if (n < 1) {projectNumber = projectsToShow.length}
  for (i = 0; i < projectsToShow.length; i++) {
      projectsToShow[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  projectsToShow[projectNumber-1].style.display = "block"; 
  dots[projectNumber-1].className += " active";
console.log(projectsToShow[projectNumber-1].style.display);    
}