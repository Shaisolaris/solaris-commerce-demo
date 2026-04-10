import React from "react";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 px-4 py-5 text-center dark:from-white/[0.04] dark:to-white/[0.02]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Solaris Commerce
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Merchant operations for high-growth e-commerce brands.
      </p>
      <span className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-theme-sm">
        Demo Workspace
      </span>
    </div>
  );
}
