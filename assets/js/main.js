$(document).ready(function(){

   $('.numDonate').on('click', function() {
     if($('.numDonate').hasClass('active')){
       $('.numDonate').css("background-color","#fff");
       $(this).css("background-color","#e6e6e6");
       $(this).css("font-size","32px");
       $(this).removeClass('active');
     }
   });

   $('.imgOne').on('mouseover',function(){
     $('.imgOne').children().children().children().css('margin-left', '20px');
   });
   $('.imgOne').on('mouseleave',function(){
    $('.imgOne').children().children().children().css('margin-left', '0px');
   });

   $('.imgTwo').on('mouseover',function(){
     $('.imgTwo').children().children().children().css('margin-left', '20px');
   });
   $('.imgTwo').on('mouseleave',function(){
    $('.imgTwo').children().children().children().css('margin-left', '0px');
   });

   $('.imgOneSecFour').on('mouseover', function(){
     $('.imgOneSecFour').children().children().css('margin-left', '20px');
   });
   $('.imgOneSecFour').on('mouseleave', function(){
     $('.imgOneSecFour').children().children().css('margin-left', '0px');
   });

   $('.imgTwoSecFour').on('mouseover', function(){
     $('.imgTwoSecFour').children().children().css('margin-left', '20px');
   });
   $('.imgTwoSecFour').on('mouseleave', function(){
     $('.imgTwoSecFour').children().children().css('margin-left', '0px');
   });

   $('.imgThreeSecFour').on('mouseover', function(){
     $('.imgThreeSecFour').children().children().css('margin-left', '20px');
   });
   $('.imgThreeSecFour').on('mouseleave', function(){
     $('.imgThreeSecFour').children().children().css('margin-left', '0px');
   });


});
