interface Teacher {
	firstName: string,
	lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	contract?: boolean,
	[key: string]: any
}

interface Directors extends Teacher {
	numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName,
		this.lastName = lastName
	}

	workOnHomework() {
		return "Currently working"
	}

	displayName() {
		return this.firstName;
	}
}
