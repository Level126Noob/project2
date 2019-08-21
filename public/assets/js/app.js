$(".deletebutton").on("click", function (event) {
  let id = $(this).data("id");

  $.ajax("/api/files/" + id, {
      type: "DELETE"
  }).then(
      () => {
          console.log("deleted id", id);
          location.reload();
      }
  );
});

const searchInput = document.querySelector('#searchInput')
const grabSearch = console.log(searchInput.value)

//this needs a route written for it, I'm to tired. Going to bed
//============================================================================
$('#searchButton').click(function (e) {
  e.preventDefault();
  var search = $('#searchInput').val().trim();
  console.log(search);

  $.ajax("/" + search, {
      type: "GET"
  }).then(
      () => {
          console.log("search completed for " + search);
          location.reload();
      }
  )

});
//=============================================================================