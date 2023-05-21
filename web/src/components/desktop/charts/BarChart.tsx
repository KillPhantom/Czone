import React from "react";
import { ComposedChart } from "recharts";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Rectangle,
  Scatter,
} from "recharts";

const data = [
  {
    name: "",
  },
  {
    name: "HR",
    uv: 4000,
    pv: 2400,
    median: 2400,
    client: 3200,
  },
  {
    name: "Marketing",
    uv: 3000,
    pv: 1398,
    median: 2210,
    client: 800,
  },
  {
    name: "Sales",
    uv: 2000,
    pv: 9800,
    median: 2290,
    client: 700,
  },
  {
    name: "Finance",
    uv: 2780,
    pv: 3908,
    median: 2000,
    client: 1200,
  },
  {
    name: "Logistics",
    uv: 1890,
    pv: 4800,
    median: 2181,
    client: 900,
  },
  {
    name: "UI/UX",
    uv: 2390,
    pv: 3800,
    median: 2500,
    client: 1000,
  },
  {
    name: "Customer Support",
    uv: 3490,
    pv: 4300,
    median: 2100,
    client: 3000,
  },
  {
    name: "",
  },
];

// using Customized gives you access to all relevant chart props
const CustomizedHorizontalRectangle = (props) => {
  const { formattedGraphicalItems } = props;
  // get first and second series in chart
  const firstSeries = formattedGraphicalItems[2];
  const secondSeries = formattedGraphicalItems[3];

  // render custom content using points from the graph
  return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const xDifference = firstSeriesPoint.x - secondSeriesPoint.x;

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={xDifference}
        height={14}
        x={secondSeriesPoint.x}
        y={secondSeriesPoint.y - 5}
        fill="grey"
        z={-1}
      />
    );
  });
};

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height={800}>
      <ComposedChart
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Customized component={CustomizedHorizontalRectangle} />
        <Scatter name="median" dataKey="median" fill="red" shape="triangle" />
        <Scatter name="your company" dataKey="client" fill="blue" shape="wye" />
        <Line type="monotone" dataKey="pv" stroke="none" legendType="none" />
        <Line type="monotone" dataKey="uv" stroke="none" legendType="none" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Example;
