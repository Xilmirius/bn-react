import React from "react";
import Chart1 from "./Graph/chart1";
import Chart2 from "./Graph/chart2";
import Chart3 from "./Graph/chart3";
import Chart4 from "./Graph/chart4";

//xx_periodo, linea1, linea2

export default class Charts extends React.Component {
  state = {
    graph1: [],
  };

  componentDidMount() {
    this.fetchDataGraph(1);
  }

  fetchDataGraph = async (id) => {
    console.log("chiedo dati di: " + id);
    const respose = await fetch("/data/graph?id=" + id);
    console.log(respose.body);
    this.setState({
      graph1: respose.body,
    });
  };

  render() {
    return (
      <>
        <div className="box">
          <Chart1 data={this.state.graph1} />
        </div>
        <div className="box">
          <Chart2 />
        </div>
        <div className="box">
          <Chart3 />
        </div>
        <div className="box">
          <Chart4 />
        </div>
      </>
    );
  }
}
