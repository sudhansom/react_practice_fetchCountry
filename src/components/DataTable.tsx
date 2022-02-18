import React from "react";
import {
  TableBody,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

type Column<T> = {
  label: string;
  renderContent: (element: T) => React.ReactNode;
};

type DataTableProps<T> = {
  items: T;
  column: Column<T>[];
};
function DataTable<T>({ items, column }: DataTableProps) {
  return <div>DataTable</div>;
}

export default DataTable;
