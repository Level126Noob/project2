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

//=================grabbing file upload path using jquery=======================
(function ($, window, document, undefined) {
    $(function () {
        $('.filepath').each(function () {
            var $input = $(this),
                $label = $input.next('label'),
                labelVal = $label.html();

            

            $input.on('change', function (e) {
                var fileName = '';

                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else if (e.target.value)
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    $label.find('span').html(fileName);
                else
                    $label.html(labelVal);
                    
                console.log(fileName);
                
                $(".filebutton").click(function (event) {
                var filetype = $('.select-filetype').val().trim();
                // Send the POST request.
                $.ajax("/" + fileName + filetype, {
                    type: "POST",
                }).then(
                    function (data) {
                        console.log(data);
                    }
                );
            });
            });

        });
    });
})(jQuery, window, document);
//===============================================================================

//jq ajax post request for inserting file_name into DB==========================
//===============================================================================