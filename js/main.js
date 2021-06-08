var getTheUserName = prompt("TEXT ERROR!");

console.log(getTheUserName);

document.getElementById("username").innerText = getTheUserName;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })