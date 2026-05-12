import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function Invoice() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const customer = state?.customer;
  const cart = state?.cart || [];
  const total = state?.total || 0;

  const generatePDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    let y = 60;

    doc.setFontSize(22);
    doc.text("Mobile Store Invoice", margin, y);
    y += 30;

    doc.setLineWidth(1);
    doc.line(margin, y, 560, y);
    y += 20;

    doc.setFontSize(12);
    doc.text(`Customer: ${customer?.name || "-"}`, margin, y);
    doc.text(`Phone: ${customer?.phone || "-"}`, margin, y + 18);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 420, y);
    y += 40;

    doc.setFontSize(14);
    doc.text("Item", margin, y);
    doc.text("Qty", 330, y);
    doc.text("Price", 420, y);
    doc.text("Amount", 500, y);
    y += 12;
    doc.line(margin, y, 560, y);
    y += 20;

    cart.forEach((item) => {
      const amount = item.price * item.qty;
      if (y > 720) {
        doc.addPage();
        y = 60;
      }
      doc.setFontSize(12);
      doc.text(item.name, margin, y);
      doc.text(String(item.qty), 340, y, { align: "right" });
      doc.text(`${item.price}`, 430, y, { align: "right" });
      doc.text(`${amount}`, 515, y, { align: "right" });
      y += 20;
    });

    y += 10;
    doc.line(margin, y, 560, y);
    y += 26;
    doc.setFontSize(16);
    doc.text(`Total: ${total}`, 420, y, { align: "right" });

    doc.save("invoice.pdf");
  };

  if (!customer) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded text-center">
        <h1 className="text-2xl font-bold mb-4">Invoice not available</h1>
        <p className="text-slate-600 mb-4">Please return to billing and create the invoice again.</p>
        <button
          onClick={() => navigate("/walkin")}
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
        >
          Back to Walk-In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold"> Invoice</h1>
          <p className="text-slate-500">Customer receipt for billing</p>
        </div>
        <button
          onClick={generatePDF}
          className="rounded bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 bg-slate-50 p-5 rounded-lg mb-6">
        <div>
          <p className="text-slate-500 text-sm">Customer</p>
          <p className="font-semibold text-lg">{customer.name}</p>
          <p className="text-slate-600">{customer.phone}</p>
        </div>
        <div>
          <p className="text-slate-500 text-sm">Invoice Date</p>
          <p className="font-semibold text-lg">{new Date().toLocaleDateString()}</p>
          <p className="text-slate-600">Items: {cart.length}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">Product</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600">Qty</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600">Price</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 text-sm text-slate-700">{item.name}</td>
                <td className="px-4 py-4 text-right text-sm text-slate-700">{item.qty}</td>
                <td className="px-4 py-4 text-right text-sm text-slate-700">{item.price}</td>
                <td className="px-4 py-4 text-right text-sm font-semibold text-slate-900">{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="rounded-lg bg-slate-50 p-4 text-slate-600">
          This invoice is generated from the mobile store billing system.
        </div>
        <div className="rounded-lg bg-slate-100 p-4 text-right">
          <p className="text-sm text-slate-500">Total amount due</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
