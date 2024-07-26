function fetch(callback) {
    setTimeout(() => {
        const Emp = { name: "Kalyan", age: 25, email:"Kalyan@gmail.com" };
        callback(Emp);
    }, 2000);
}

fetch((Emp) => {
    console.log("Data received (Callback):", Emp);
});
