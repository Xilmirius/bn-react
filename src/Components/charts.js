import Chart1 from "./Graph/chart1";
import Chart2 from "./Graph/chart2";
import Chart3 from "./Graph/chart3";
import Chart4 from "./Graph/chart4";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./Store/Container/graph";

//xx_periodo, linea1, linea2

export default function Charts() {
  const graph = useSelector((state) => state.graphs.value);
  const dispatcher = useDispatch();

  return (
    <>
      <div className="box" onClick={async () => dispatcher(await getData(1))}>
        <Chart1 data={graph} />
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
