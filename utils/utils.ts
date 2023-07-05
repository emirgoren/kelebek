import fs from 'fs'

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function createRandomStudentsFile(studentQuantity: number) {
  const students: [] = [];

  // for(let i = 0; i<studentQuantity; i++) {
  //   const student: Student = {

  //   }
  // }
}

export {
  shuffle,
  createRandomStudentsFile
}