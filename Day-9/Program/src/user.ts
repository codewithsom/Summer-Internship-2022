enum Gender {
	Male = "Male",
	Female = "Female"
}

export default interface User {
	name: string,
	age: number,
	profession: string,
	email: string,
	gender: Gender
}