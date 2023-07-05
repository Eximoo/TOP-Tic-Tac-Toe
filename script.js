// let gameBoard = new Array(10).fill('0');
// gameBoard[5] = 10;
// console.log(gameBoard);

const Player = (name, marker) => {
  return { name, marker };
};
const GameBoard = (() => {
  const board = new Array(10).fill(null);

  //temp
  const showBoard = () => {
    console.log(board[0], board[1], board[2]);
    console.log(board[3], board[4], board[5]);
    console.log(board[6], board[7], board[8]);
  };

  const getBoard = () => {
    return board;
  };
  return { showBoard, getBoard };
})();
