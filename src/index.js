import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses/expenses";
import Invoices from "./routes/invoices/invoices";
import "./index.css";
import App from "./App";
import NoMatch from "./routes/nomatch/nomatch";
import Invoice from "./components/Invoice/Invoice";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
