import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows,columns } from '../contacts/data'
import Header from '../../Component/Header'

export default function Contacts() {
  return (
    <Box>
        <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
    <Box sx={{ height: 600, mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{ toolbar: GridToolbar }}

      />
    </Box>
  </Box>
  )
}
