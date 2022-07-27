import React from 'react';
import {MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (<MDBFooter className='bg-light text-center text-white fixed-bottom'>
    <footer> 
  <div className='container p-4 pb-0'>
    <section className='mb-4'>
      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#55acee' }}
        href='https://twitter.com'
        role='button'
        target="_blank"
        rel="noreferrer"
      >
        <MDBIcon fab icon='twitter' />
      </a>

      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#0082ca' }}
        href='https://linkedin.com/in/joshua-narvaez'
        role='button'
        target="_blank"
        rel="noreferrer"
      >
        <MDBIcon fab icon='linkedin-in' />
      </a>

      <a
        className='btn btn-primary btn-floating m-1'
        style={{ backgroundColor: '#333333' }}
        href='https://github.com/joshuanarvaez'
        target="_blank"
        rel="noreferrer"
        role='button'
      >
        <MDBIcon fab icon='github' />
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

// Option 2, uncomment the following and import social from data.js

{/* Pull social links array from data.js and map*/}

{/* <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul> */}

// import { social } from "../data";


