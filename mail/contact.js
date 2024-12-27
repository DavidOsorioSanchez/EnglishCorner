/*$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $("#sendMessageButton").on("click", function(e) {
                        e.preventDefault();
                        swal({
                            title: "Are you sure?",
                            text: "You will not be able to open  your account!",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Yes, close my account!",
                            closeOnConfirm: false
                        },
                        function() {
                            window.location.href="<?php echo base_url().'users/close_account' ?>"
                        });
                    });

                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
*/
function contact() {
    Swal.fire({
    icon: 'error',
    title: 'Funcion no añadida',
    text: 'la pagina se reiniciara automaticamente!',
})
}
