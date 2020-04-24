import React from "react"
import { Facebook,Apple,Shop,Twitter } from '@material-ui/icons';


const Footer=()=>{


    return(
        <div className="footer-container">
            <div className="footer-section-one">
                <div>
                    <h3>Downlod our app</h3>
                    <ul className="app-store">
                        <li><Apple fontSize="large" /></li>
                        <li><Shop fontSize="large" /></li>
                    </ul>
                </div>
                <div>
                    <h3>Learn more</h3>
                    <ul>
                        <li>How to sell fast</li>
                        <li>Buy now on propertyweb.lk</li>
                        <li>Memberships</li>
                        <li>Promote your ad</li>
                    </ul>
                </div>
                <div>
                    <h3>Help and support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h3>Social</h3>
                    <ul className="social-media">
                        <li><Facebook fontSize="large" /></li>
                        <li><Twitter fontSize="large" /></li>
                    </ul>
                </div>
                <div>
                    <h3>About us</h3>
                    <ul>
                        <li>About us</li>
                        <li>Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>

            <div className="footer-section-two">
                <p>Copyright &copy; WebdevSl</p>
                <p><span className="title-word">Property</span>Web.lk</p>
            </div>

        </div>

    )

}

export default Footer