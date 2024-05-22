import React, { useState, useEffect } from 'react';
import Script from "next/script";

const Paymentpage = () => {
  const allowedServices = ["Social Media Management", "Graphic Designing", "Content Writing", "Business Management", "Web Developing"];
  const timePeriods = ["1 Month", "3 Months", "7 Months"];

  const [data, setData] = useState({
    email: "",
    phoneno: "",
    name: "",
    address: "",
    service: "Social Media Management",
    timeperiod: "1 Month",
    amount: 10000
  });

  useEffect(() => {
    setPrice(data.service, data.timeperiod);
  }, []);

  const setPrice = (service, timeperiod) => {
    let amount = 0;
    switch (timeperiod) {
      case "3 Months":
        amount = 25000;
        break;
      case "7 Months":
        amount = 50000;
        break;
      default:
        amount = 10000;
        break;
    }
    setData(prevData => ({
      ...prevData,
      amount: amount
    }));
  };

  const handleServiceChange = (e) => {
    const newService = e.target.value;
    setData(prevData => ({
      ...prevData,
      service: newService
    }));
    setPrice(newService, data.timeperiod);
  };

  const handleTimePeriodChange = (e) => {
    const newTimePeriod = e.target.value;
    setData(prevData => ({
      ...prevData,
      timeperiod: newTimePeriod
    }));
    setPrice(data.service, newTimePeriod);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validation = async (e) => {
    e.preventDefault();
    console.log(data);

    if (data.phoneno.length !== 10 || isNaN(data.phoneno)) {
      alert("Enter a valid phone number");
      return;
    }

    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        if (window.Razorpay) {
          const options = getRazorpayOptions(result);
          const rzp = new window.Razorpay(options);
          rzp.open();

          rzp.on('payment.failed', function (response) {
            console.error(response.error);
            alert("Payment failed. Please try again.");
          });
        } else {
          console.error("Razorpay SDK not loaded.");
          alert("Razorpay SDK not loaded. Please refresh the page and try again.");
        }
      } else {
        console.error("Error:", result.error);
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const getRazorpayOptions = (result) => {
    return {
      key_id: "rzp_live_lgkCP2NE2gYftG",
      name: result.name,
      currency: result.currency,
      amount: result.amount,
      order_id: result.id,
      description: "Payment for service",
      image: "https://chirag713.github.io/landing-page/img/logo.png",
      handler: function (response) {
        alert("Payment successful!");
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phoneno,
      },
      notes: {
        address: "BasicBrush Studios"
      },
      theme: {
        color: "#3399cc",
      }
    };
  };

  return (
    <div className='main-payment'>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <div className="form-container">
        <form onSubmit={validation}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phoneno" value={data.phoneno} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={data.address} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="services">Choose your Service:</label>
            <select
              id="services"
              name="service"
              onChange={handleServiceChange}
              value={data.service}
            >
              {allowedServices.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="timeperiod">Select the number of months:</label>
            <select
              id="timeperiod"
              name="timeperiod"
              onChange={handleTimePeriodChange}
              value={data.timeperiod}
            >
              {timePeriods.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dynamicValue">Total amount:</label>
            <input
              type="number"
              id="dynamicValue"
              value={data.amount}
              readOnly
            />
          </div>
          <div className="form-group flex">
            <button type="submit">Pay {data.amount}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paymentpage;
