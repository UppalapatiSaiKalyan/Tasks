async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Raju", age: 24, email: "Raju@gmail.com" };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received (async/await):", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
