export async function login({name, password}){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(name==="himanshu" && password==="password"){
                resolve()
            }
            else{
                reject()
            }
        },1000)
    })
}