class student{
constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.school = "ahasania mission school"
}
}
const student1 = new student(12, "raju");
const student2 = new student(18, "ria");
console.log(student1.name, student2.name);