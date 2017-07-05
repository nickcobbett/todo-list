var date = new Date();
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$('.todo--weekday').text(function() {
  return days[date.getDay()];
});

$('.todo--fulldate').text(function() {
  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
});

$('.todo--button').click(function() {
  $(this).parent().children().toggleClass('item--complete')
})