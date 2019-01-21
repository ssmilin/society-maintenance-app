import React, { Component } from 'react';
import '../css/graph.css';
import ChartistGraph from "react-chartist";
// Data for Line Chart
var dataSales = {
    labels: [
        "Jul'18",
        "Aug'18",
        "Sep'18",
        "Oct'18",
        "Nov'18",
        "Dec'18",
        "Jan'19"
    ],
    series: [
        [1500, 2000, 3000, 5000, 4000, 6000, 7000],
        [1000, 1000, 2000, 4000, 3000, 5000, 6000]
    ]
};

var optionsBar = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px",
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
};

var responsiveBar = [
    [
        "screen and (max-width: 640px)",
        {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }
    ]
];

var dataPie = {
    labels: ["60%", "40%"],
    series: [6000, 4000]
  };
class GraphView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let chartType = (this.props.charttype === 'Line');
        return (
            <div className='graph-view'>
                <div className='graph'>
                <div>
                            <h4>{this.props.title}</h4>
                            <h5>{this.props.subtitle}</h5>
                        </div>
                    {chartType ? (
                        <div className="ct-chart">
                            <ChartistGraph
                                data={dataSales}
                                type="Line"
                                options={optionsBar}
                                responsiveOptions={responsiveBar}
                            />
                        </div>
                    ) : (
                            <div
                                id="chartPreferences"
                                className="ct-chart ct-perfect-fourth"
                            >
                                <ChartistGraph data={dataPie} type="Pie" />
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default GraphView;
