import React,{useState,useEffect} from 'react';
import useApi from '../components/Hooks/useApi';




const AboutUs = () =>{

    
    var response = useApi('http://localhost:5000/user');
    
  var general_category = useApi('http://localhost:5000/general_category');
    return(
        <div>
            <button type="submit" >sdf</button>
            {(general_category.success === false) ? (
                <>
                </>
            ):(
                <p>{general_category.data[1].name}</p>
                
            )
            }
            <p>
                
            </p>

        </div>
    )

}
export default AboutUs;