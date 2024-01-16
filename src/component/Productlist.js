import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/productlist.css';

function Productlist() {
  const [data, setData] = useState([]);
  const { adminId } = useParams();
  console.log(data);
  console.log(adminId);

  const fetchProducts = async () => {
    try {
      if (!adminId) {
        console.error('Product ID is undefined');
        return;
      }

      const response = await fetch(`http://localhost:5000/viewproducts/${adminId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Error fetching product data:', response.statusText);
        return;
      }

      const responseData = await response.json();
      console.log(responseData.shops);
      setData(responseData.shops);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/deleteproduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update the product list after deletion
        fetchProducts();
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, [adminId]);

  return (
    <div className="productlist-1">
      <div className="productlist-item-1">
        <h1 className="productlist-heading-1">Productlist</h1>

        {Array.isArray(data) && data.length > 0 ? (
          data.map((product, index) => (
            <div key={index} className="Shop-sndsections-1">
              <div className="Shop-sndsection-1">
                <div className="shop-sndsection-1-img">
                  <img src={product.image?.url} alt={product.title} />
                </div>
                <div className="shop-title-1">
                  <h3>{product.name}</h3>
                  <p>
                    MRP: ₹<del>{product.strikeprice}</del>
                  </p>
                  <h2>Special price: ₹{product.price}</h2>
                  <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                  <button >Edit</button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Productlist;
