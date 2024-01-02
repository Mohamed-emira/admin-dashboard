import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows,columns } from "../invoices/data";
import Header from "../../Component/Header";

export default function Invoices() {
  return (
    <Box>
    <Header title="INVOICES" subTitle="List of Invoice Balances" />

    <Box sx={{ height: 600, mx: "auto" }}>
      <DataGrid
      checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{ toolbar: GridToolbar }}

      />
    </Box>
  </Box>
  )
}
