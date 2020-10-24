$(function(){
  $("#openModal").click(function(){

        $(this).attr("class"),
        href = $(this).attr("href");

        $(href).fadeIn();
        $(this).addClass("open");
        return false;
  });


  $("#closeModal").click(function(){
    $(this).parents("#modal").fadeOut();
    $("#openModal").removeClass("open");
    return false;
  });
});