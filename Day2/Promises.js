function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Arjun", age: 27 ,email:"Arjun@gmail.com" };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data received (Promise):", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
