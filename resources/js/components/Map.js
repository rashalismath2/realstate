import React,{Component} from "react"
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';

  
class MyMap extends Component {

    constructor(){
        super()
        this.selectedDistrict=this.selectedDistrict.bind(this)
        this.state={
            center:{lat: 6.9271, lng: 79.8612},
            mapStyles:{
                width: '100%',
                height: '100%'
            },
            districts:[
                {p:"Ampara",c:{lat: 7.2912, lng:81.6724}},
                {p:"Anuradhapura",c:{lat:8.3114, lng: 80.4037}},
                {p:"Badulla",c:{lat:6.9934, lng:81.0550 }},
                {p:"Batticaloa",c:{lat:7.7310, lng:81.6747 }},
                {p:"Colombo",c:{lat:6.9271, lng:79.8612 }},
                {p:"Galle",c:{lat:6.0535, lng: 80.2210}},
                {p:"Gampaha",c:{lat:7.0840, lng: 80.0098}},
                {p:"Hambantota",c:{lat:6.1429, lng:81.1212 }},
                {p:"Jaffna",c:{lat:9.6615, lng: 80.0255}},
                {p:"Kalutara",c:{lat:6.5854, lng: 79.9607}},
                {p:"Kandy",c:{lat:7.2906, lng:80.6337 }},
                {p:"Kegalle",c:{lat:7.2513, lng:80.3464 }},
                {p:"Kilinochchi",c:{lat:9.3803, lng: 80.3770}},
                {p:"Kurunegala",c:{lat:7.4818, lng:80.3609 }},
                {p:"Mannar",c:{lat:9.0585, lng: 79.8185}},
                {p:"Matale",c:{lat:7.4675, lng: 80.6234}},
                {p:"Matara",c:{lat:5.9549, lng:80.5550 }},
                {p:"Mullaitivu",c:{lat:9.2671, lng:80.8142 }},
                {p:"Nuwara Eliya",c:{lat:6.9497, lng:80.7891 }},
                {p:"Polonnaruwa",c:{lat:7.9403, lng:81.0188 }},
                {p:"Puttalam",c:{lat:8.0408, lng: 79.8394}},
                {p:"Ratnapura",c:{lat:6.7056, lng:80.3847 }},
                {p:"Trincomalee",c:{lat:8.5874, lng:81.2152 }},
                {p:"Vavuniya",c:{lat:8.7542, lng: 80.4982}}
            ]
            
        }
    }

    selectedDistrict(district){
      console.log(district)
    }

    render() {

        const distrcts=this.state.districts.map(place=>{
            return(
                <Marker
                    onClick={()=>this.selectedDistrict(place)}
                    key={place.p}
                    name={place.p}
                    position={place.c}
                />
            )
        })

      return (
        <Map
          google={this.props.google}
          zoom={8}
          style={this.state.mapStyles}
          initialCenter={this.state.center}>

            {distrcts}        

        </Map>
      );
    }
  }



  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC-_J0zHPKYSTOlVpl5wvYPXu8FRCTe_Vs'
  })(MyMap);