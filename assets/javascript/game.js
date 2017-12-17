$(document).ready(function(){
var wins = 0;
var losses = 0;
//var crystalvalue;
var targetValue = Math.floor(Math.random()* 102) + 19;
var gem1 = Math.floor(Math.random()*12) + 1;
var gem2 = Math.floor(Math.random()*12) + 1;
var gem3 = Math.floor(Math.random()*12) + 1;
var gem4 = Math.floor(Math.random()*12) + 1;
var playerScore = 0;

$("#target").text(targetValue);

$("#winCount").text(wins);
$("#lossCount").text(losses);
      //get random target score that player tries to reach
      // function targetScore(min, max) {
      // targetValue = Math.floor(Math.random() * (max - min +    1) + min;
      // $("#target").html(targetValue);
      // }
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
        alert("You won! Huzzah!");
        wins++;
        $("#winCount").text(wins);
        restart();
      }

      function loser(){
        alert("You lost!");
        losses++;
        $("#lossCount").text(losses);
        restart();
      }

      //set onClick events to accrue user score
      $("#button1").on("click", function(){
        playerScore = playerScore + gem1;
        $("#score").text(playerScore);
        //check to see if player score equals targetscore
        if (playerScore === targetValue){
          winner();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetValue){
          loser();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      })
      
      $("#button2").on("click", function(){
        playerScore = playerScore + gem2;
        $("#score").text(playerScore);
        //check to see if player score equals targetscore
        if (playerScore === targetValue){
          winner();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetValue){
          loser();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      })

      $("#button3").on("click", function(){
        playerScore = playerScore + gem3;
        $("#score").text(playerScore);
        //check to see if player score equals targetscore
        if (playerScore === targetValue){
          winner();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetValue){
          loser();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      })

      $("#button4").on("click", function(){
        playerScore = playerScore + gem4;
        $("#score").text(playerScore);
        //check to see if player score equals targetscore
        if (playerScore === targetValue){
       winner();
       //   ++wins;
       //   $("winCount").text(wins);
        } else if (playerScore > targetValue){
        loser();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      })
      // winsLosses: function(){
      //   if (playerScore === targetValue){
      //     ++wins;
      //     $("#winCount").html(wins);
      //   } else if (playerScore > targetValue){
      //     ++losses;
      //     $("#lossCount").html(losses);
      //   }
      // },
  });