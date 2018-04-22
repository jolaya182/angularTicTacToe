angular.module("ticTacToeApp",[]).
controller("ticTacToeCtrl", ["$scope",function($scope){
  $scope.board= [
    ["_","_","_"],
    ["_","_","_"],
    ["_","_","_"]
  ];
  $scope.gameEnded = false;
  $scope.player = "X";

  $scope.getPosition = function(cord){
    // console.log(cord)
    if($scope.gameEnded == false){
      // console.log("game stared");
      if(isAvailable(cord) == false){ // find available spot
        alert("spot is not available");
        
      }else{
        // console.log("spot is available");
        markSpot(cord, $scope.player);  //mark spot and check for winner
        if(checkWinner($scope.player)){
          alert("the winner is: "+ $scope.player);
          $scope.gameEnded = true;
          return;
        } 
      }

      if(checkTie() ){
          alert("there is a tie");
          $scope.gameEnded = true;
        }
      if($scope.player != "X") $scope.player ="X";
        else $scope.player = "O";  

    }else{
      alert("Game ended player "+ $scope.player + " won!");
    }//end of if
  }//end of function


  function isAvailable(cord){
    return $scope.board[cord.x][cord.y] == "_"? true: false; 
  }
  function markSpot(cord, player){
    $scope.board[cord.x][cord.y] = player
  }
  function checkWinner(player){
    // /check rows
    if( $scope.board[0][0] == player && $scope.board[0][1] == player && $scope.board[0][2] == player  ) return true;
    if( $scope.board[1][0] == player && $scope.board[1][1] == player && $scope.board[1][2] == player  ) return true;
    if( $scope.board[2][0] == player && $scope.board[2][1] == player && $scope.board[2][2] == player  ) return true;

    //check columns
    if( $scope.board[0][0] == player && $scope.board[1][0] == player && $scope.board[2][0] == player  ) return true;   
    if( $scope.board[0][1] == player && $scope.board[1][1] == player && $scope.board[2][1] == player  ) return true;
    if( $scope.board[0][2] == player && $scope.board[1][2] == player && $scope.board[2][2] == player  ) return true;

    // check diagonals
    if( $scope.board[0][0] == player && $scope.board[1][1] == player && $scope.board[2][2] == player  ) return true;
    if( $scope.board[2][0] == player && $scope.board[1][1] == player && $scope.board[0][2] == player  ) return true;

    return false;
  }

  function checkTie(){

    for (let i = 0; i < $scope.board.length; i++) {
      for(let j = 0; j <  $scope.board[i].length; j++ ){
        // // console.log(j)
        if($scope.board[i][j] == "_") return false;
      }
    }
    return  true;
  } 


}])