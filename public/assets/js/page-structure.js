
document.getElementById('search').onkeydown(function (e) {
  var code = (e.keyCode ? e.keyCode : e.which)
  if (code === 13) { 
    document.getElementById('searchButton').trigger('click')
  }
})
// ========================= DROP SELECT

// Event listener to tell if the widget is working and which one to use
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget")
  document.body.classList.add("widget")
})

// basically allows me to use the forEach function'
NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback)
}

// function for deactivating the custom widget
function deactivateSelect(select) {
  
  // if widget no active no do
  if (!select.classList.contains('active'))
  return

  // grab list of options
  const optList = select.querySelector('.optList')
  // hide/show
  optList.classList.add('hidden')
  select.classList.remove('active')
}

// activate the widget
function activeSelect(select, selectList) {

  //check to see if its already active
  if (select.classList.contains('active')) 
  return

  //turn off all active widgets
  selectList.forEach(deactivateSelect)

  //then activate this specific widget
  select.classList.add('active')
}

//function to open/close options
function toggleOptList(select) {

  //list is kept from widget
  const optList = select.querySelector('.optList')

  //change the class to show/hide
  optList.classList.toggle('hidden')
}

// this is used to hihglight options
function highlightOption(select, option) {
  
  //grabs the whole list of options so we can use them
  const optionList = select.querySelectorAll('.option')

  //remove highlight from all other options
  optionList.forEach(function (other) {
    other.classList.remove('highlight')
  })

  //select correct option
  option.classList.add('highlight')
}

//start event binding when the document is loaded
window.addEventListener('load', function () {
  const selectList = document.querySelectorAll('.select')

  //initialized
  selectList.forEach(function (select) {

    //grab the option elements
    const optionList = select.querySelectorAll('.option') 

    //listens for the mouseover and activates highlightOption
    optionList.forEach(function (option) {
      option.addEventListener('mouseover', function () {
        highlightOption(select, option)
      })
    })

    //when a click happens options show
    select.addEventListener('click', function (event) {
      toggleOptList(select)
    })

    //in case the user hits tab basically
    select.addEventListener('focus', function (event) {
      activeSelect(select, selectList)
    })

    //if the widget looses focus deactivate
    select.addEventListener('blur', function (event) {
      deactivateSelect(select)
    })
  })
})

