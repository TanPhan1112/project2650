import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';

// Example starter JavaScript for disabling form submissions if there are invalid fields
// this is another comment
function signup() {
    'use strict'

    window.addEventListener('load', function () {

        const client = feathers();

        const restClient = rest();

        client.configure(restClient.fetch(window.fetch));
        // Connect to the `signups` service
        const signups = client.service('signups');

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    signups.create({
                        firstName: $('#firstName').val(),
                        lastName: $('#lastName').val(),
                        email: $('#emailSignup').val(),
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
};

export default signup;