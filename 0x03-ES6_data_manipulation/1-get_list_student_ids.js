const getListStudentIds = (ListStudents) => {
	let listStudentIds = [];
	if (!(ListStudents instanceof Array))
	{
		return listStudentIds;
	}
	listStudentIds = ListStudents.map(student) => student.id);
	return listStudentIds;
};

export default getListStudentIds;
