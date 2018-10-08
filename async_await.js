let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Eugenio');
        }, 3000);
    });
};

let saludar = async() => {
    let name = await getName();
    return `Hola ${ name }, como estas?`;
};

saludar().then(msg => {
    console.log(msg)
});