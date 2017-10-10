$( "#enter-id" ).slideUp();


// Tab Flight

var city = $('#cityDestination').val()
var date = $('#datepicker').val()
// console.log(date.length)
$('#cityDestination').on('change', function(){
  if($('#cityDestination')){
    $('#continue').removeAttr('disabled')
  }
})

// Tab Form Customer

var fn = $('#fn')
var ln = $('#ln')
var email = $('#email')
var phone = $('#phone')
// console.log(fn)
fn.on('input', function(){
  ln.on('input', function(){
    email.on('input', function(){
      phone.on('input', function(){
        if(fn.val() && ln.val() && email.val() && phone.val()){
          $('#enter-submit').removeAttr('disabled')
        }
      })
    })
  })
})


// $( "#submit-id-button" ).click(function() {
//   $( this ).hide();
//   /*$( "#submit-id" ).slideUp( "fast", function() {
//     // Animation complete.
//   });*/
//   $( "#enter-id" ).slideDown( "fast", function() {
//     // Animation complete.
//   });
//   $("#enter-id-button").removeAttr('disabled');
//
// });




$('.next').click(function(){
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    // var tes = "[href=#" + nextId + "]"
    $("[href=#"+nextId+"]").tab('show');
    return false;
  })

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 4) * 100;

    $('.progress-bar').css({width: percent + '%'});
    //$('.progress-bar').text("Step " + step + " of 5");
    e.relatedTarget // previous tab
  })

  $('.first').click(function(){
    $('#myWizard a:first').tab('show')
  })


  $('#last').click(function(){
    $('#lastli').addClass('success');
  });
