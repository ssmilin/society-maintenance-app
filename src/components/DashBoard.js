import React, { Component } from 'react';
import '../css/sidebar.css';
import { Grid, Row, Col } from "react-bootstrap";
import QuickStats from '../components/QuickStats';
import GraphView from '../components/GraphView';
import Footer from '../components/Footer';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { currentMonth: state.currentMonth };
};
class DashBoardConnect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let legend = '';
    return (
      <div className='contentpanel-wrapper'>
        <Grid fluid>
          <Row>
            <Col lg={3}>
              <div class='stats'>
                <QuickStats
                  bigIcon="fas fa-truck"
                  statsText="Drainage"
                  statsValue={this.props.currentMonth.Drainage + " ₹"}
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated Jan 14"
                  color='Red'
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class='stats'>
                <QuickStats
                  bigIcon="fas fa-tint"
                  statsText="Water"
                  statsValue={this.props.currentMonth.Water + " ₹"}
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated Jan-28"
                  color='SkyBlue'
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class='stats'>
                <QuickStats
                  bigIcon="fas fa-handshake"
                  statsText="Security"
                  statsValue={this.props.currentMonth.Security + " ₹"}
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated-Jan 10"
                  color='Green'
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class='stats'>
                <QuickStats
                  bigIcon="fas fa-bolt"
                  statsText="Electricty"
                  statsValue={this.props.currentMonth.Electricity + " ₹"}
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated-Dec 1"
                  color='DangerRed'
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} sm={12}>
              <GraphView
                charttype="Line"
                title="Income vs Expense"
                subtitle="Last 6 months trend"
                legend={
                  <div className="legend">
                    <i class="fa fa-circle text-info1"></i>
                    Income
                                        <i class="fa fa-circle text-info2"></i>
                    Expense
                                    </div>
                }
              />
            </Col>
            <Col lg={4} sm={12}>
              <GraphView
                charttype="Pie"
                title="Subscription Details"
                subtitle="Current Month"
                legend={
                  <div className="legend">
                    <i class="fa fa-circle text-info1"></i>
                    Paid
                                        <i class="fa fa-circle text-info2"></i>
                    Pending
                                    </div>
                }
              />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>

    );
  }
}
const DashBoard = connect(mapStateToProps)(DashBoardConnect);
export default DashBoard;