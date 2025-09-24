import React, { useEffect, useState } from "react";
import "./incoming.css";

interface IncomingItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

const Incoming: React.FC = () => {
  const [data, setData] = useState<IncomingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="incoming-container">
      <h1>Incoming</h1>

      {loading && <p>Loading incoming data…</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <table className="incoming-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td id="category">{p.category}</td>
                  <td>{p.title}</td>
                  <td>${p.price.toFixed(2)}</td>
                  <td>
                    <img src={p.image} alt={p.title} className="product-img" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div id="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Incoming;
