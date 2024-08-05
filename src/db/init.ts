import Employee from './models/Doctor';
async function init(){
    const isDev = true;

  
    await Employee.sync({alter:isDev})
}


const dbInit =() => {
    init();
}

export default dbInit;