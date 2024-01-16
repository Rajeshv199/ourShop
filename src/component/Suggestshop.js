import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Suggestshop = () => {
    const [suggestedShops, setSuggestedShops] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id: shopId } = useParams();

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await fetch(`http://localhost:5000/suggestshops/${shopId}`);
                if (response.ok) {
                    const responseData = await response.json();
                    setSuggestedShops(responseData.suggestions);
                } else {
                    console.error('Error fetching suggestions:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();

    }, [shopId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="home-section">
                <div className="home-main">
                    <h2>Suggested Shops</h2>
                    {suggestedShops.map((suggestedShop) => (
                        <div key={suggestedShop._id}>
                            <div className="home-main-1">
                                <div className="home-img">
                                    <img src={suggestedShop.image?.url} alt={suggestedShop.Name} />
                                </div>
                                <div className="home-heading">
                                    <div className="Star-menu">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalfAlt />
                                        <FaStarHalfAlt />
                                    </div>
                                    <h2>{suggestedShop.Name}</h2>
                                    <h4>You are Ready</h4>
                                    <Link to={`/shops/${suggestedShop._id}`}>
                                        <button className="shop-button-home" type="submit">View Shop</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Suggestshop;
