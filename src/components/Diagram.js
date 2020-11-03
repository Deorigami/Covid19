import React from "react";
import { ResponsiveBump } from "@nivo/bump";

function Diagram() {
  const data = [
    {
      id: "Serie 1",
      data: [
        {
          x: 2000,
          y: 10,
        },
        {
          x: 2001,
          y: 4,
        },
        {
          x: 2002,
          y: 12,
        },
        {
          x: 2003,
          y: 5,
        },
        {
          x: 2004,
          y: 11,
        },
        {
          x: 2005,
          y: 1,
        },
      ],
    },
    {
      id: "Serie 2",
      data: [{}],
    },
    {
      id: "Serie 3",
      data: [{}],
    },
    {
      id: "Serie 4",
      data: [{}],
    },
    {
      id: "Serie 5",
      data: [{}],
    },
    {
      id: "Serie 6",
      data: [{}],
    },
    {
      id: "Serie 7",
      data: [{}],
    },
    {
      id: "Serie 8",
      data: [{}],
    },
    {
      id: "Serie 9",
      data: [{}],
    },
    {
      id: "Serie 10",
      data: [{}],
    },
    {
      id: "Serie 11",
      data: [{}],
    },
    {
      id: "Serie 12",
      data: [{}],
    },
  ];

  return (
    <div style={{ height: "50%", background: "white", width: "100%" }}>
      <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: "spectral" }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={2}
        activePointSize={8}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        enableGridX={false}
        enableGridY={false}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "ranking",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
}

export default Diagram;
