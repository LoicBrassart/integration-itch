import { Chart } from "chart.js/auto";
import { useRef, useEffect, useState } from "react";
import Styled from "./style";

export default function Doughnut() {
  const data = [
    {
      firstname: "Valentin",
      lastname: "Waquet",
      birthYear: 1996,
    },
    {
      firstname: "Romain",
      lastname: "Haddad",
      birthYear: 1995,
    },
  ];

  const [, setDoughnut] = useState(null);
  const doughnutCanvas = useRef(null);

  useEffect(async () => {
    const chart = await new Chart(doughnutCanvas.current, {
      type: "doughnut",
      data: {
        labels: data.map((item) => `${item.firstname} ${item.lastname}`),
        datasets: [
          {
            label: "Birth Year",
            data: data.map((item) => item.birthYear),
          },
        ],
      },
    });
    setDoughnut(chart);
  }, []);

  return (
    <Styled>
      <canvas ref={doughnutCanvas} className="standardCanvas" />
    </Styled>
  );
}
