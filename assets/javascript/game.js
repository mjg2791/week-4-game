$(document).ready(function(){
  var wins = 0;
  var losses = 0;
  var targetValue = Math.floor(Math.random()* 102) + 19;
  var gem1 = Math.floor(Math.random()*12) + 1;
  var gem2 = Math.floor(Math.random()*12) + 1;
  var gem3 = Math.floor(Math.random()*12) + 1;
  var gem4 = Math.floor(Math.random()*12) + 1;
  var playerScore = 0;

$("#target").text(targetValue);

$("#winCount").text(wins);
$("#lossCount").text(losses);

function restart(){
  targetValue = Math.floor(Math.random()* 102) + 19;
  
  $("#target").text(targetValue);
        
  gem1 = Math.floor(Math.random()*12) + 1;
  gem2 = Math.floor(Math.random()*12) + 1;
  gem3 = Math.floor(Math.random()*12) + 1;
  gem4 = Math.floor(Math.random()*12) + 1;
  
  playerScore = 0;
  $("#score").text(playerScore);
  }

     function winner(){
        alert("Wooo! You win!");
        wins++;
        $("#winCount").text(wins);
        restart();
      }

      function loser(){
        alert("You lose!");
        losses++;
        $("#lossCount").text(losses);
        restart();
      }

      $("#button1").on("click", function(){
        playerScore = playerScore + gem1;
        $("#score").text(playerScore);

        if (playerScore === targetValue){
          winner();

        } else if (playerScore > targetValue){
          loser();

        }
      })
      
      $("#button2").on("click", function(){
        playerScore = playerScore + gem2;
        $("#score").text(playerScore);

        if (playerScore === targetValue){
          winner();

        } else if (playerScore > targetValue){
          loser();
        }
      })

      $("#button3").on("click", function(){
        playerScore = playerScore + gem3;
        $("#score").text(playerScore);
    
        if (playerScore === targetValue){
          winner();
    
        } else if (playerScore > targetValue){
          loser();
         
        }
      })

      $("#button4").on("click", function(){
        playerScore = playerScore + gem4;
        $("#score").text(playerScore);
        
        if (playerScore === targetValue){
       winner();
      
        } else if (playerScore > targetValue){
        loser();
        
        }
      })

  });