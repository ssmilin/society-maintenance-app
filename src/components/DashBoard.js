import React, { Component } from "react";
import "../css/sidebar.css";
import { Grid, Row, Col } from "react-bootstrap";
import QuickStats from "../components/QuickStats";
import GraphView from "../components/GraphView";
import Footer from "../components/Footer";

class DashBoard extends Component {
  render() {
    let legend = "";
    return (
      <div className="contentpanel-wrapper">
        <Grid fluid>
          <Row>
            <Col lg={3}>
              <div class="stats">
                <QuickStats
                  bigIcon="fas fa-truck"
                  statsText="Drainage"
                  statsValue="7000 RS"
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated Jan 14"
                  color="Red"
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class="stats">
                <QuickStats
                  bigIcon="fas fa-tint"
                  statsText="Water"
                  statsValue="5000 RS"
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated Jan-28"
                  color="SkyBlue"
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class="stats">
                <QuickStats
                  bigIcon="fas fa-handshake"
                  statsText="Security"
                  statsValue="2200 RS"
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated-Jan 10"
                  color="Green"
                />
              </div>
            </Col>
            <Col lg={3}>
              <div class="stats">
                <QuickStats
                  bigIcon="fas fa-bolt"
                  statsText="Electricty"
                  statsValue="70,001 RS"
                  statsIcon="far fa-calendar-alt"
                  statsIconText="Last updated-Dec 1"
                  color="DangerRed"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <GraphView
                charttype="Line"
                title="Income vs Expense"
                subtitle="Last 6 months trend"
                legend={
                  <div className="legend">
                    <i class="fa fa-circle text-info1" />
                    Income
                    <i class="fa fa-circle text-info2" />
                    Expense
                  </div>
                }
              />
            </Col>
            <Col lg={4}>
              <GraphView
                charttype="Pie"
                title="Subscription Details"
                subtitle="Current Month"
                legend={
                  <div className="legend">
                    <i class="fa fa-circle text-info1" />
                    Paid
                    <i class="fa fa-circle text-info2" />
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

export default DashBoard;
