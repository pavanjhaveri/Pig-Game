/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var global_score, current_score, active_player, dice, game_playing;
var diceDOM = document.querySelector('.dice');
init();
function init(){
global_score = [0,0];
current_score = 0;
active_player = 0;
game_playing = true;

document.getElementById('name-0' ).innerHTML = 'PLAYER1';
    document.getElementById('name-1').innerHTML = 'PLAYER2';
document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}
//document.querySelector('#current-' + active_player).textContent = dice;


//anonymous function, call back is defining first and then sending

    document.querySelector('.btn-roll').addEventListener('click', function(){
        if(game_playing === true){
    dice = Math.floor((Math.random() * 6)) + 1;
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +'.png';
    if(dice !== 1){
        current_score = dice + current_score;
        document.querySelector('#current-' + active_player).textContent = current_score;
        
    }else{
        toggle_player();
    }
        }
});
document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(game_playing === true){
    global_score[active_player] = global_score[active_player] + current_score;
    document.querySelector('#score-' + active_player).textContent = global_score[active_player];
    if(global_score[active_player] >= 20){
    //document.querySelector('.btn-roll').style.display = 'none';
    //document.querySelector('.btn-hold').style.display = 'none';
    document.getElementById('name-' + active_player).innerHTML = 'WINNER!!'; 
    game_playing = false;
    document.querySelector('.player-' + active_player + '-panel').classList.add('winner');
    document.querySelector('.player-' + active_player + '-panel').classList.remove('active');
    }else{
    toggle_player();
    }
    }
});



function toggle_player(){
        diceDOM.style.display = 'none';
        current_score = 0;
        document.querySelector('#current-' + active_player).textContent = 0;
        document.querySelector('.player-' + active_player + '-panel').classList.remove('active');
        active_player === 0 ? active_player = 1 : active_player = 0;
        document.querySelector('.player-' + active_player + '-panel').classList.add('active');
}




