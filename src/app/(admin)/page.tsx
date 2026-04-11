import type { Metadata } from "next";
import React from "react";
import { CommerceMetrics } from "@/components/commerce/CommerceMetrics";
import RevenueTrendChart from "@/components/commerce/RevenueTrendChart";
import OrderStatusChart from "@/components/commerce/OrderStatusChart";
import TopProductsChart from "@/components/commerce/TopProductsChart";
import CustomerAcquisition from "@/components/commerce/CustomerAcquisition";
import RecentOrdersTable from "@/components/commerce/RecentOrdersTable";

export const metadata: Metadata = {
  title: "Solaris Commerce — Merchant Operations Dashboard",
  description:
    "Merchant operations dashboard for high-growth e-commerce brands.",
};

export default function CommerceDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <CommerceMetrics />
        <RevenueTrendChart />
        <TopProductsChart />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-4">
        <OrderStatusChart />
        <CustomerAcquisition />
      </div>

      <div className="col-span-12">
        <RecentOrdersTable />
      </div>
    </div>
  );
}
