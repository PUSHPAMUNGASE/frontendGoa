// // import React, { useState } from "react";
// // import jsPDF from "jspdf";
// // import "./BookNow.css"; // Ensure you have your CSS

// // export default function BookNow() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     package: "Goa Group Tour",
// //     checkInDate: "",
// //     checkOutDate: "",
// //     numberOfPeople: 1,
// //     peopleInfo: [{ name: "", email: "", age: "" }],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name !== "peopleInfo") {
// //       setFormData({ ...formData, [name]: value });
// //     } else {
// //       const { index, fieldName } = e.target.dataset;
// //       const updatedPeopleInfo = [...formData.peopleInfo];
// //       updatedPeopleInfo[index][fieldName] = value;
// //       setFormData({ ...formData, peopleInfo: updatedPeopleInfo });
// //     }
// //   };

// //   const handleNumberOfPeopleChange = (e) => {
// //     const numberOfPeople = parseInt(e.target.value, 10) || 1;
// //     const peopleInfo = Array.from({ length: numberOfPeople }, () => ({
// //       name: "",
// //       email: "",
// //       age: "",
// //     }));
// //     setFormData({ ...formData, numberOfPeople, peopleInfo });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const paymentAmount = formData.package === "Goa Group Tour" ? 7999 : 0;

// //     if (paymentAmount === 0) {
// //       alert("Please select a valid package.");
// //       return;
// //     }

// //     // Generate the confirmation PDF
// //     generatePDF({ ...formData, paymentAmount });
// //   };

// //   const generatePDF = (data) => {
// //     const doc = new jsPDF();

// //     doc.setFont("helvetica", "normal");
// //     doc.setFontSize(20);
// //     doc.text("Package Booking Confirmation", 20, 20);

// //     doc.setFontSize(12);
// //     doc.text(`Main Contact Name: ${data.name}`, 20, 40);
// //     doc.text(`Email: ${data.email}`, 20, 50);
// //     doc.text(`Phone: ${data.phone}`, 20, 60);
// //     doc.text(`Package: ${data.package}`, 20, 70);
// //     doc.text(`Check-in Date: ${data.checkInDate}`, 20, 80);
// //     doc.text(`Check-out Date: ${data.checkOutDate}`, 20, 90);
// //     doc.text(`Number of People: ${data.numberOfPeople}`, 20, 100);
// //     doc.text(`Payment Amount: ₹${data.paymentAmount}`, 20, 110);

// //     data.peopleInfo.forEach((person, index) => {
// //       const yOffset = 130 + index * 30;
// //       doc.text(`Person ${index + 1}:`, 20, yOffset);
// //       doc.text(`  Name: ${person.name}`, 20, yOffset + 10);
// //       doc.text(`  Email: ${person.email}`, 20, yOffset + 20);
// //       doc.text(`  Age: ${person.age}`, 20, yOffset + 30);
// //     });

// //     doc.save("booking_confirmation.pdf");
// //   };

// //   return (
// //     <div className="book-now-container">
// //       <h2>Package Booking Form</h2>
// //       <form onSubmit={handleSubmit} className="book-now-form">
// //         <div className="form-group">
// //           <label htmlFor="name">Full Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="phone">Phone Number</label>
// //           <input
// //             type="text"
// //             id="phone"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="checkInDate">Check-in Date</label>
// //           <input
// //             type="date"
// //             id="checkInDate"
// //             name="checkInDate"
// //             value={formData.checkInDate}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="checkOutDate">Check-out Date</label>
// //           <input
// //             type="date"
// //             id="checkOutDate"
// //             name="checkOutDate"
// //             value={formData.checkOutDate}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="numberOfPeople">Number of People</label>
// //           <input
// //             type="number"
// //             id="numberOfPeople"
// //             name="numberOfPeople"
// //             value={formData.numberOfPeople}
// //             onChange={handleNumberOfPeopleChange}
// //             min="1"
// //             required
// //           />
// //         </div>

