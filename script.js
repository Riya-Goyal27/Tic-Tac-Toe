let turn = 'X';
let cellsClicked = 0;
const cells = document.querySelectorAll('.cell');
const turnText = document.querySelector('.turn');
const winner = document.querySelector('.winner');
const winContainer = document.querySelector('.win-container');
const restart = document.querySelector('.restart');
const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const onclickCell = (cell) => {
    cell.innerHTML = turn;
    if(turn == 'X'){
        cell.classList.add('x-class');
        turn = 'O';
        turnText.innerHTML = 'O';
    }else{
        cell.classList.add('o-class');
        turn = 'X';
        turnText.innerHTML = 'X';
    }
}

const showmodal = () => {
    winContainer.classList.remove('hide');
    winContainer.classList.add('show');
}

const hidemodal = () => {
    winContainer.classList.remove('show');
    winContainer.classList.add('hide');
}

const checkwin = () => {
    winCombinations.some(combination => {
        if(cells[combination[0]].classList.contains('x-class') 
        && cells[combination[1]].classList.contains('x-class') 
        && cells[combination[2]].classList.contains('x-class')){
            winner.innerHTML = 'X WINS..!!!';
            showmodal();
            return true;
        }
        else if(cells[combination[0]].classList.contains('o-class')
        && cells[combination[1]].classList.contains('o-class') 
        && cells[combination[2]].classList.contains('o-class')){
            winner.innerHTML = 'O WINS..!!!';
            showmodal();
            return true;
        }
        else if(cellsClicked==9){
            winner.innerHTML = 'DRAW..!!!';
            showmodal();
        }
    })
}

const reset = () => {
    hidemodal();
    cells.forEach(cell => {
        cell.classList.remove('x-class');
        cell.classList.remove('o-class');
        cell.innerHTML = "";
        turn = 'X';
        turnText.innerHTML = 'X';
        cellsClicked=0;
    })
}
cells.forEach(cell => {
    cell.addEventListener('click',  () => {
        if(!cell.classList.contains('x-class') && !cell.classList.contains('o-class')){
            cellsClicked++;
            //update cell and change turn
            onclickCell(cell);

            //win logic
            if(cellsClicked>=5){
                checkwin();
            }
        }
    })
})

restart.addEventListener('click', () => {
    reset();
})
