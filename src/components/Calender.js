import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from "react-redux";
import updateExpense from '../actions/action';
import JSPath from 'jspath';

var hrefstyle = {
    'text-decoration': 'none',
    'color': 'white',
    'padding': '10px'
}

var textstyle = {
    'color': 'white',
    'font-size': '16px'
}

/*var expenses = {
    'April2019': {
        Drainage: "1000",
        Water: "20000",
        Security: "40000",
        Electricity: "60000"
    },
    'March2019': {
        Drainage: "7000",
        Water: "30000",
        Security: "50000",
        Electricity: "70000"
    },
    'February2019': {
        Drainage: "9000",
        Water: "12010",
        Security: "60009",
        Electricity: "87000"
    },
    'January2019': {
        Drainage: "8000",
        Water: "13010",
        Security: "30009",
        Electricity: "67000"
    }
}*/


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
    fetchData = (month) => {
        let params = {
            "societyname": "Greenpark",
            "month": month
        }     
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        
        let url = 'https://society-app-backend.herokuapp.com/expensereport/getmonthlyreport?' + query;
        fetch(url, { 
            method: 'GET' 
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            return this.parseJson(data);
        })
        .then((doc) => {
            this.props.updateExpense(doc);
        })
        .catch((error) => {
            console.log("Error ", error);
            alert('Data Not Found');
        });
    }
    parseJson = (data) => {
        return new Promise(function(resolve, reject){
            console.log("Enter Data $$$$$$", data);
            if (data === 'Report does not exist') {
                reject(data);
            }
            var amount = JSPath.apply('.expensedetails{"Security Drainage Water Electricity" *= .name}', data);
            let initialstate ={};
            amount.forEach((obj)=>{
                initialstate[obj.name] = obj.amount;
            })
            resolve(initialstate);
        });
    }
    render() {
        this.fetchData(this.state.month.format('MMMMYYYY'));
       /* if( !expenses[this.state.month.format('MMMMYYYY')] ) {
            alert("Data Not Found");
        } else {
            this.props.updateExpense(expenses[this.state.month.format('MMMMYYYY')]);
        }*/
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
