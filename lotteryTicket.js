/*
DESCRIPTION:
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

//My nto great solution

function bingo(ticket, win){
    let wins = 0;
    for(let i = 0; i < ticket.length; i++){
      let code = ticket[i][0];
      let miniWin = ticket[i][1];
      let length = ticket[i][0].length;
      for(let i = 0; i < length; i++){
        if(code.charCodeAt(i) == miniWin){
          wins += 1;
        }
      }
    }
    if(wins >= win){
      return 'Winner!';
    }
    else{
      return 'Loser!';
    }
  }

//Other solution

function bingo(ticket, win){
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
    {
      return "Winner!";
    }
    return "Loser!";
  }

//Other solution

function bingo(ticket, win){
    var count = 0;
    
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    
    return (count >= win) ? "Winner!" : "Loser!";
  }

  