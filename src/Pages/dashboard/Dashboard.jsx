import { Box, Button, Stack, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../Component/Header";

export default function Dashboard() {

  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
      <Box sx={{textAlign:"right",my:1}}>
      <Button sx={{padding:"6px 8px"}} variant="contained" color="primary">
        <DownloadOutlined/>
        Download Reports
        </Button>
      </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
