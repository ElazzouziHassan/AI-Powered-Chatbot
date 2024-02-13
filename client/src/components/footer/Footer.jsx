import React from 'react';
import './footer.scss'; 

function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AI-Powered ChatBot By @wizardy</p>
      </div>
    </footer>
  )

}

export default Footer;