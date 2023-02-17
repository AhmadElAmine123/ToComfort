import React, {useRef,useState,useEffect} from 'react';

const OnHoverMenu = () =>{
    const [isHovered,setisHovered] = useState(false);

    
  const ref = useRef(null);

    const handleMouseOver = () =>setisHovered(true);
    const handleMouseOut = () => setisHovered(false);

    useEffect(
        () => {
          const node = ref.current;
          if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
            return () => {
              node.removeEventListener("mouseover", handleMouseOver);
              node.removeEventListener("mouseout", handleMouseOut);
            };
          }
        },
        [ref.current] // Recall only if ref changes
      );

    return(
        <>
        <div>
        <div ref={ref}>

        {isHovered ? "😁" : "☹️"}

        </div>
        </div>
        </>
    )

}
export default OnHoverMenu;