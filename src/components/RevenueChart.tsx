import { memo, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const MemoRevenueChart = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleResize = () => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Deposit",
        data: [25000, 15000, 12000, 15000, 10000],
        borderColor: "#6941C6",
        backgroundColor: "#6941C6",
        tension: 0.4,
      },
      {
        label: "Withdrawal",
        data: [4000, 4000, 7000, 11000, 7000],
        borderColor: "#101828",
        backgroundColor: "#101828",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#101828",
          callback: (value: any) => {
            return value === 0 ? value : value / 1000 + "K";
          },
        },
        grid: {
          color: "#98A2B3",
        },
        border: {
          display: false,
          dash: [5, 5],
          dashOffset: 5,
        },
      },
      x: {
        ticks: {
          color: "#101828",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="grid gap-6 w-full py-4 px-7">
      <h2 className="text-gray-900 font-medium text-xl">Revenue</h2>
      <div className="h-[180px] xs:w-[90%] lg:w-[100%]">
        {loading ? (
          <span className="flex items-center justify-center h-full text-lg text-gray-900 font-medium">
            loading chart ...
          </span>
        ) : (
          <Line data={data} options={options} />
        )}
      </div>
      <div className="flex items-center">
        <div className="flex gap-2 items-center mr-4">
          <div className="w-2 h-2 bg-brand-700 rounded-full" />
          <span className="text-xs text-gray-900">deposit</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-gray-900 rounded-full" />
          <span className="text-xs text-gray-900">Withdrawal</span>
        </div>
      </div>
    </div>
  );
};

const RevenueChart = memo(MemoRevenueChart);

export default RevenueChart;
