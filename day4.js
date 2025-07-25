// let details=
// {
//     name:"js",
//     totalmark:100,
//     subject:{
//         dbms:100,
//         java:99,
//     },
//     sum:function(){
//         let total=this.subject.dbms+this.subject.java;
//         return total;
//     }
// }
// console.log(details.name);
// console.log(details["totalmark"]);
// console.log(details.subject["dbms"]);
// console.log(details.sum());
// let person={
//     job:"SoftwareTester",
//     salary:25000,
// }
// const{job:firstkey,salary:secondkey}=person
// console.log(firstkey+" "+secondkey);
// let arr=new Array(1,2,"three");
// console.log(arr[2]);
// let arr2=["js",true,false];

// const[name,b1,b2]=arr2;
// console.log(name)
//filter:returns a new array containing only the elements that match a condition
// let students=[
//     {name:"Mouni",grade:"C"},
//     {name:"Suresh",grade:"A"},
//     {name:"Sreesha",grade:"A"},
// ]
// let gradestudents=students.filter(students => students.grade==="A")
// console.log(gradestudents);
let name=["Mouni","Sreesha","Suresh"];
name.splice(1,1,"Rathika");
console.log(name);