interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
	}

function createStudent(student: Student) {
	return{
		firstName: Student.firstName,
		lastName: Student.lastName,
		age: Student.age,
		location: Student.location,
		}
}

const student1 = createStudent({firstname: "John", lastname: "Doe", age: 20, location: "New York"})
const student2 = createStudent({firstname: "Jane", lastname: "Smith", age: 22, location: "Los Angeles"})

const studentsList = [ student1, student2 ];

const table = document.createElement("table");
const trow = document.createElement("tr");
const trow1 = document.createElement("tr");
const tdata = document.createElement("td");
const tdata1 = document.createElement("td");
const tdata2 = document.createElement("td");
const tdata3 = document.createElement("td");

tdata.innerHTML = ;
tdata1.innerHTML = ;

trow.appendChild(tdata);
trow.appendChild(tdata1);

table.appendChild(trow);

tdata2.innerHTML = ;
tdata3.innerHTML = ;

trow1.appendChild(tdata2);
trow1.appendChild(tdata3);

table.appendChild(trow1);
