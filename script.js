let employees = [
    {
        employee: "saima",
        salary: "10000",
        status: "active"
    },
    {
        employee: "zamzama",
        salary: "30000",
        status: "inactive"
    },
    {
        employee: "awid",
        salary: "25000",
        status: "active"
    },
    {
        employee: "yousufzai",
        salary: "40000",
        status: "inactive"
    },
    {
        employee: "zuhal",
        salary: "11900",
        status: "active"
    }
];

for (let i = 0; i < employees.length; i++) {
    let employeesData = employees[i];

    console.log(employeesData.employee);
    console.log(employeesData.salary);
    console.log(employeesData.status);
    console.log("___________");
}