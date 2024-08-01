import Employee from './models/Demo';

async function init(){
    const isDev = true;

  
    await Employee.sync({alter:isDev})
    
}
const dbInit =() => {
    init();
}

export default dbInit;