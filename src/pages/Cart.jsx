// import { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   addToCart,
//   decreaseQty,
//   deleteProduct,
// } from "../app/features/cart/cartSlice";

// const Cart = () => {
//   const { cartList } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     phoneNumber: "",
//   });
//   // middlware to localStorage
//   const totalPrice = cartList.reduce(
//     (price, item) => price + item.qty * item.price,
//     0
//   );
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     // if(CartItem.length ===0) {
//     //   const storedCart = localStorage.getItem("cartItem");
//     //   setCartItem(JSON.parse(storedCart));
//     // }
//   }, []);
//   const handleCheckout = () => {
//     // Implement checkout logic here
//     // Redirect to checkout page, or trigger payment process, etc.
//     setShowCheckoutForm(true);
//   };
//   return (
//     <section className="cart-items">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             {cartList.length === 0 && (
//               <h1 className="no-items product">No Items are add in Cart</h1>
//             )}
//             {cartList.map((item) => {
//               const productQty = item.price * item.qty;
//               return (
//                 <div className="cart-list" key={item.id}>
//                   <Row>
//                     <Col className="image-holder" sm={4} md={3}>
//                       <img src={item.imgUrl} alt="" />
//                     </Col>
//                     <Col sm={8} md={9}>
//                       <Row className="cart-content justify-content-center">
//                         <Col xs={12} sm={9} className="cart-details">
//                           <h3>{item.productName}</h3>
//                           <h4>
//                             ₹{item.price}.00 * {item.qty}
//                             <span> ₹{productQty}.00</span>
//                           </h4>
//                         </Col>
//                         <Col xs={12} sm={3} className="cartControl">
//                           <button
//                             className="incCart"
//                             onClick={() =>
//                               dispatch(addToCart({ product: item, num: 1 }))
//                             }
//                           >
//                             <i className="fa-solid fa-plus"></i>
//                           </button>
//                           <button
//                             className="desCart"
//                             onClick={() => dispatch(decreaseQty(item))}
//                           >
//                             <i className="fa-solid fa-minus"></i>
//                           </button>
//                         </Col>
//                       </Row>
//                     </Col>
//                     <button
//                       className="delete"
//                       onClick={() => dispatch(deleteProduct(item))}
//                     >
//                       <ion-icon name="close"></ion-icon>
//                     </button>
//                   </Row>
//                 </div>
//               );
//             })}
//           </Col>
//           <Col md={4}>
//             <div className="cart-total">
//               <h2>Cart Summary</h2>
//               <div className=" d_flex">
//                 <h4>Total Price :</h4>
//                 <h3> ₹{totalPrice}.00</h3>
//               </div>
//             </div>
//             {showCheckoutForm ? (
//               <div className="checkout-form">
//                 {/* Add your checkout form components here */}
//                 <form>
//                   <label htmlFor="name">Name:</label>
//                   <input type="text" id="name" name="name" />
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" id="email" name="email" />
//                   {/* Add more form fields as needed */}
//                   <button type="submit">Submit</button>
//                 </form>
//               </div>
//             ) : (
//               <div className="checkout-container">
//                 <button
//                   className="checkout-btn"
//                   onClick={handleCheckout}
//                   style={{
//                     backgroundColor: "#0f3460",
//                     color: "white",
//                     borderRadius: "15px",
//                     padding: "10px",
//                     border: "none",
//                     cursor: "pointer",
//                     marginLeft: "5px", // Adjust margin-left as needed
//                     marginRight: "5px", // Adjust margin-right as needed
//                   }}
//                 >
//                   Checkout
//                 </button>
//               </div>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    setShowSignupForm(true);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "9961898582";
    const messageTemplate = "GELLO PLUS";

    const message = `
      User Details:
      Name: ${formData.name} ${formData.lastName}
      Address: ${formData.address}, ${formData.city}, ${formData.state} - ${
      formData.zipCode
    }
      Phone Number: ${formData.phoneNumber}
      
      Product Details:
      ${cartList
        .map((item) => `${item.productName}: ₹${item.price} * ${item.qty}`)
        .join("\n")}
      
      Total Price: ₹${totalPrice}.00
    `;

    const apiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      messageTemplate + message
    )}`;

    window.open(apiUrl, "_blank");
  };

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ₹{item.price}.00 * {item.qty}
                            <span> ₹{productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => {
                              if (item.qty > 1) {
                                dispatch(decreaseQty(item));
                              }
                            }}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3> ₹{totalPrice}.00</h3>
              </div>
            </div>
            {showSignupForm ? (
              <div className="signup-container">
                <div className="left-container">
                  <h1>{/* <i className="fas fa-paw"></i> */}</h1>
                  <div className="puppy">
                    <img
                      alt="icon"
                      src="/images/gello-plus-main.png"
                      style={{ height: "30px" }}
                    />{" "}
                  </div>
                </div>
                <div className="right-container">
                  <header>
                    <h2></h2>
                    <div className="set">
                      <div className="pets-name">
                        <label htmlFor="pets-name">Name</label>
                        <input
                          type="text"
                          id="pets-name"
                          placeholder="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="pets-name">
                        <label htmlFor="pets-name">Address</label>
                        <input
                          type="text"
                          id="pets-name"
                          placeholder="address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="pets-name">
                        <label htmlFor="pets-name">Pincode</label>
                        <input
                          type="text"
                          id="pets-name"
                          placeholder="pincode"
                          value={formData.zipCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="pets-name">
                        <label htmlFor="pets-name">PhoneNumber</label>
                        <input
                          type="text"
                          id="pets-name"
                          placeholder="phonenumber"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                        <button
                          id="whatsapp"
                          onClick={handleWhatsApp}
                          className="whatsapp-button"
                        >
                          <i className="fab fa-whatsapp"></i> WhatsApp
                        </button>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
            ) : (
              <div className="checkout-container">
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  style={{
                    backgroundColor: "#0f3460",
                    color: "white",
                    borderRadius: "15px",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Checkout
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
