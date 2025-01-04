export const saveLocalStorage = (key:string,val:string,)=>{
    localStorage.setItem(key,val);
}

export const getLocalStorage =(key:string)=>{
   return localStorage.getItem(key)
}