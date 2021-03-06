export const urlbase = "https://edtics.herokuapp.com/api/";
export const urllogin = urlbase + "auth/login";


export const limpiar_localStorage = function(){
    localStorage.clear();
}

export const verificaLogin = function(){
    try {
        const authUser = JSON.parse(atob(localStorage.getItem("authUser")))
        
        if(authUser && authUser.access_token){
          return true;
        }else{
          return false;
        }
  
    } catch (error) {
      localStorage.clear();
      return false;
    }
}

export const getHeader = function(){
  const auth = JSON.parse(atob(localStorage.getItem('authUser')))

  const headers = {
      'Accept': 'application/json',
      'Authorization': 'bearer '+auth.access_token
  }
  return headers;
}
