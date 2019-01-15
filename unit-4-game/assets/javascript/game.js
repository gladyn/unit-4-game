// start game 
var startGame = function () {     
    $("#crystalPic").empty();
    
    // Set counter to zero
    $('#finalTotal').text(counter);
    // numbers between 19-120 
    targetNumber = Math.floor(Math.random() * 101) + 19;    
    
    $("#target-number").text(targetNumber);


    //  random number between 1-12
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * 11) + 1;
        console.log(randomNumber);
    
        
    // Define variable to store random number in
      

    
   
    // When crystal image is clicked, increase total score by crystal value
    $(document).on("click", ".crystalPic", function() {
       
      
      
        
        //  if statement to increase wins by one 
        // if statement to increase losses by one 
  //game is suppose to reset 