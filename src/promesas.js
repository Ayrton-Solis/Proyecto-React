let verdadero = true;




const promesa = (tiempo, tarea) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(verdadero){
                resolve(tarea);
            }else{
                reject('error');
        }}, tiempo)})};

export default promesa