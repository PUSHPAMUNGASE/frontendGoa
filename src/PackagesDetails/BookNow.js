import React, { useState } from "react";
import jsPDF from "jspdf";
import "./BookNow.css"; // Ensure you have your CSS

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Goa Group Tour",
    checkInDate: "",
    checkOutDate: "",
    numberOfPeople: 1,
    peopleInfo: [{ name: "", email: "", age: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "peopleInfo") {
      setFormData({ ...formData, [name]: value });
    } else {
      const { index, fieldName } = e.target.dataset;
      const updatedPeopleInfo = [...formData.peopleInfo];
      updatedPeopleInfo[index][fieldName] = value;
      setFormData({ ...formData, peopleInfo: updatedPeopleInfo });
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentAmount = formData.package === "Goa Group Tour" ? 7999 : 0;

    if (paymentAmount === 0) {
      alert("Please select a valid package.");
      return;
    }

    // Generate the confirmation PDF
    generatePDF({ ...formData, paymentAmount });
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.text("Package Booking Confirmation", 20, 20);

    doc.setFontSize(12);
    doc.text(`Main Contact Name: ${data.name}`, 20, 40);
    doc.text(`Email: ${data.email}`, 20, 50);
    doc.text(`Phone: ${data.phone}`, 20, 60);
    doc.text(`Package: ${data.package}`, 20, 70);
    doc.text(`Check-in Date: ${data.checkInDate}`, 20, 80);
    doc.text(`Check-out Date: ${data.checkOutDate}`, 20, 90);
    doc.text(`Number of People: ${data.numberOfPeople}`, 20, 100);
    doc.text(`Payment Amount: ₹${data.paymentAmount}`, 20, 110);

    data.peopleInfo.forEach((person, index) => {
      const yOffset = 130 + index * 30;
      doc.text(`Person ${index + 1}:`, 20, yOffset);
      doc.text(`  Name: ${person.name}`, 20, yOffset + 10);
      doc.text(`  Email: ${person.email}`, 20, yOffset + 20);
      doc.text(`  Age: ${person.age}`, 20, yOffset + 30);
    });

    doc.save("booking_confirmation.pdf");
  };

  return (
    <div className="book-now-container">
      <h2>Package Booking Form</h2>
      <form onSubmit={handleSubmit} className="book-now-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            min="1"
            required
          />
        </div>

        {Array.from({ length: formData.numberOfPeople }).map((_, index) => (
          <div key={index} className="people-info">
            <h4>Person {index + 1} Information</h4>
            <div className="form-group">
              <label htmlFor={`name${index}`}>Name</label>
              <input
                type="text"
                id={`name${index}`}
                name="peopleInfo"
                data-index={index}
                data-field-name="name"
                value={formData.peopleInfo[index].name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`email${index}`}>Email</label>
              <input
                type="email"
                id={`email${index}`}
                name="peopleInfo"
                data-index={index}
                data-field-name="email"
                value={formData.peopleInfo[index].email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`age${index}`}>Age</label>
              <input
                type="number"
                id={`age${index}`}
                name="peopleInfo"
                data-index={index}
                data-field-name="age"
                value={formData.peopleInfo[index].age}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="package">Package</label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
          >
            <option value="Goa Group Tour">Goa Group Tour</option>
            <option value="Family Package Tour">Family Package Tour</option>
            <option value="Hinterland Package Tour">
              Hinterland Package Tour
            </option>
            <option value="Party de Goa Tour Package">
              Party de Goa Tour Package
            </option>
            <option value="North Goa Package">North Goa Package</option>
            <option value="South Goa Package">South Goa Package</option>
          </select>
        </div>

        <button type="submit" className="book-now-button">
          Submit Booking
        </button>
      </form>
    </div>
  );
}
