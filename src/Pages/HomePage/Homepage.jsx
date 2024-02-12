import React from 'react'
import Logo from '../../assets/images/Logo.jpeg'
import './homepage.css'
import { Link } from 'react-router-dom'

export default function Homepage({user, logout}) {
  return (
      <div className='homepage'>
          <div className='homepage__left'>
              <h1 className='home_message'> Welcome{user && `, ${user.name}`} to the best super mart in town</h1>
              <p className='home_desc'>
                  We sell almost every grocery you can think of at very affordable prices
              </p>
              <div className="home__button-div">
                  <Link to='/products'>Shop Now</Link>
              </div>
          </div>
          <div className='homepage__right'>
              <img src={Logo} alt="" />
          </div>
          <div className='footer'>
              <div className="company_info">
                  Company Info
              </div>
              <table className="footer_nav">
                  <tr>
                      <td className="footer_navs-title">Pages</td>
                      <td className="footer_navs-title">Information</td>
                      <td className="footer_navs-title">Get in touch</td>
                  </tr>
                  <tr>
                      <td><Link to="/">Home</Link></td>
                      <td><Link>About Us</Link></td>
                      <td>Company Location</td>
                  </tr>
                  <tr>
                      <td><Link to="/products">Product</Link></td>
                      <td>Testimonials</td>
                      <td>Compnay email and number</td>
                  </tr>
                  <tr>
                        {
                          user ?
                              <td><button onClick={logout}>Logout</button></td>
                              :
                              <>
                                  <td><Link to="/signup">Sign Up</Link></td>
                                  <td><Link to='/signin'>Log In</Link></td>
                              </>      
                      }
                  </tr>
              </table>
          </div>
    </div>
  )
}
