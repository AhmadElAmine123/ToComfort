import {useState, useEffect, useMemo, useRef} from 'react';
function useIsLoggedIn(){
    let [isLoggedIn,setIsLoggedIn] = useState(false)
    
    useEffect(()=>{
        if(sessionStorage.getItem("user")=='null'|| sessionStorage.getItem("user")=='undefined'){
            setIsLoggedIn(false);
        }else{
            setIsLoggedIn(true)
        }

    })
    return isLoggedIn;

}export default useIsLoggedIn;