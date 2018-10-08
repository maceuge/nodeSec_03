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

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeeDb = employee.find(employee => employee.id === id);

        if (!employeeDb) {
            reject(`No se encontro el empleado con el ID: ${id} en nuestra DB`);
        } else {
            resolve(employeeDb);
        }
    });
};

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {
        let salaryDb = salary.find(salary => salary.id === employee.id);

        if (!salaryDb) {
            reject(`No se encontro el salario para el usuario ${employee.nombre}`);
        } else {
            resolve({
                nombre: employee.nombre,
                salario: salaryDb.salario
            });
        }
    });
}

console.log('Inicio de Callbacks_2');

getEmployee(3).then(employee => {
        return getSalary(employee);
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));