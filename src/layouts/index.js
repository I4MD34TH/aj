import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';

import './index.css'

const Header = () => (
  <Navbar collapseOnSelect className={'header'} style={{'background':'transparent', 'border':'none', 'position':'absolute', 'z-index':'100', }}>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={'../images/logo.png'} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav pullRight className={'social-nav'}>
      <li><a href={'https://www.facebook.com/arslan.javed/'} target={'_blank'}><img src={'../images/fb-logo.png'} /></a></li>
      <li><a href={'https://twitter.com/Arslanjvd'} target={'_blank'}><img src={'../images/twitter-logo.png'} /></a></li>
      <li><a href={'https://www.instagram.com/arslanjaved/'} target={'_blank'}><img src={'../images/instagram-icon.png'} /></a></li>
    </Nav>
    <Navbar.Collapse>
      <Nav className={'main-nav'} pullRight style={{'margin-top':'5px', 'color': '#fff',}}>
        <li><Scrollchor to={'about'}>About</Scrollchor></li>
        <li><Scrollchor to={'mission'}>Mission</Scrollchor></li>
        <li><Scrollchor to={'contact'}>Get Connected</Scrollchor></li>
        <li><Scrollchor to={'quotes'}>Follow me</Scrollchor></li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

const Footer = () => (
  <section className={'footer'} style={{'background-color':'#343434', }}>
      <div className={'text-center news-letter'} style={{'color':'white', }}>
        <h1><strong>GET UPDATE VIA NEWSLETTER</strong></h1>
        <h3>Sign up to be the first to hear</h3>
        <div className={'subscription'}>
          <input type={'email'} className={'subscription-input'} placeholder={'Enter your Email'} />
          <button className={'subscription-btn'}><strong>SUBCRIBE</strong></button>
        </div>
      </div>
      <div className={'text-center news-letter-small'} style={{'color':'white', }}>
        <h1><strong>GET UPDATE VIA NEWSLETTER</strong></h1>
        <h3>Sign up to be the first to hear</h3>
        <div className={'subscription'}>
          <input type={'email'} className={'subscription-input'} placeholder={'Enter your Email'} />
          <button className={'subscription-btn'}><strong>SUBCRIBE</strong></button>
        </div>
      </div>
      <Grid className={'copy-right'}>
          <div className={'copy-right-logo'}>
            <img src={'images/footer-logo.png'} />
            <footer style={{'color':'#c4c4c4', }}>Copyright &copy; Agency21Pvt Ltd. All rights reserved.</footer>
          </div>
          <div className={'social'}>
              <a href={'https://www.facebook.com/arslan.javed/'} target={'_blank'}><img src={'../images/fb-icon.png'} style={{'height':'22px', 'padding-right':'15px', 'padding-bottom':'2px', }} /></a>
              <a href={'https://twitter.com/Arslanjvd'} target={'_blank'}><img src={'../images/twitter-icon.png'} style={{'height':'20px', 'padding-right':'15px',}} /></a>
              <a href={'https://www.instagram.com/arslanjaved/'} target={'_blank'}><img src={'../images/instagram.png'} style={{'height':'20px',}} /></a>
          </div>
      </Grid>
  </section>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Arslan Javed" meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }, ]}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
