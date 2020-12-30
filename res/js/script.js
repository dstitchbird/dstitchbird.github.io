var elem = document.getElementById("wgr");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => grid_fun(json));

function grid_fun(values) {
  console.log(values);
  //elem.appendChild();
}

/* default click */
document.getElementById('default').click();

/* award tab */
function handleClick(evt, item) {
  var i, tabcontent, tablinks ,image;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  tabImage=document.getElementById('awardPlaceholder');
  if (item==='2011'){
    tabImage.src="/res/img/workgridbg1.jpg";
  }else if(item==='2012'){
    tabImage.src="/res/img/grid.svg";
  }else if(item==="2015"){
    tabImage.src="/res/img/workgridbg1.jpg";
  }
  
  

  document.getElementById(item).style.display = "block";
  evt.currentTarget.className += " active";
}
