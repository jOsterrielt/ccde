/* eslint-disable react/prop-types */
import { useState } from "react";

import { Doughnut, Bar } from "react-chartjs-2";
import PieIcon from "../Icons/PieIcon";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import BarIcon from "../Icons/BarIcon";
import styles from "./Results.module.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Results = ({ resultado }) => {
  const [changeChart, setChangeChart] = useState(false);

  const labels = resultado.detalles.map((aparato) => aparato.nombre);
  const data = resultado.detalles.map((aparato) => aparato.costoTotal);

  const handleClick = () => {
    setChangeChart(!changeChart);
  };

  return (
    <section className={styles.container}>
      <h3>¿Cuánto cuesta y consume cada aparato?</h3>
      <ul className={styles.itemContainer}>
        {resultado.detalles.map((aparato, index) => (
          <li key={index} className={styles.item}>
            <p>
              <span>{aparato.nombre}</span>
            </p>
            <div className={styles.itemResult}>
              <p>Costo total:</p> <span>${aparato.costoTotal.toFixed(2)}</span>
            </div>
            <div className={styles.itemResult}>
              Consumo total: <span>{aparato.consumoTotal.toFixed(2)} kWh</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.totalContainer}>
        <h3>Total del Indoor</h3>
        <div className={styles.total}>
          <p>
            Costo total: <br />
            <span>${resultado.costoTotalIndoor.toFixed(2)}</span>
          </p>
          <p>
            Consumo total: <br />
            <span>{resultado.consumoTotalIndoor.toFixed(2)}</span> kWh
          </p>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <button className={styles.chartButton} onClick={handleClick}>
          {changeChart ? <BarIcon /> : <PieIcon />}
        </button>
        {changeChart ? (
          <div className={styles.pieContainer}>
            <Doughnut
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Costo",
                    data: data,
                    backgroundColor: [
                      "rgba(97, 83, 255, 0.5)",
                      "rgba(134, 109, 255, 0.5)",
                      "rgba(160, 131, 255, 0.5)",
                      "rgba(74, 63, 204, 0.5)",
                      "rgba(50, 43, 153, 0.5)",
                      "rgba(40, 34, 122, 0.5)",
                    ],
                    borderColor: [
                      "rgba(97, 83, 255)",
                      "rgba(134, 109, 255)",
                      "rgba(160, 131, 255)",
                      "rgba(74, 63, 204)",
                      "rgba(50, 43, 153)",
                      "rgba(40, 34, 122)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                    align: "center",
                    labels: {
                      usePointStyle: true,
                      boxWidth: 10,
                      boxHeight: 10,
                      color: "#FFFFFF",
                      padding: 20,
                    },
                  },
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
        ) : (
          <Bar
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Costo total",
                  data: data,
                  backgroundColor: [
                    "rgba(97, 83, 255, 0.5)",
                    "rgba(134, 109, 255, 0.5)",
                    "rgba(160, 131, 255, 0.5)",
                    "rgba(74, 63, 204, 0.5)",
                    "rgba(50, 43, 153, 0.5)",
                    "rgba(40, 34, 122, 0.5)",
                  ],
                  borderColor: [
                    "rgba(97, 83, 255)",
                    "rgba(134, 109, 255)",
                    "rgba(160, 131, 255)",
                    "rgba(74, 63, 204)",
                    "rgba(50, 43, 153)",
                    "rgba(40, 34, 122)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  grid: {
                    color: "#6153ff30",
                  },
                },
                y: {
                  grid: {
                    color: "#6153ff30",
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                  align: "center",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                    boxHeight: 10,
                    color: "#FFFFFF",
                    padding: 20,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Results;
