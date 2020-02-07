$(".CreateButton").click(function(){
  var title = $(".title").val();
  localStorage.setItem("title", $(".title").val());
  
  
  var description = $(".description").val();
  localStorage.setItem("description", $(".description").val());
  
  
  var date = $(".date").val();
  localStorage.setItem("date", $(".date").val());
  
  
  var image = $(".image").val();
  localStorage.setItem("image", $(".image").val());
  
  console.log(localStorage.getItem("title"));
  console.log(title);
  console.log(description);
  console.log(date);
  window.location.href ="/Popular.html"
  
  var title = localStorage.getItem("title");
  console.log(title);
  $(".titleEvent4").text(title);
  $(".descriptionEvent4").text(description);
  $(".dateEvent4").text(date);
});
