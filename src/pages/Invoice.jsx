import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

function Invoice() {
  const { state } = useLocation();
  const { customer, cart, total } = state;

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Mobile Shop Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Customer: ${customer.name}`, 20, 40);
    doc.text(`Phone: ${customer.phone}`, 20, 50);

    let y = 70;

    cart.forEach((item) => {
      doc.text(
        `${item.name} x ${item.qty} = ₹${item.price * item.qty}`,
        20,
        y
      );
      y += 10;
    });

    doc.text(`Total: ₹${total}`, 20, y + 10);

    doc.save("invoice.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">

      <h1 className="text-2xl font-bold mb-4">🧾 Invoice</h1>

      <p><b>Name:</b> {customer.name}</p>
      <p><b>Phone:</b> {customer.phone}</p>

      <hr className="my-4" />

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <p>{item.name} x {item.qty}</p>
          <p>₹{item.price * item.qty}</p>
        </div>
      ))}

      <hr className="my-4" />

      <h2 className="font-bold text-lg">Total: ₹{total}</h2>

      <button
        onClick={generatePDF}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

export default Invoice;