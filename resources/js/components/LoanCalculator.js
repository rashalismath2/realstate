import React, { Component } from 'react'
import Nav from "./Nav"
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


class HousePrice extends Component {

    constructor(props) {
        super(props)
        this.propertyValSlider = this.propertyValSlider.bind(this)
        this.downPaymentSlider = this.downPaymentSlider.bind(this)
        this.loanPaymentSlider = this.loanPaymentSlider.bind(this)
        this.state = {
            defPropVal: "1000000",
            propertyValue: "1000000",
            defPayment: "100000",
            downPayment: "100000",
            loanPayment: "1",
            total: "1000000"
        }
    }

    componentDidMount() {
        this.setState({
            defPayment: parseInt(this.state.propertyValue) * 35 / 100,
            downPayment: parseInt(this.state.propertyValue) * 35 / 100,
        })
    }

    propertyValSlider(e, data) {
        this.setState({
            propertyValue: parseInt(this.state.defPropVal) * data
        })
    }
    downPaymentSlider(e, data) {
        this.setState({
            downPayment: data
        })

    }
    loanPaymentSlider(e, data) {
        this.setState({
            loanPayment: data
        })
    }

    render() {

        var monthlyPlan = Math.round((this.state.propertyValue - this.state.downPayment) / this.state.loanPayment*12)
        var loanAmount = Math.round((this.state.propertyValue - this.state.downPayment))
        return (
            <div>
                <Nav />
                <section id="loan-calculator">
                    <div className="cont">
                        <div>
                            <h2 id="loan-cal-title">Home Loan Calculator</h2>
                        </div>
                        <hr />
                        <div id="calculator-app-cont">
                            <div className="calc-div">
                                <div className="calc-param">
                                    <div className="property-value clearfix">
                                        <p className="calc-labels">Property Value</p>
                                        <TextField
                                            className="calc-input-fields"
                                            label="Rs."
                                            value={this.state.propertyValue}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        defaultValue={1}
                                        onChange={this.propertyValSlider}
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={5}
                                        marks
                                        min={1}
                                        max={1000}
                                    />
                                </div>
                                <div className="calc-param">
                                    <div className="down-payment clearfix">
                                        <p className="calc-labels">Down payment 35%</p>

                                        <TextField
                                            className="calc-input-fields"
                                            label="Rs."
                                            value={this.state.downPayment.toString()}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        defaultValue={30}
                                        onChange={this.downPaymentSlider}
                                        aria-labelledby="discrete-slider"
                                        step={parseInt(this.state.propertyValue) * 5 / 100}
                                        marks
                                        min={parseInt(this.state.propertyValue) * 35 / 100}
                                        max={parseInt(this.state.propertyValue)}
                                    />
                                </div>
                                <div className="calc-param">
                                    <div className="loan-payment clearfix">
                                        <p className="calc-labels">Loan Period</p>
                                        <TextField
                                            className="calc-input-fields"
                                            label="Years"
                                            value={parseInt(this.state.loanPayment)}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        defaultValue={1}
                                        onChange={this.loanPaymentSlider}
                                        aria-labelledby="discrete-slider"
                                        step={1}
                                        marks
                                        min={1}
                                        max={20}
                                    />
                                </div>
                            </div>
                            <div className="display-div">
                                <div className="display">
                                    <h4>Your estimated monthly plan</h4> <span>Rs.{monthlyPlan}</span>
                                    <br />
                                    <h5>Loan amount: <span>Rs. {loanAmount}</span></h5>
                                </div>
                                <hr />
                                <div className="loan-quota-form">
                                    <div id="loan-quota-form">
                                        <p>Fill in the details below to get a Home Loan quote</p>
                                        <form>
                                            <Input
                                                className="loan-input loan-name"
                                                
                                                label="Full Name"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <AccountCircleIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            <div id="loan-quota-contact" className="clearfix">
                                                <Input
                                                    className="loan-input loan-email"
                                                    label="Email"
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <EmailIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                                <Input
                                                    className="loan-input loan-phone"
                                                    label="Phone"
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PhoneIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                            <TextField
                                                className="loan-input loan-message"
                                                label="Message"
                                                multiline
                                                rows={4}
                                                
                                                variant="outlined"
                                            />
                                            <Button variant="contained" color="primary" className="loan-input quote-submit">Get your home loan quote</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default HousePrice