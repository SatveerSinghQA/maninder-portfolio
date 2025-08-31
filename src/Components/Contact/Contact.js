import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const phoneNumber = "919815519896";
  const defaultMessage = "Hello! I would like to connect with you.";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatMessage = () => {
    const { name, email, message } = formData;
    return `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nMessage: ${message || defaultMessage}`;
  };

  const handleWhatsAppClick = () => {
    const messageToSend = formatMessage();
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(messageToSend)}`
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageToSend)}`;

    window.location.href = whatsappUrl;
    setSubmittedMessage(messageToSend);
  };

  const handleEmailClick = () => {
    const messageToSend = formatMessage();
    const mailtoLink = `mailto:manindersinghsingh605@gmail.com?subject=Hello&body=${encodeURIComponent(messageToSend)}`;
    window.open(mailtoLink, '_blank');
    setSubmittedMessage(messageToSend);
  };

  return (
    <section className="Contact-section">
      <div className="Con-container">
        <h1>THANK YOU ..</h1>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </form>

        <div className="contact-buttons">
          <button onClick={handleEmailClick}>Send by Email</button>
          <button onClick={handleWhatsAppClick}>Send by WhatsApp</button>
        </div>

        {submittedMessage && (
          <div className="message-display">
            <strong>Your message:</strong>
            <pre>{submittedMessage}</pre>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
