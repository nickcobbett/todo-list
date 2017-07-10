var createListItem = function() {
  var text = $(this).parent().children().first().val();
  var item = $('.todo--item').clone(true).first();
  item.css('visibility', 'visible');
  item.css('display', 'inherit');
  item.find('.todo--text').text(text);
  $('.todo--items').append(item);
};


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
  $(this).parent().children().toggleClass('item--complete');
});

$('.todo--delete').click(function() {
  $(this).parent().remove();
  // $('.todo--body').remove();
});

$('.todo--create').click(createListItem);







