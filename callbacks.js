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


let getEmployee = (id, callback) => {
    let employeeDb = employee.find(employee => employee.id === id);
    if (!employeeDb) {
        callback(`No se encontro el empleado con el ID: ${id} en nuestra DB`);
    } else {
        callback(null, employeeDb);
    }
};

let getSalary = (employee, callback) => {
    let salaryDb = salary.find(salary => salary.id === employee.id);

    if (!salaryDb) {
        callback(`No se encontro el salario para el usuario ${employee.nombre}`);
    } else {
        callback(null, {
            nombre: employee.nombre,
            salario: salaryDb.salario
        });
    }

}

console.log('Inicio de DB');

getEmployee(3, (err, employee) => {
    if (err) {
        console.log(err);
    }

    getSalary(employee, (err, salary) => {
        if (err) {
            console.log(err);
        }
        console.log(salary);
    });
});