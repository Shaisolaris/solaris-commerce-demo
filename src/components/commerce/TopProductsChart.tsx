"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TopProductsChart() {
  const data = [
    { name: "Wireless Earbuds Pro", sold: 412 },
    { name: "Cotton Crew Tee", sold: 348 },
    { name: "Stoneware Mug Set", sold: 296 },
    { name: "Linen Throw Blanket", sold: 224 },
    { name: "Bamboo Cutting Board", sold: 168 },
    { name: "Glass Water Bottle", sold: 142 },
  ];

  const options: ApexOptions = {
    colors: ["#10b981"],
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: "55%" },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: data.map((d) => d.name),
      labels: {
        style: { colors: "#6B7280", fontSize: "11px" },
        rotate: -25,
        rotateAlways: true,
        maxHeight: 80,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
    tooltip: {
      y: { formatter: (val: number) => `${val} units sold` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-3 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Top Products
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          Best sellers by units, last 30 days
        </p>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[{ name: "Units sold", data: data.map((d) => d.sold) }]}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}
