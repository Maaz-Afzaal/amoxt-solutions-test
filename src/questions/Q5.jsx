import { useEffect, useState } from "react";

export default function Q5(){

    const [height,setHeight]=useState(150);


    window.addEventListener("scroll", function(el) {
        const scrollY = window.scrollY + window.innerHeight + 2;
        const bodyScroll = document.body.offsetHeight;
    
        if(scrollY >= bodyScroll){
          setHeight(height+100);
        }
      })

    return (
        <>
            <div style={{height:`${height}vh`}} >
                <h1>Infinite Scrolling</h1>
            </div>
        </>
    )
}