import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import axios from 'axios';
import '../CSS/style.css';

class RoomAppliancesComponent extends Component {
    
    
    handleClick() {
        console.log("Button Clicked",process.env.REACT_APP_NETIO4_OUTPUT);
        axios.get(process.env.REACT_APP_NETIO4_OUTPUT+'pass=hkr&output1=4')
        .then(res => {
            console.log(res);
        })
    }


    render(){
        return (
            <div className="card-env">
                <div className="row">
                    <MDBBtn onClick={this.handleClick} color="primary">Switch</MDBBtn>
                </div>
                
            </div>
        );

    }

}

export default RoomAppliancesComponent;