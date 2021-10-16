import React from "react";
// import Plot from "react-plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class PlotComponent extends React.Component {
    // Plotly = window.Plotly;
    // Plot = createPlotlyComponent(window.Plotly);
    render() {
        return (<div>
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
        /></div>);
    }
}

export default PlotComponent;