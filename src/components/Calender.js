import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as moment from 'moment';


var hrefstyle = {
    'text-decoration': 'none',
    'color': 'white',
    'padding': '10px'
}

var textstyle = {
    'color': 'white',
    'font-size': '16px'
}
class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: moment(),
        }
    }
    incrementMonth = () => {
        this.setState((state) => ({
            month: state.month.add(1, 'month')
        }));
    }
    decrementMonth = () => {
        this.setState((state) => ({
            month: state.month.subtract(1, 'month')
        }));
    }
    render() {
        return (
            <div className="sidebar-calender">
                <h4>
                    <a href='#' style={hrefstyle} className="glyphicon glyphicon-triangle-left" onClick={this.decrementMonth}></a>
                    <span style={textstyle}>{this.state.month.format('MMM YYYY')}</span>
                    <a href='#' style={hrefstyle} onClick={this.incrementMonth} className={this.state.month >= moment() ? '' : ' glyphicon glyphicon-triangle-right'}>
                    </a>
                </h4>
            </div>
        );
    }
}

export default Calender;
