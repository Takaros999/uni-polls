"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const legendMargin = {
  id: "legendMargin",
  // @ts-expect-error
  beforeInit: function (chart) {
    const fitValue = chart.legend.fit;
    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      return (this.height += 5);
    };
  },
};

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        // Ensure the ticks are integers
        stepSize: 1,
        // @ts-expect-error
        callback: function (value) {
          if (value % 1 === 0) {
            return value;
          }
        },
      },
    },
    // x: {
    //   ticks: {
    //     callback: function (value) {
    //       // Assuming value is the label string
    //       // Insert line breaks where needed, this is a simple example
    //       console.log(value);
    //       return value;
    //       return value.split(" "); // Splits a long string into array of words
    //     },
    //   },
    // },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "DIT Polls",
    },
  },
};

type PollEntries = {
  universityPrivatization: {
    yes: number;
    no: number;
  };
  universityOccupation: {
    yes: number;
    no: number;
  };
};

type PropsType = {
  pollEntries: PollEntries;
};

export const getData = (pollEntries: PollEntries) => ({
  labels: [["Ίδρυση ", "μη κρατικών Πανεπιστημίων"], "Κατάληψη Τμήματος"],
  datasets: [
    {
      label: "Υπέρ",
      data: [
        pollEntries.universityPrivatization.yes,
        pollEntries.universityOccupation.yes,
      ],
      backgroundColor: "#636ee4",
      barThickness: 30, // Adjust this value as needed
    },
    {
      label: "Κατά",
      data: [
        pollEntries.universityPrivatization.no,
        pollEntries.universityOccupation.no,
      ],
      backgroundColor: "#fff",
      barThickness: 30, // Adjust this value as needed
    },
  ],
});

export default function Chart(props: PropsType) {
  return (
    <Bar
      className="max-w-xl max-h-80"
      options={options}
      data={getData(props.pollEntries)}
      plugins={[legendMargin]}
    />
  );
}
