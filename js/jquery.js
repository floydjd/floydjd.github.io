
// Collapse the hamburger menu on click (since there is no page reload)
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

// Set 'active' class for the nav item corresponding to the current page
$(document).on('click', 'nav a', function(e){
  window.scrollTo(0, 0);
  $('.nav li a').attr('class', '');
  var $this = $(this);
  if (!$this.hasClass('active') && !$this.hasClass('navbar-brand')) {
    $this.addClass('active');
  }
  e.preventDefault();
});

// Show the modal when cbcrook button is clicked
$(document).on('click', '#cbcrook', function(e){
  $('#myModal').modal('show');
});
