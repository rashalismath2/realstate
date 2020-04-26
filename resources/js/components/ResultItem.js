import React, { Component } from "react";

class ResultItem extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                images: [
                    "../images/MainBanner.jpg",
                    "../images/MainBanner.jpg",
                    "../images/MainBanner.jpg",
                    "../images/MainBanner.jpg"
                ],
                title: "example title",
                description: "example description",
                price: 2000,
                owner: "example owner",
                city: "colombo",
                contact: "075410412",
                district:"district"
            }
        };
    }

    render() {
        const SubImages = this.state.data.images.slice(1, 4);
        const SubImage = SubImages.map(img => {
            return <img key={img} className="list-item-sub-image" src={img} />;
        });

        return (
            <section>
                <div className="cont">
                    <div className="result-item">
                        <div className="result-item-images">
                            <div className='result-item-head'>
                                <h3>{this.state.data.title}</h3>
                                <p>{this.state.data.owner} </p>
                                <p>{this.state.data.city}, {this.state.data.district}</p>
                            </div>
                            <div className="result-item-image-main">
                                <img src={this.state.data.images[0]} />
                            </div>
                            <div className="result-item-sub-images">
                                {SubImage}
                            </div>
                            <div className="result-item-details">
                                <h3 className="result-item-price">Price: LKR.{this.state.data.price}.</h3>
                                <p className="result-item-description">{this.state.data.description}</p>
                                <p className='result-item-contact'>Contact : {this.state.data.contact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResultItem;
