import Data, { getInvoices } from "../../data/Data";
import { Link, Outlet } from "react-router-dom";
function Invoices() {
  let invoices = getInvoices();
  return (
    <main>
      <h2>Invoices</h2>
      {invoices.map((invoice) => (
        <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
          {invoice.name}
        </Link>
      ))}
      <Outlet />
    </main>
  );
}
export default Invoices;
