const employee = {
    name: "Doe",
    streetAddress: "11th street"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        "name": "Sam",
        "streetAddress": "11 Broadway"
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}

    