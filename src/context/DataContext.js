import React, { useState, createContext } from "react";
import db from "../data/db";
import { toast } from "react-toastify";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState(db);
  const [qua, setQua] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const handleIncrementItem = (product, quantity) => {
    const checkProduct = cartItems.find((item) => item.id === product.id);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    if (checkProduct) {
      toast.success(`+${qua} product has been added to the cart!`, {
        position: toast.POSITION.TOP_LEFT,
      });
      const updateCart = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }

        return cartProduct;
      });

      setCartItems(updateCart);
    } else {
      product.quantity = quantity;
      const currentCartItems = [...cartItems, product];
      setCartItems(currentCartItems);
      toast.success(`${qua} product has been added to the cart!`, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  const handleCartItemQuyantity = (id, value) => {
    const getProduct = cartItems.find((item) => item.id === id);

    if (value === "inc") {
      const updateCart = cartItems.map((cartProduct) => {
        if (cartProduct.id === id) {
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + getProduct.price);
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      });

      setCartItems(updateCart);
    }

    if (value === "dec") {
      if (getProduct.quantity > 1) {
        const updateCart = cartItems.map((cartProduct) => {
          if (cartProduct.id === id) {
            setTotalQuantities(
              (prevTotalQuantities) => prevTotalQuantities - 1
            );
            setTotalPrice(
              (prevTotalPrice) => prevTotalPrice - getProduct.price
            );

            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        });

        setCartItems(updateCart);
      }
    }

    return;
  };

  const handleIncrement = () => {
    setQua((qua) => {
      if (qua + 1 > 10) return 10;
      return qua + 1;
    });

    // setQuantity(inc);
  };
  const handleDecrement = () => {
    const dec = qua - 1;
    if (dec < 1) {
      return toast.error("There must be at least 1 product !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    setQua(dec);
  };

  const handleDeleteItem = (item) => {
    console.log(item);

    const newCartItems = cartItems.filter((elem) => elem.id !== item.id);

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - item.quantity
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - item.price * item.quantity
    );

    setCartItems(newCartItems);
  };

  return (
    <DataContext.Provider
      value={{
        product,
        setProduct,
        qua,
        handleIncrement,
        handleDecrement,
        handleIncrementItem,
        cartItems,
        handleDeleteItem,
        handleCartItemQuyantity,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
