import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

type OrderStatus = "Fulfilled" | "Processing" | "Refunded" | "Cancelled";

interface Order {
  id: string;
  customer: string;
  email: string;
  items: number;
  total: string;
  date: string;
  status: OrderStatus;
}

const orders: Order[] = [
  {
    id: "#10428",
    customer: "Maya Chen",
    email: "maya@hellomaya.co",
    items: 3,
    total: "$184.20",
    date: "Apr 11, 9:42 AM",
    status: "Fulfilled",
  },
  {
    id: "#10427",
    customer: "Daniel Okafor",
    email: "danielo@gmail.com",
    items: 1,
    total: "$48.00",
    date: "Apr 11, 9:18 AM",
    status: "Processing",
  },
  {
    id: "#10426",
    customer: "Priya Iyer",
    email: "p.iyer@iyerstudio.in",
    items: 2,
    total: "$96.50",
    date: "Apr 11, 8:54 AM",
    status: "Fulfilled",
  },
  {
    id: "#10425",
    customer: "Sam Whittaker",
    email: "sam.w@whittakerco.com",
    items: 4,
    total: "$232.80",
    date: "Apr 11, 8:31 AM",
    status: "Processing",
  },
  {
    id: "#10424",
    customer: "Lia Romero",
    email: "lia@romero.co",
    items: 1,
    total: "$36.00",
    date: "Apr 10, 11:48 PM",
    status: "Refunded",
  },
  {
    id: "#10423",
    customer: "Ben Grossman",
    email: "ben@grossman.dev",
    items: 2,
    total: "$74.50",
    date: "Apr 10, 10:22 PM",
    status: "Cancelled",
  },
];

const statusColor = (s: OrderStatus): "success" | "warning" | "info" | "error" =>
  s === "Fulfilled"
    ? "success"
    : s === "Processing"
    ? "warning"
    : s === "Refunded"
    ? "info"
    : "error";

export default function RecentOrdersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Latest orders across all channels
          </p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          View all orders
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Order</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Customer</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Items</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Total</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Date</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="py-3 font-mono text-theme-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {o.id}
                </TableCell>
                <TableCell className="py-3">
                  <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{o.customer}</p>
                  <span className="text-gray-500 text-theme-xs dark:text-gray-400">{o.email}</span>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{o.items}</TableCell>
                <TableCell className="py-3 font-semibold text-gray-800 text-theme-sm dark:text-white/90">{o.total}</TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{o.date}</TableCell>
                <TableCell className="py-3">
                  <Badge size="sm" color={statusColor(o.status)}>{o.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
