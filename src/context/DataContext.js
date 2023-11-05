import React, { useState, createContext } from "react";
import db from "../data/db";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState(db);
  const [qua, setQua] = useState(1);
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const handleIncrementItem = (product, quantity) => {
    const checkProduct = cartItems.find(
      (item) => item.customerSize === size && item.title === product.title
    );
    const checkSize = cartItems.find((item) => item.customerSize === size);
    const updateCartNotFindSize = cartItems.filter(
      (cartProduct) => cartProduct.customerSize !== size
    );

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    if (updateCartNotFindSize && !checkSize) {
      const item = {
        ...product,
        id: uuidv4(),
        quantity: quantity,
        customerSize: size,
      };
      const currentCartItems = [...cartItems, item];
      setCartItems(currentCartItems);
      toast.success(`${qua} product has been added to the cart!`, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else if (checkProduct) {
      toast.success(`+${qua} product has been added to the cart!`, {
        position: toast.POSITION.TOP_LEFT,
      });
      const updateCart = cartItems.map((cartProduct) => {
        if (
          cartProduct.customerSize === size &&
          cartProduct.title === product.title
        ) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            customerSize: size,
          };
        }
        return cartProduct;
      });
      setCartItems(updateCart);
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
        setQua,
        size,
        setSize,
        handleIncrement,
        handleDecrement,
        handleIncrementItem,
        cartItems,
        setCartItems,
        handleDeleteItem,
        handleCartItemQuyantity,
        totalQuantities,
        setTotalQuantities,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
