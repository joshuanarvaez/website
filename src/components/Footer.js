// import React from 'react';
// import { social } from "../data";
// import { MDBFooter } from 'mdb-react-ui-kit';

// const Footer = () => {
//   return (
//     < MDBFooter className='bg-light text-center text-white fixed-bottom'>
//       <footer>
//         <div className="social-links-container">
//           <ul className="social-icons">
//             {social.map((socialIcon) => {
//               const { id, url, icon } = socialIcon
//               return (
//                 <li key={id}>
//                   <a href={url}>{icon}</a>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//         <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           © 2020 Copyright:
//           <p className='text-white' href='https://mdbootstrap.com/'>
//             MDBootstrap.com
//           </p>
//         </div>
//       </footer>
//     </MDBFooter>
//   );
// }
// export default Footer;



// ****** OPTION 2 ***********

import React from 'react';
import {MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/footer.css'
const Footer = () => {
  return (<MDBFooter className='bg-light text-center text-white fixed-bottom'>
    <footer> 
  <div className='container p-4 pb-0'>
    <section className='mb-4'>
      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#55acee' }}
        href='https://twitter.com/JTrainV2'
        role='button'
        target="_blank"
        rel="noreferrer"
      >
        <MDBIcon className='icons' fab icon='twitter' />
      </a>

      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#0082ca' }}
        href='https://linkedin.com/in/joshua-narvaez'
        role='button'
        target="_blank"
        rel="noreferrer"
      >
        <MDBIcon className='icons' fab icon='linkedin-in' />
      </a>

      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#333333' }}
        href='https://github.com/joshuanarvaez'
        target="_blank"
        rel="noreferrer"
        role='button'
      >
        <MDBIcon className='icons' fab icon='github' />
      </a>
    </section>
  </div>
  <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2020 Copyright:
    <p className='text-white' href='https://mdbootstrap.com/'>
      MDBootstrap.com
    </p>
  </div>
  </footer>
</MDBFooter>
);
}
export default Footer;




