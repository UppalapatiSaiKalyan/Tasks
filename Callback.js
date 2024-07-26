let Employees = [{
    firstname: "Sai",
    lastname: "Kalyan"
}, {
    firstname: "Arjun",
    lastname: "Reddy"
}, {
    firstname: "Naga",
    lastname: "Raju"
}, {
    firstname: "Sri",
    lastname: "Ram"
}];

let newEmployees = [{
    firstname: "Sai",
    lastname: "Kumar"
}, {
    firstname: "Kalyan",
    lastname: "Ram"
}];

// TimeOut is added to have some delay
const addCharacter = (characters) => {
    setTimeout(() => {
        Employees.push(...characters);
        getListOfSortedStudents(Employees);
    }, 2000);
}

const getListOfSortedStudents = (list) => {
    list.forEach((employee, index) => {
        console.log(`${index + 1}. Firstname: ${employee.firstname}, Lastname: ${employee.lastname}`);
    })
};

addCharacter(newEmployees);
getListOfSortedStudents(Employees);
