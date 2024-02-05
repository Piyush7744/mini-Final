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
//             <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//             <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//             <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
//             <li><a href="#"><i className="fa fa-youtube"></i></a></li>
//             <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
//           </ul>
//         </div>
//         <div className="footer-bottom">
//           <p>copyright &copy; 2023 <a href="#">Smart Board using Hand Gesture</a>  </p>
//           <div className="footer-menu">
//             <ul className="f-menu">
//               <li><a href="/">Home</a></li>
//               <li><a href="/project">How to use</a></li>
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

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>Smart Board using Hand Gesture</h3>
          <p>Smart Board using Hand Gesture is technology where users can print or write anything on the board using their Hand Gestures.</p>
          <ul className="socials">
            <li><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2023 <a href="/">Smart Board using Hand Gesture</a></p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/project">How to use</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

