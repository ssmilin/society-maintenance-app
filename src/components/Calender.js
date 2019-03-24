import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from "react-redux";
import updateExpense from '../actions/action';
var hrefstyle = {
    'text-decoration': 'none',
    'color': 'white',
    'padding': '10px'
}

var textstyle = {
    'color': 'white',
    'font-size': '16px'
}

var expenses = {
    'Mar 2019': {
        drainage: "7000",
        water: "10000",
        security: "20000",
        electricity: "50000"
    },
    'Feb 2019': {
        drainage: "9000",
        water: "12010",
        security: "10009",
        electricity: "57000"
    },
    'Jan 2019': {
        drainage: "8000",
        water: "13010",
        security: "30009",
        electricity: "87000"
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateExpense: expenseList => dispatch(updateExpense(expenseList))
    };
}
class CalenderConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: moment(),
        }
    }
    incrementMonth = (event) => {
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
        this.props.updateExpense(expenses[this.state.month.format('MMM YYYY')]);
    
        return (
            <div className="sidebar-calender">
                <h4>
                    <a href='#' style={hrefstyle} className="glyphicon glyphicon-triangle-left" onClick={this.decrementMonth}></a>
                    <span style={textstyle}>{this.state.month.format('MMM YYYY')}</span>
                    <a href='#' style={hrefstyle} onClick={this.incrementMonth} className={this.state.month > moment() ? '' : ' glyphicon glyphicon-triangle-right'}>
                    </a>
                </h4>
            </div>
        );
    }
}
const Calender = connect(null, mapDispatchToProps)(CalenderConnect);
export default Calender;
