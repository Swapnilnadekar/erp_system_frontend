import React from "react";
import { useEffect } from "react";
import axios from "axios";
import logo from "../../ERP.png";
import Header from "../Components/Header/Header";

const Fee = () => {
  useEffect(() => {
    displayRazorpay();
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const result = await loadRazorpay();

    if (!result) {
      alert("Some error occured");
      return;
    }

    const res = await axios.post("http://localhost:2000/erp/razorpay");
    console.log(res);

    const options = {
      key: process.env.REACT_RAZOR_KEY_ID,
      amount: res.data.result.amount,
      currency: res.data.result.currency,
      name: "ERP System",
      description: "Test Transaction",
      image: { logo },
      order_id: res.data.result.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject);
    paymentObject.open();
  };

  return (
    <>
      <Header />
    </>
  );
};
export default Fee;
