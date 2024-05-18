import React, { useState } from 'react';

function Payment() {
  const [price, setPrice] = useState(250); // Default price set to 250 rupees
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFertilizer, setSelectedFertilizer] = useState('1');

  const handleFertilizerChange = (event) => {
    const selectedFertilizer = event.target.value;
    setSelectedFertilizer(selectedFertilizer);
    setPrice(250); // Resetting price to 250 rupees for all fertilizers
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    setPrice(250 * newQuantity); // Calculating new price based on quantity
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateForm = () => {
    if (!name.trim() || !email.trim()) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  return (
    <div className="container marketing">
      <div className="box-inner-2">
        <div>
          <p className="fw-bold">Payment Details</p>
          <p className="dis mb-3">Complete your purchase by providing your payment details</p>
        </div>
        <form>
          <div className="mb-3">
            <p className="dis fw-bold mb-2">Name</p>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <p className="dis fw-bold mb-2">Email Address</p>
            <input
              className="form-control"
              type="email"
              placeholder="Example 'example@gmail.com'"
              value={email}
              onChange={handleEmailChange}
            />
            <br />
          </div>
          <p className="dis fw-bold mb-3">Select Fertilizer</p>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedFertilizer}
            onChange={handleFertilizerChange}
          >
            {/* Options for fertilizer selection */}
          </select>
          <div>
            <p className="dis fw-bold mb-2">Quantity</p>
            <input
              className="form-control"
              type="number"
              placeholder="Example '1'"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <p className="dis fw-bold mb-2">Card details</p>
          {/* Input fields for card details */}
          <div className="my-3 cardname">
            <p className="dis fw-bold mb-2">Cardholder name</p>
            <input className="form-control" type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="address">
            <p className="dis fw-bold mb-3">Billing address</p>
            {/* Input fields for billing address */}
          </div>
          <div className="d-flex flex-column dis">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p>Subtotal</p>
              <p><span className="fas fa-dollar-sign"></span>{price}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="fw-bold">Total</p>
              <p className="fw-bold"><span className="fas fa-dollar-sign"></span>{price}</p>
            </div>
            {/* Pay button wrapped in anchor tag for redirection */}
            <a href="https://buy.stripe.com/test_28ocNbgUDgcadkQbIJ" className="btn btn-primary mt-2">
              Pay<span className="fas fa-dollar-sign px-1"></span>{price}rs
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
