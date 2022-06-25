import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Дни недели", "Количество затраченных часов"],
  ["Пн", 1],
  ["Вт", 1],
  ["Ср", 1.5],
  ["Чт", 1],
  ["Пт", 1.5],
  ["Сб", 4.5],
  ["Вс", 3.5],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Занятость учебой по дням недели",
  pieStartAngle: 100,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
