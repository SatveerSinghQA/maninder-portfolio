import React from 'react';
import './Contact.css';

function Contact() {
  const phoneNumber = "919815519896";
  const message = "Hello! I would like to connect with you.";

  const handleWhatsAppClick = () => {
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="Contact-section">
      <div className="Con-container">
        <span className="Con-eyebrow">05 / CONTACT</span>
        <h1 className="Con-heading">Let's cut something great</h1>
        <p className="Con-sub">Reach out and I'll get back within a day.</p>

        <div className="Con-actions">
          
            <a className="Con-link"
            href="mailto:manindersinghsingh605@gmail.com?subject=Hello&body=I would like to connect with you."
            target="_blank"
            rel="noopener noreferrer"
          >
            manindersinghsingh605@gmail.com
          </a>

          <button onClick={handleWhatsAppClick} className="Con-btn">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;