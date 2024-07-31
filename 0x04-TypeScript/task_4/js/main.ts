import { Subjects } from './subjects';

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10, // Experience in teaching C
};

console.log("C++"); // Log the subject name
cpp.setTeacher(cTeacher); // Set cTeacher as the teacher for Cpp
console.log(cpp.getRequirements()); // Call and log the result of getRequirements
console.log(cpp.getAvailableTeacher()); // Call and log the result of getAvailableTeacher

console.log("Java"); // Log the subject name
java.setTeacher(cTeacher); // Set cTeacher as the teacher for Java
console.log(java.getRequirements()); // Call and log the result of getRequirements
console.log(java.getAvailableTeacher()); // Call and log the result of getAvailableTeacher

console.log("React"); // Log the subject name
react.setTeacher(cTeacher); // Set cTeacher as the teacher for React
console.log(react.getRequirements()); // Call and log the result of getRequirements
console.log(react.getAvailableTeacher()); // Call and log the result of getAvailableTeacher
