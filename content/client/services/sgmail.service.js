
/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services */
(function () {
    'use strict'

    angular.module('client.services')
        .factory('sendGridService', SendGridFactory)

    SendGridFactory.$inject = ['$http', '$q']

    function SendGridFactory($http, $q) {
        return {
            sendmail: sendmail
        }

        function sendmail() {
            console.log("sendmail")
            // using SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            
            const msg = {
                to: 'test@example.com',
                from: 'test@example.com',
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
            sgMail.send(msg);
        }
    }
})();
