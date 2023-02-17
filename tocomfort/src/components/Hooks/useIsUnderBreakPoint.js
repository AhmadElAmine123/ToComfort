import React , {useState,useEffect} from 'react';

//checks the current size of a website and returns True is the width is less than breakpoint and false otherwise
function useIsUnderBreakPoint(){
    const [useIsUnder, setIsUnder ]= useState(false);
    const breakPoint = 770;
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<770){
                setIsUnder(true);
            }else{
                setIsUnder(false);
            }
        };
            window.addEventListener("resize",handleResize);
        return() =>{
            window.removeEventListener("resize",handleResize);
        };
    },[]);
    return useIsUnder;
}
export default useIsUnderBreakPoint;
