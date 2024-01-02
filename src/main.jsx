import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// @ts-ignore
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import Team from "./Pages/team/Team.jsx";
import Contacts from "./Pages/contacts/Contacts.jsx";
import Invoices from "./Pages/invoices/Invoices.jsx";
import Calender from "./Pages/calender/calender.jsx";
import Form from "./Pages/form/Form.jsx";
import Faq from "./Pages/faq/Faq.jsx";
import Bar from "./Pages/bar/BarChart.jsx";
import Pie from "./Pages/pie/PieChart.jsx";
import Line from "./Pages/line/Line.jsx";
import Geography from "./Pages/geography/Geography.jsx";
import "./index.css";
import NotFound from "./Pages/notFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
