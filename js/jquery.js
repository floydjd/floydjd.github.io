$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(document).on('click', 'nav a', function(e){
  window.scrollTo(0, 0);
  $('.nav li a').attr('class', '');
  var $this = $(this);
  if (!$this.hasClass('active') && !$this.hasClass('navbar-brand')) {
    $this.addClass('active');
  }
  e.preventDefault();
});


$(document).on('click', '#cbcrook', function(e){
  $('#myModal').modal('show');
});
