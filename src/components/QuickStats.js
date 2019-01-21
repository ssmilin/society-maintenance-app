import React, { Component } from 'react';
import '../css/sidebar.css';
import { Grid, Row, Col } from "react-bootstrap";
import logo from "../img/drainage-icon-357x357.png";

var divStyle = {
    'font-size': '48px',
    'color' :'Red'
};

var iconStyle = {
    'font-size': '20px',
    'float': 'right'
};


class QuickStats extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        divStyle = {
            'font-size': '48px',
            'color' : this.props.color
        };
        let isLoggedIn = (this.props.statsText === 'Drainage');
        return (
            <div className='quickstats'>
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={2}>
                            <div className='text-center'>
                               {/*<i class={this.props.bigIcon} style={divStyle}></i> */}
                                {isLoggedIn ? (
                                    <img src={logo} alt="logo_image" height="50" width="70" />
                                ) : (
                                        <i class={this.props.bigIcon} style={divStyle}></i> 
                                    )}
                            </div>
                        </Col>
                        <Col lg={9} sm={10}>
                            <div className='numbers'>
                                <p>{this.props.statsText}</p>
                                {this.props.statsValue}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <hr/>
                      {/*  <Col lg={9} sm={6}>
                        <div className='statustext-center'> 
                            <h7>{this.props.statsIconText}</h7>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}> 
                          <i class= {this.props.statsIcon} style={iconStyle}> </i>
                        </Col>*/}
                      
                            <div className='statustext-center'> 
                            <i class= {this.props.statsIcon} style={iconStyle}> </i>
                        </div>
                        <div className='statusicon-center'> 
                            <h7>{this.props.statsIconText}</h7>
                            </div>
                        
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default QuickStats;
