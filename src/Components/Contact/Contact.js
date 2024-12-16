import React from 'react';
import Footer from '../Footer';
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
        <div className='page4Class'>
        <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:pratapanipraneetha@gmail.com">pratapanipraneetha@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/praneethapratapani" target="_blank">LinkedIn Profile</a></p>
        </section>
        <Footer />
        </div>
    </div>
  );
};

export default Contact;
