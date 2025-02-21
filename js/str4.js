function Student(nm,gd,m,sci,eng){  // Constructure function for the object students 
    this.name=nm,
    this.grade=gd,
    this.subject={   // Nested object for storing the information of the subjects
        math:m,
        science:sci,
        english:eng
    }
}

var s=[       //Creating the array of students 
    s1=new Student("Raheem",9.5,80,90,89),
    s2=new Student("Naseer",9,95,84,98),
    s3=new Student("Safi",8.7,99,90,89)
]
console.log(s)

console.log(s[1].subject.science)  // Displaying the Science marks of the second student from the array

s[0].subject.math=99  // Updating the marks of  the subject math of the first student from the array
console.log(s)

s[0].subject.python=97   // Adding the new property within the property of the first student from the aray
console.log(s)
