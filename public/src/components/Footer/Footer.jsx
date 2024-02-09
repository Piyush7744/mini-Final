// import React from 'react';
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div>
//       <footer>
//         <div className="footer-content">
//           <h3>Smart Board using Hand Gesture</h3>
//           <p>Smart Board using Hand Gesture is teachnology where user can print or write anything on the board using hsi/her Hand Gestures. </p>
//           <ul className="socials">
//             <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
//             <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
//             <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
//             <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
//             <li><Link to="#"><i className="fa fa-linkedin-square"></i></Link></li>
//           </ul>
//         </div>
//         <div className="footer-bottom">
//           <p>copyright &copy; 2023 <Link to="#">Smart Board using Hand Gesture</Link>  </p>
//           <div className="footer-menu">
//             <ul className="f-menu">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/project">How to use</Link></li>
//             </ul>
//           </div>
//         </div>

//       </footer>
//     </div>
//   )
// }

// export default Footer

// Updated Footer.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>Smart Board using Hand Gesture</h3>
          <p>Smart Board using Hand Gesture is technology where users can print or write anything on the board using their Hand Gestures.</p>
          <ul className="socials">
            <li><Link to="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link to="https://twitter.com"><i class="fa-brands fa-x-twitter"></i></Link></li>
            <li><Link to="https://plus.google.com"><i class="fa-brands fa-google-plus"></i></Link></li>
            <li><Link to="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></Link></li>
            <li><Link to="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2023 <Link to="/">Smart Board using Hand Gesture</Link></p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/project">How to use</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

