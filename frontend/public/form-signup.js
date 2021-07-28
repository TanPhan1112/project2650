// Example starter JavaScript for disabling form submissions if there are invalid fields
// this is another comment
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Set up FeathersJS app
        var app = feathers();

        // Set up REST client
        var restClient = feathers.rest();

        // Configure an AJAX library with that client
        app.configure(restClient.fetch(window.fetch));

        // Connect to the `signups` service
        const signups = app.service('signups');

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    signups.create({
                        firstName: $('#firstName').val(),
                        lastName: $('#lastName').val(),
                        email: $('#Email').val(),
                        password: $('#passWord').val(),
                    })
                    form.classList.remove('was-validated');
                    form.reset();
                } else {
                    form.classList.add('was-validated');
                }
            }, false);
        });
    }, false);
}());
