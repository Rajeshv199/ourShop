
const API_BASE_URL = 'http://localhost:5000';

export const fetchCartDataFromServer = async (_id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/${_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Request URL:', `${API_BASE_URL}/api/cart/${_id}`);
      console.log('Response Status:', response.status);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch cart data: ${response.statusText}`);
      }
  
      const cartData = await response.json();
      return cartData;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  };
  