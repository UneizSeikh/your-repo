import React from 'react';
import { toast } from 'react-toastify';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartTableProps {
  items: CartItem[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartTable: React.FC<CartTableProps> = ({ items, onIncrement, onDecrement, onRemove }) => {
  return (
    <table className="cart-table">
      <tbody>
        {items.map((item) => {
          const total = (item.price * item.quantity).toFixed(2);
          return (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-price">Price Per Piece ${item.price}</div>
                </div>
              </td>
              <td>
                <div className="table_head">Qty</div>
                <div className="quantity-controls">
                  <button
                    onClick={() => {
                      if (item.quantity <= 1) {
                        toast.error("Quantity can't be less than 1");
                        return;
                      }
                      onDecrement(item.id);
                    }}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncrement(item.id)}>+</button>
                </div>
              </td>
              <td>
                <div className="table_head">Total</div>
                <div className="total">${total}</div>
              </td>
              <td>
                <div className="table_head">Action</div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
