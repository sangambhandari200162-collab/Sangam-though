 let boxes=document.querySelectorAll('.cell');
 let resetbtn=document.querySelector('.reset');
 let msgcontainer=document.querySelector('.msg-container');
 let message=document.getElementById('message');
 let newgamebtn=document.getElementById('new-game');
 let currentplayer='X';
 let gameover=false;
 const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
 ];
 boxes.forEach((box)=>{
    box.addEventListener('click',() => {
        if(currentplayer=== "X"){
            box.innerText=currentplayer;
            currentplayer="O";
        }
    else if(currentplayer ==="O" ){
            box.innerText=currentplayer;
            currentplayer="X";
        }
         box.disabled=true;
         checkWinner();
    });
});
const showWinner = (winner) => {
    msgcontainer.classList.remove('hide');
    message.innerText = `Player ${winner} has won!`;
    boxes.forEach((box) => box.disabled = true);
    gameover = true;

}
const checkWinner = () => {
  for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
               console.log("winner,", pos1Val);
               showWinner(pos1Val);
            }
            else{
                let allBoxesFilled = true;
                boxes.forEach((box) => {
                    if(box.innerText === ""){
                        allBoxesFilled = false;
                    }});
                if(allBoxesFilled && !gameover){
                    msgcontainer.classList.remove('hide');
                    message.innerText = "It's a draw!";
                    gameover = true;
                }
            
        }
    }
}
};


resetbtn.addEventListener('click',() => {
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    });
    currentplayer="X";
        newgamebtn.addEventListener('click', () => {
            msgcontainer.classList.add('hide');
            boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    });
    currentplayer="X";
    gameover=false;
        })
    });
