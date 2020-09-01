import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';

/// this is called a functional component when declared with the ES6 arrow =>
//// usually functional components are presentational components (stateless and depend on
//// the props that are delivered to them by higher components)
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)

export default Header;
