// Handles Search on Enter
document.addEventListener("click"); 

document.getElementById('search').keydown(function (e) {
  var code = (e.keyCode ? e.keyCode : e.which)
  if (code === 13) { 
    document.getElementById('searchButton').trigger('click')
  }
})


document.getElementsByClassName("css-1yzkmx9").style.display = 'none';
