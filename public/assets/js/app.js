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

//searchbar input!===================================================/=/=/=/
$('#searchButton').click(function (e) {
    e.preventDefault();
    var file_name = $('#searchInput').val().trim();
    console.log(file_name);

    $.ajax("/search/" + file_name, {
        type: "GET"
    }).then(
        (data) => {
            console.log("search completed for " + file_name);
            location.replace("/search/" + file_name)
            // console.log(data);
        }
    )

});
//=============================================================================

//ascending button input!======================================================
$('#radio-five').click(function (e) {
    e.preventDefault();
    $.ajax("/descending", {
        type: "GET"
    }).then(
        (data) => {
            // console.log(data)
            location.replace("/descending")
        }
    )
});
//=============================================================================

//=================grabbing file upload path using jquery=======================
(function ($, window, document, undefined) {
    $(function () {
        $('.filePath').each(function () {
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
                
                $(".fileButton").click(function (event) {
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

//post request for userpass on login page=========================================
$("#register").click(function (event) {
    event.preventDefault();
    var username = $("#newUsername").val().trim();
    var password = $("#newPassword").val().trim();
    var userpass = username + password;
    // Send the POST request.
    $.ajax("/login/" + userpass, {
        type: "POST",
    }).then(
        function (data) {
            console.log(data);
        }
    );
});
//================================================================================

//======================================checking if userpass if valid get request==
$("#login").click(function (event) {
    event.preventDefault();
    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    var userpass = username + password;
    $.ajax("/login/" + userpass, {
        type: "GET",
    }).then(
        function(data) {
            // console.log(data);

            location.replace("/home")
        }
    )
})
//=================================================================================