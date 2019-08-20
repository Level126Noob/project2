const searchForm = document.querySelector('#searhForm')
const grabSearch = () => {
  console.log(searchForm.value)
}
// function to grab the text in the search bar
document.getElementById('searchButton').addEventListener('click', grabSearch)

// take that text and run it through postgres
