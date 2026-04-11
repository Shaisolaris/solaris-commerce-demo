"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RevenueTrendChart() {
  const options: ApexOptions = {
    colors: ["#10b981", "#6ee7b7"],
    chart: {
      type: "area",
      height: 320,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
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
      categories: [
        "Mar 12",
        "Mar 16",
        "Mar 20",
        "Mar 24",
        "Mar 28",
        "Apr 1",
        "Apr 5",
        "Apr 9",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#6B7280", fontSize: "12px" },
        formatter: (val: number) => `$${(val / 1000).toFixed(1)}K`,
      },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
    tooltip: {
      y: { formatter: (val: number) => `$${val.toLocaleString()}` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Revenue Trend
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Daily revenue, last 30 days
          </p>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$47.2K</span>
          <span className="text-theme-sm font-semibold text-emerald-600">+18.6%</span>
        </div>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[
            { name: "This month", data: [3200, 4100, 3800, 5200, 4800, 6100, 7400, 8200] },
            { name: "Last month", data: [2800, 3400, 3200, 4100, 4400, 4900, 5800, 6400] },
          ]}
          type="area"
          height={320}
        />
      </div>
    </div>
  );
}
