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
  items: T[];
  column: Column<T>[];
};
function DataTable<T>({ items, column }: DataTableProps<T>) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {column.map((c) => {
              return <TableCell>{c.label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((element) => {
            return (
              <TableRow>
                {column.map((col) => {
                  return <TableCell>{col.renderContent(element)}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
