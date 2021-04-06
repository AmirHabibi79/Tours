import { useState } from "react";
import "./tour.css"
const Tour=({id,name,price,info,image,removeTour})=>{

    const [readMore, setReadMore] = useState(false);

    return(
        <div className="tour">
            <img src={image} alt={name}></img>
                <footer>
                <div className="np">
                    <h3>{name}</h3>
                    <span>{"$ "+price}</span>
                </div>
                <div className="info">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button  onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : '  read more'}
                    </button>
                </div>
                <div className="btn">
                <button onClick={()=>removeTour(id)}>not interested</button>
                </div>
                </footer>
        </div>
    )
}

export default Tour