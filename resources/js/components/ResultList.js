import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";

class ResultsList extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id:1,
                    avatar: "./images/MainBanner.jpg",
                    title: "A property name",
                    price: 200,
                    city: "colombo"
                },
                {
                    id:2,
                    avatar: "./images/MainBanner.jpg",
                    title: "A property name",
                    price: 200,
                    city: "colombo"
                },
                {
                    id:3,
                    avatar: "./images/MainBanner.jpg",
                    title: "A property name",
                    price: 200,
                    city: "colombo"
                }
            ]
        };
    }

    render() {

        const data = this.state.data.map(item => {
            return(
                <ListItem className="result-list" key={item.id}>
                <Card className="result-card">

                    <div className="">
                        <CardMedia
                            className="result-card-image"
                            image={item.avatar}
                            title="Live from space album cover"
                        />
                        <CardContent className="result-card-content">
                            <Typography component="h5" variant="h5">
                                {item.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {item.city}
                            </Typography>
                            <p>LKR.{item.price}.</p>
                        </CardContent>
                        <div className="">{/* */}</div>
                    </div>
                </Card>
            </ListItem>     
            )
        });

        return(
            
            <List className="">
                {data}
            </List>
        );

    }
}

export default ResultsList;
