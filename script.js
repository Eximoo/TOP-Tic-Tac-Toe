// let gameBoard = new Array(10).fill('0');
// gameBoard[5] = 10;
// console.log(gameBoard);

const Player = (name, marker) => {
  return { name, marker };
};
const GameBoard = (() => {
  const board = new Array(9).fill(null);

  //temp
  const showBoard = () => {
    console.log(board[0], board[1], board[2]);
    console.log(board[3], board[4], board[5]);
    console.log(board[6], board[7], board[8]);
  };

  const getBoard = () => {
    return board;
  };
  const setTile = (id, value) => {
    if (id < 0 || id > 8) {
      throw new Error('Out of bound ID needs to be in range 0-8');
    }
    board[id] = value;
  };
  const updateDisplay = () => {
    const el = document.querySelector('.board').children;
    board.forEach((element, index) => (el.item(index).innerHTML = element));
  };
  return { showBoard, getBoard, setTile, updateDisplay };
})();
