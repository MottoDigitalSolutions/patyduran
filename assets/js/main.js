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
     $('.imgOne').children().children().css('margin-left', '4%');
   });
   $('.imgOne').on('mouseleave',function(){
    $('.imgOne').children().children().css('margin-left', '1%');
   });

   $('.imgTwo').on('mouseover',function(){
     $('.imgTwo').children().children().css('margin-left','4%');
   });
   $('.imgTwo').on('mouseleave',function(){
    $('.imgTwo').children().children().css('margin-left', '1%');
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

   $('.buttonIssues').on('mouseover', function(){
     $(this).children().css('padding-left', '20px');
   });
   $('.buttonIssues').on('mouseleave', function(){
     $(this).children().css('padding-left', '0px');
   });


   $('#hrmeet').on('mouseover', function(){
     $('.meet').fadeIn(800);
   });
   $('#hrmeet').on('mouseleave', function(){
     $('.meet').fadeOut(800);
   });

   $('#hrissues').on('mouseover', function(){
     $('.issues').fadeIn('slow');
   });
   $('#hrissues').on('mouseleave', function(){
     $('.issues').fadeOut('slow');
   });

   $('#hrwork').on('mouseover', function(){
     $('.work').fadeIn('slow');
   });
   $('#hrwork').on('mouseleave', function(){
     $('.work').fadeOut('slow');
   });

   $('#hrnews').on('mouseover', function(){
     $('.news').fadeIn('slow');
   });
   $('#hrnews').on('mouseleave', function(){
     $('.news').fadeOut('slow');
   });

   $('#hract').on('mouseover', function(){
     $('.act').fadeIn('slow');
   });
   $('#hract').on('mouseleave', function(){
     $('.act').fadeOut('slow');
   });







});
