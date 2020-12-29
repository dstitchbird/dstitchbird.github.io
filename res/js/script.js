var elem = document.getElementById("wgr");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => grid_fun(json));

function grid_fun(values) {
  console.log(values);
  //elem.appendChild();
}
