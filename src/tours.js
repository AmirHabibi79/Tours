import Tour from "./tour"
import "./tours.css"
const Tours=({tours,removeTour})=>{

    return(
        <>
        <div className="header">
            <h2>our tour</h2>
            <div className="underline"></div>
        </div>
        <div className="tours">
            {tours.map(tour=>(
                <Tour key={tour.id} removeTour={removeTour} {...tour} />
            ))}
        </div>
        </>
    )
}

export default Tours