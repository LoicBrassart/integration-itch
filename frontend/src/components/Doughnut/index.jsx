import useApi from "@services/useApi";
import { Chart } from "chart.js/auto";
import { useRef, useEffect, useState } from "react";
import Styled from "./style";

export default function Doughnut() {
  const [apiData, setApiData] = useState([]);
  const doughnutCanvas = useRef(null);
  const api = useApi();

  useEffect(() => {
    api.get("/users").then(({ data }) => {
      setApiData(data);
    });
  }, []);

  useEffect(async () => {
    if (!apiData.length) return;
    await new Chart(doughnutCanvas.current, {
      type: "doughnut",
      data: {
        labels: apiData.map((item) => `${item.name}`),
        datasets: [
          {
            label: "Email length",
            data: apiData.map((item) => item.email.length),
          },
        ],
      },
    });
  }, [apiData]);

  return (
    <Styled>
      <canvas ref={doughnutCanvas} className="standardCanvas" />
    </Styled>
  );
}
