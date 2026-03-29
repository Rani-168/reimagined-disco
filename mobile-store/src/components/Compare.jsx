function Compare({ list }) {
  // 🏆 Find Best Values
  const bestRam = Math.max(...list.map(p => p.ram));
  const bestCamera = Math.max(...list.map(p => p.camera));
  const bestBattery = Math.max(...list.map(p => p.battery));
  const bestPrice = Math.min(...list.map(p => p.price)); // lower is better

  return (
    <div className="mt-10 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">📊 Compare Phones</h2>

      <table className="w-full border text-center">
        <thead>
          <tr>
            <th className="border p-2">Feature</th>
            {list.map((p) => (
              <th key={p.id} className="border p-2">{p.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Price */}
          <tr>
            <td className="border p-2">Price</td>
            {list.map((p) => (
              <td
                key={p.id}
                className={`border p-2 ${
                  p.price === bestPrice ? "bg-green-200" : ""
                }`}
              >
                ₹{p.price}
              </td>
            ))}
          </tr>

          {/* RAM */}
          <tr>
            <td className="border p-2">RAM</td>
            {list.map((p) => (
              <td
                key={p.id}
                className={`border p-2 ${
                  p.ram === bestRam ? "bg-green-200" : ""
                }`}
              >
                {p.ram} GB
              </td>
            ))}
          </tr>

          {/* Camera */}
          <tr>
            <td className="border p-2">Camera</td>
            {list.map((p) => (
              <td
                key={p.id}
                className={`border p-2 ${
                  p.camera === bestCamera ? "bg-green-200" : ""
                }`}
              >
                {p.camera} MP
              </td>
            ))}
          </tr>

          {/* Battery */}
          <tr>
            <td className="border p-2">Battery</td>
            {list.map((p) => (
              <td
                key={p.id}
                className={`border p-2 ${
                  p.battery === bestBattery ? "bg-green-200" : ""
                }`}
              >
                {p.battery} mAh
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Compare;