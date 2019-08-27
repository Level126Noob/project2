
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

//searchbar input!===================================================/=/=/=/
$('#searchButton').click(function (e) {
    e.preventDefault();
    var file_name = $('#searchInput').val().trim();
    console.log(file_name);

    $.ajax("/api/files/" + file_name, {
        type: "GET"
    }).then(
        (data) => {
            console.log("search completed for " + file_name);
            // location.reload("search")
            //console.log(data);
        }
    )

});
//=============================================================================

//ascending button input!======================================================
$('.submitBtn').click(function (e) { 
    e.preventDefault();
    $.ajax("/ascending", {
        type: "GET"
    }).then(
         (data) => {
            console.log(data)
            location.reload("ascending")
         }
    )  
});
//=============================================================================

//descending button input!======================================================
$('.submitBtn').click(function (e) { 
    e.preventDefault();
    $.ajax("/descending", {
        type: "GET"
    }).then(
         (data) => {
            console.log(data)
            location.reload("descending")
         }
    )  
});
//=============================================================================