import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  function addToWishlist(item) {
    setWishlistItems([...wishlistItems, item]);
  }

  function removeFromWishlist(item) {
    const updatedWishlistItems = wishlistItems.filter((wishlistItem) => wishlistItem !== item);
    setWishlistItems(updatedWishlistItems);
  }

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromWishlist(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h2>Pictures</h2>
      <ul>
        <li>
          Picture A - $500
          <button onClick={() => addToWishlist({ id: 1, name: 'Picture A', price: 50 })}>Add to Wishlist</button>
        </li>
        <li>
          Picture B - $750
          <button onClick={() => addToWishlist({ id: 2, name: 'Picture B', price: 75 })}>Add to Wishlist</button>
        </li>
        <li>
          Picture C - $1000
          <button onClick={() => addToWishlist({ id: 3, name: 'Picture C', price: 100 })}>Add to Wishlist</button>
        </li>
      </ul>
    </div>
  );
}

export default Wishlist;
