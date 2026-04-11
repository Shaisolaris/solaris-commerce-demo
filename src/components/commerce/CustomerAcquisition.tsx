"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CustomerAcquisition() {
  const options: ApexOptions = {
    colors: ["#10b981", "#fbbf24"],
    chart: {
      type: "bar",
      height: 280,
      toolbar: { show: false },
      stacked: true,
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: "50%" },
    },
    dataLabels: { enabled: false },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
      markers: { strokeWidth: 0 },
      itemMargin: { horizontal: 10 },
    },
    xaxis: {
      categories: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
    tooltip: {
      y: { formatter: (val: number) => `${val} customers` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Customer Acquisition
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          New vs returning, weekly
        </p>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[
            { name: "New", data: [82, 94, 76, 108, 124, 98, 142, 168] },
            { name: "Returning", data: [44, 52, 48, 64, 72, 68, 86, 94] },
          ]}
          type="bar"
          height={280}
        />
      </div>
    </div>
  );
}
