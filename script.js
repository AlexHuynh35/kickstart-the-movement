$(".CreateButton").click(function() {
  var title = $(".title").val();
  var date = $(".date").val();
  var description = $(".description").val();
  $(".title4").text(title);
  $(".date4").text(date);
  $(".description4").text(description);
});
