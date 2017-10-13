// function email (flight, date, name, email, phone, nobook){
//   var api_key = 'key-9d7638c88b615a9d10d3c10e3715937f';
//   var domain = 'sandbox621ee41c059e4ecca89fb09854c6ed16.mailgun.org';
//   var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
//   var data = {
//     from: 'Naik Gratis Turun Bayar postmaster@sandbox621ee41c059e4ecca89fb09854c6ed16.mailgun.org',
//     to: `${email}`,
//     subject: 'Hello',
//     text: `
//       Flight: ${flight},
//       Date: ${date},
//       Name: ${name},
//       Email: ${email},
//       Phone: ${phone},
//       No. Booking: ${nobook}
//
//       Thank you! Don't forget to pay after flight!
//     `
//   };
//
//   mailgun.messages().send(data, function (error, body) {
//     console.log(body);
//   });
// }
// module.exports = email

var mailer = require( 'mailer' );
function email (flight, date, name, email, phone, nobook){
  mailer.send({
      host : "srv13.niagahoster.com",
      port : "465",
      ssl: true,
      to : `${email}`,
      from : "admin@prahastha.com",
      subject : "Naik Gratis Turun Bayar",
      body: `
            Flight: ${flight},
            Date: ${date},
            Name: ${name},
            Email: ${email},
            Phone: ${phone},
            No. Booking: ${nobook}

            Thank you! Don't forget to pay after flight!
          `,
      authentication : "Data Passenger",
      username : "admin@prahastha.com",
      password : "Pancasila85"
      },
      function( err, result ) {
          if( err )
              console.log(err);
  });
}
module.exports = email
