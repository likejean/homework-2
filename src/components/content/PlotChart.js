import React, {Component} from 'react';
import AmCharts from "@amcharts/amcharts3-react";
// Generate random data

function generateData() {
    const firstDate = new Date();

    const dataProvider = [];

    for (let i = 0; i < 100; ++i) {
        const date = new Date(firstDate.getTime());

        date.setDate(i);

        dataProvider.push({
            date: date,
            value: Math.floor(Math.random() * 100)
        });
    }

    return dataProvider;
}


// Component which contains the dynamic state for the chart
class PlotChart extends Component {
    constructor(props) {
        super(props);
        console.log('DATA',props);
        this.state = {
            data: props.data,
            dataProvider: generateData(),
            timer: null
        };
    }

    componentDidMount() {
        this.setState({
            // Update the chart dataProvider every 3 seconds
            timer: setInterval(() => {
                this.setState({
                    dataProvider: generateData()
                });
            }, 3000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        const config = {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled": true,
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon":{
                    "drop": true,
                    "adjustBorderColor": false,
                    "color":"#ff2423"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset":30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.5,
                "selectedBackgroundColor": "#79c0fd",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color":"#aa2663"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha":1,
                "cursorColor":"#258cbb",
                "limitToGraph":"g1",
                "valueLineAlpha":0.2,
                "valueZoomable": true
            },
            "valueScrollbar":{
                "oppositeAxis": false,
                "offset":50,
                "scrollbarHeight":10
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "dataProvider": this.state.dataProvider
        };

        return (
            <div className="App">
                <AmCharts.React style={{ width: "100%", height: "500px", marginTop: "50px" }} options={config} />
            </div>
        );
    }
}

export default PlotChart;