// //         {Array.from({ length: formData.numberOfPeople }).map((_, index) => (
// //           <div key={index} className="people-info">
// //             <h4>Person {index + 1} Information</h4>
// //             <div className="form-group">
// //               <label htmlFor={`name${index}`}>Name</label>
// //               <input
// //                 type="text"
// //                 id={`name${index}`}
// //                 name="peopleInfo"
// //                 data-index={index}
// //                 data-field-name="name"
// //                 value={formData.peopleInfo[index].name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor={`email${index}`}>Email</label>
// //               <input
// //                 type="email"
// //                 id={`email${index}`}
// //                 name="peopleInfo"
// //                 data-index={index}
// //                 data-field-name="email"
// //                 value={formData.peopleInfo[index].email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor={`age${index}`}>Age</label>
// //               <input
// //                 type="number"
// //                 id={`age${index}`}
// //                 name="peopleInfo"
// //                 data-index={index}
// //                 data-field-name="age"
// //                 value={formData.peopleInfo[index].age}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>
// //         ))}

// //         <div className="form-group">
// //           <label htmlFor="package">Package</label>
// //           <select
// //             id="package"
// //             name="package"
// //             value={formData.package}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="Goa Group Tour">Goa Group Tour</option>
// //             <option value="Family Package Tour">Family Package Tour</option>
// //             <option value="Hinterland Package Tour">
// //               Hinterland Package Tour
// //             </option>
// //             <option value="Party de Goa Tour Package">
// //               Party de Goa Tour Package
// //             </option>
// //             <option value="North Goa Package">North Goa Package</option>
// //             <option value="South Goa Package">South Goa Package</option>
// //           </select>
// //         </div>

// //         <button type="submit" className="book-now-button">
// //           Submit Booking
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }




// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import axios from "axios";
// import "./BookNow.css";

// export default function BookNow() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     package: "Goa Group Tour",
//     checkInDate: "",
//     checkOutDate: "",
//     numberOfPeople: 1,
//     peopleInfo: [{ name: "", email: "", age: "" }],
//   });

//   const [totalAmount, setTotalAmount] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleNumberOfPeopleChange = (e) => {
//     const numberOfPeople = parseInt(e.target.value, 10) || 1;
//     setFormData({ ...formData, numberOfPeople });

//     // Fetch updated amount when number of people change
//     fetchTotalAmount(formData.package, numberOfPeople);
//   };

//   const fetchTotalAmount = async (selectedPackage, peopleCount) => {
//     try {
//       const response = await axios.post("http://localhost:8081bookings/calculateAmount", {
//         package: selectedPackage,
//         numberOfPeople: peopleCount,
//       });
//       setTotalAmount(response.data.totalAmount);
//     } catch (error) {
//       console.error("Error fetching total amount", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8081/bookings/confirmBooking", formData, {
//         responseType: "blob",
//       });

//       const pdfBlob = new Blob([response.data], { type: "application/pdf" });
//       const pdfUrl = URL.createObjectURL(pdfBlob);
//       const link = document.createElement("a");
//       link.href = pdfUrl;
//       link.setAttribute("download", "booking_confirmation.pdf");
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error("Error confirming booking", error);
//     }
//   };

//   return (
//     <div className="book-now-container">
//       <h2>Package Booking Form</h2>
//       <form onSubmit={handleSubmit} className="book-now-form">
//         <div className="form-group">
//           <label htmlFor="package">Select Package</label>
//           <select
//             id="package"
//             name="package"
//             value={formData.package}
//             onChange={(e) => {
//               handleChange(e);
//               fetchTotalAmount(e.target.value, formData.numberOfPeople);
//             }}
//           >
//             <option value="Goa Group Tour">Goa Group Tour</option>
//             <option value="Family Package Tour">Family Package Tour</option>
//             <option value="Hinterland Package Tour">Hinterland Package Tour</option>
//             <option value="Party de Goa Tour Package">Party de Goa Tour Package</option>
//             <option value="North Goa Package">North Goa Package</option>
//             <option value="South Goa Package">South Goa Package</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="numberOfPeople">Number of People</label>
//           <input
//             type="number"
//             id="numberOfPeople"
//             name="numberOfPeople"
//             value={formData.numberOfPeople}
//             onChange={handleNumberOfPeopleChange}
//             min="1"
//             required
//           />
//         </div>

