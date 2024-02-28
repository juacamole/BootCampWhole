type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A+' | 'A' | 'A-' | 'B+' | 'B'  | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F' | undefined ;

type Student = {
    firstname: string;
    lastname: string;
    age: number;
    grades: Grade[];
}

const student: Student = {
    firstname: "Kuan",
    lastname: "Klöthen",
    age: 125,
    grades: [4, 5, 4, 5, 'F', 'F', 'F', 3, undefined, 5],
};

const student2: Student = {
    firstname: "Pico",
    lastname: "Schneemann",
    age: 12,
    grades: ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'A+', 'F', 'F'],
};

function printStudent(student: Student): void {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ")");
    console.log("=".repeat(30));
    const grades = student.grades.map(grade => grade === undefined ? '*' : grade);
    console.log("Noten: " + grades);
}

printStudent(student);
printStudent(student2);
