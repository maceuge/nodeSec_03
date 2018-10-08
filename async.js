let employee = [{
        id: 1,
        nombre: 'Maxi',
    },
    {
        id: 2,
        nombre: 'Eugenio',
    },
    {
        id: 3,
        nombre: 'Fernando',
    }
];

let salary = [{
        id: 1,
        salario: 40000
    },
    {
        id: 2,
        salario: 35000
    }
];

let getEmployee = async(id) => {
    let employeeDb = employee.find(employee => employee.id === id);
    if (!employeeDb) {
        throw new Error(`No se encontro el empleado con el ID: ${id} en nuestra DB`);
    } else {
        return employeeDb;
    }
};

let getSalary = async(employee) => {
    let salaryDb = salary.find(salary => salary.id === employee.id);
    if (!salaryDb) {
        throw new Error(`No se encontro el salario para el usuario ${employee.nombre}`);
    } else {
        return {
            nombre: employee.nombre,
            salario: salaryDb.salario
        };
    }
}

let getSalaryPerEmployee = async(id) => {
    let employee = await getEmployee(id);
    let salary = await getSalary(employee);
    return salary;
};

getSalaryPerEmployee(1).then(resp => {
    console.log(`${resp.nombre} tiene un salario de U$S ${resp.salario} dolares`);
}).catch(err => {
    console.log(err);
});