//         <h3>Total Price: ₹{totalAmount}</h3>

//         <button type="submit" className="book-now-button">
//           Submit Booking
//         </button>
//       </form>
//     </div>
//   );
// }








BookNow.js


import React, { useState } from "react";
import "./BookNow.css";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    selectedTourDate: "",
    peopleInfo: [{ name: "", email: "", age: "" }],
  });

  const pricePerPerson = 3999;
  const totalCost = formData.numberOfPeople * pricePerPerson;

  const peakTouristDates = [
    "27 Dec - 03 Jan",
    "20 Dec - 27 Dec",
    "10 Nov - 17 Nov",
    "24 Dec - 31 Dec",
    "15 Aug - 22 Aug",
    "05 Jan - 12 Jan",
    "25 Oct - 01 Nov",
    "14 Feb - 21 Feb",
    "01 Dec - 08 Dec",
    "18 Mar - 25 Mar",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberOfPeopleChange = (e) => {
    const numberOfPeople = parseInt(e.target.value, 10) || 1;
    const peopleInfo = Array.from({ length: numberOfPeople }, () => ({
      name: "",
      email: "",
      age: "",
    }));
    setFormData({ ...formData, numberOfPeople, peopleInfo });
  };

  const handlePersonChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPeople = [...formData.peopleInfo];
    updatedPeople[index][name] = value;
    setFormData({ ...formData, peopleInfo: updatedPeople });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Check your internet connection.");
      return;
    }

    try {
      const amountInPaise = totalCost * 100; // Convert INR to paise

      console.log("Initiating Payment for amount (paise):", amountInPaise);

      const response = await fetch("http://localhost:8081/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise }), // Send amount in paise
      });

      const orderResponse = await response.json();
      console.log("Order Response:", orderResponse);

      if (!orderResponse || !orderResponse.order) {
        alert("Failed to create order. Please try again.");
        return;
      }

      const orderData = orderResponse.order;

      const options = {
        key: "rzp_test_6Kwx6KSaigJZ3Q", // Replace with your Razorpay Key ID
        amount: orderData.amount, // Razorpay expects amount in paise
        currency: orderData.currency,
        name: "Goa Tourism",
        description: "Tour Package Booking",
        order_id: orderData.id,
        handler: async (paymentResponse) => {
          console.log("Payment Successful:", paymentResponse);

          const verifyResponse = await fetch(
            "http://localhost:8081/api/payment/verify",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                paymentId: paymentResponse.razorpay_payment_id,
                orderId: paymentResponse.razorpay_order_id,
                signature: paymentResponse.razorpay_signature,
                bookingDetails: formData,
              }),
            }
          );

          const verifyResult = await verifyResponse.json();
          console.log("Verify Response:", verifyResult);

          alert("Payment Successful! Your booking is confirmed.");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#F37254" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    }
  };



  return (
    <div className="book-now-container">
      <h2>Package Booking Form</h2>
      <form className="book-now-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Select Tour Date</label>
          <select
            name="selectedTourDate"
            value={formData.selectedTourDate}
            onChange={handleChange}
            required
          >
            <option value="">Select a Tour Date</option>
            {peakTouristDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Number of People</label>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            min="1"
            required
          />
        </div>
        {formData.peopleInfo.map((person, index) => (
          <div key={index} className="people-info">
            <h4>Person {index + 1}</h4>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={(e) => handlePersonChange(e, index)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={person.email}
                onChange={(e) => handlePersonChange(e, index)}
                required
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={person.age}
                onChange={(e) => handlePersonChange(e, index)}
                required
              />
            </div>
          </div>
        ))}
        <div className="form-group">
          <label>Total Cost</label>
          <input type="text" value={`₹${totalCost}`} disabled />
        </div>
        <button
          type="button"
          onClick={handlePayment}
          className="book-now-button"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}