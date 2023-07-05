import {Student} from './interfaces'
import {faker} from '@faker-js/faker'
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

function createRandomStudentsFile(studentQuantity: number, classQuantity: number) {
  try{
    if(studentQuantity > 1500 || studentQuantity < 1) {
      throw new Error('studentQuantity must be more than 1 and less than 1500.');
    }

    if(classQuantity > 100 || classQuantity < 1) {
      throw new Error('classQuantity must be more than 1 and less than 100.');
    }

    const students: Student[] = [];

    const randomClassNumbers: number[] = [];
    for(let i = 0; i < classQuantity; i++) {
      const classNumber: number = Math.floor(Math.random() * 100);
      randomClassNumbers.push(classNumber)
    }
  
    for(let j = 0; j < studentQuantity; j++) {
      const randomClassNumberFromArray: number = Math.floor(Math.random() * randomClassNumbers.length);
  
      const newStudent: Student = {
          name: faker.internet.userName(),
          class: `X${randomClassNumberFromArray}`
      }

      students.push(newStudent)
    }
  
    let studentsJSON = JSON.stringify(students);
    fs.writeFileSync(`${__dirname}/../students.json`, studentsJSON);
  }catch(err){
    console.error('something happened', err)
  }
  
}

export {
  shuffle,
  createRandomStudentsFile
}