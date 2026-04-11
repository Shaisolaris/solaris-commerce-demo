"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function OrderStatusChart() {
  const fulfilled = 824;
  const processing = 286;
  const refunded = 78;
  const cancelled = 59;
  const total = fulfilled + processing + refunded + cancelled;

  const options: ApexOptions = {
    colors: ["#10b981", "#fbbf24", "#a78bfa", "#f87171"],
    chart: {
      type: "pie",
      height: 280,
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    labels: ["Fulfilled", "Processing", "Refunded", "Cancelled"],
    stroke: { width: 0 },
    dataLabels: {
      enabled: true,
      style: { fontSize: "13px", fontWeight: 600 },
      dropShadow: { enabled: false },
      formatter: (val: number) => `${val.toFixed(0)}%`,
    },
    legend: {
      position: "bottom",
      fontSize: "13px",
      markers: { strokeWidth: 0 },
      itemMargin: { horizontal: 8, vertical: 4 },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val} orders` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Orders by Status
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          {total.toLocaleString()} orders, last 30 days
        </p>
      </div>
      <div className="mt-2">
        <ReactApexChart
          options={options}
          series={[fulfilled, processing, refunded, cancelled]}
          type="pie"
          height={280}
        />
      </div>
    </div>
  );
}
