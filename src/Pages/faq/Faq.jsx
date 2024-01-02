import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../Component/Header";

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
    <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
    <Stack gap={2}>
      <Accordion defaultExpanded onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {" "}
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Who is mohamed hassan?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel2"
        }
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {" "}
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Who is Mohamed Hassan?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel3"
        }
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {" "}
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Who is Mohamed Hassan?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel4"
        }
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Who is Mohamed Hassan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel1"
        }
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel2"
        }
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {" "}
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={
          // @ts-ignore
          expanded === "panel3"
        }
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Who is Mohamed Hassan?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
    </Box>
  );
}
