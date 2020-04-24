import React from "react"

const SalesItems=(props)=>{

    const Sales=props.SalesItems.sales.map(sale=>{
                    {/* style="width: 18rem;" */}
        return(

            <div key={sale} className="card" >
                <img className="card-img-top" src={"../images/"+sale+".jpg"} alt="Card image cap" />
                <p>{sale}</p>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    })
    const Rentals=props.SalesItems.rentals.map(rental=>{
                    {/* style="width: 18rem;" */}
        return(

            <div key={rental} className="card" >
                <img className="card-img-top" src={"../images/"+rental+".jpg"} alt="Card image cap" />
                <p>{rental}</p>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    })
    const Lands=props.SalesItems.lands.map(land=>{
                    {/* style="width: 18rem;" */}
        return(

            <div key={land} className="card" >
                <img className="card-img-top" src={"../images/"+land+".jpg"} alt="Card image cap" />
                <p>{land}</p>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="sales-items-container">
                <p className="sales-item-title">For Sales</p>
                <div className="sales-items">
                    {Sales}
                </div>
            </div>
            <div className="sales-items-container">
                <p className="sales-item-title">For Rentals</p>
                <div className="sales-items">
                    {Rentals}
                </div>
            </div>
            <div className="sales-items-container">
                <p className="sales-item-title">Lands</p>
                <div className="sales-items">
                    {Lands}
                </div>
            </div>
            

        </div>
    )

}

export default SalesItems