const students = require('./students.json');
const {shuffleStudents} = require('./utils/utils');

interface Student {
    name: string;
    class: string;
}

function createClassList(): string[] {
    try{
        const classList: string[] = [];

        classList.push(students[0].class)
        for(let i = 0; i < students.length; i++) {
            for(let j = 0; j < classList.length; j++) {
                if(students[i].class !== classList[j]){
                    let isSame: boolean = false
                    classList.forEach(item => {
                        if(students[i].class == item) {
                            isSame = true;
                        }
                    })
    
                    if(!isSame){
                        classList.push(students[i].class)
                    }
                    
                }else{
                    continue;
                }
            }
        }
    
        return classList;
    }catch(err){
        console.error(err)
    }
}

function splitStudents(classList: string[], students: Student[]) {
    try{
        const divideStudentsByClassCount: number = Math.floor((students.length / classList.length) + 1)
        const splittedStudentsParent = [];
    
        const shuffledStudents = shuffleStudents(students);
    
        for (let i = 0; i < students.length; i += divideStudentsByClassCount) {
            const splittedStudentsChild: Student[] = shuffledStudents.slice(i, i + divideStudentsByClassCount);
    
            splittedStudentsParent.push(splittedStudentsChild)
        }
    
        for(let i =0; i< classList.length; i++) {
            splittedStudentsParent[i].forEach(element => {
                element.joiningClass = classList[i];
            });
        }
    
        return splittedStudentsParent;
    }catch(err){
        console.error(err)
    }
}

console.log(splitStudents(createClassList(), students))