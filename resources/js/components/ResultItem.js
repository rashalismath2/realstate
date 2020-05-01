import React, { Component } from "react";
import NavBar from "./Nav";

class ResultItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        axios
            .get("/api/ad/" + this.props.match.params.id)
            .then(res => {
                console.log(res);
                if(res.data){
                    this.setState({
                        data: res.data
                    });
                }
                else{
                    this.props.match.goBack()
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        let SaleItem;
        if (this.state.data!=null) {
            const SubImage = this.state.data.sales_images.map(img => {
                return (
                    <img
                        key={img.id}
                        className="list-item-sub-image"
                        src={"/storage/adcovers/" + img.image_url}
                    />
                );
            });
            SaleItem = (
                <div className="result-item">
                    <div className="result-item-images">
                        <div className="result-item-head">
                            <h3>{this.state.data.title}</h3>
                            <p className="result-item-user-name">{this.state.data.user.first_name} </p>
                            <p>
                                {this.state.data.city.name},{" "}
                                {this.state.data.district}
                            </p>
                        </div>
                        <div className="result-item-image-main">
                            <img
                                src={
                                    "/storage/adcovers/" +
                                    this.state.data.sales_images[0].image_url
                                }
                            />
                        </div>
                        <div className="result-item-sub-images">{SubImage}</div>
                        <div className="result-item-details">
                            <h3 className="result-item-price">
                                Price: LKR.{this.state.data.price}.
                            </h3>
                            <p className="result-item-description">
                                {this.state.data.description}
                            </p>
                            <p className="result-item-contact">
                                Contact : {this.state.data.user.contact_no}
                            </p>
                        </div>
                    </div>
                </div>
            );
        } else {
            SaleItem = <div></div>;
        }

        return (
            <div>
                <NavBar />
                <section>
                    <div className="cont">{SaleItem}</div>
                </section>
            </div>
        );
    }
}

export default ResultItem;
