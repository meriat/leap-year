var leapYear = function(year) {
  if ((year%100 !== 0) && (year%4 === 0)) {
    return true;
  }

  else {
    return false;
  }
}


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result =leapYear(year);
    $("#result").text(result);
  })
})
