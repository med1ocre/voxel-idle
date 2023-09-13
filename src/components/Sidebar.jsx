import React from 'react';
import goldcoin from '../assets/media/icons/goldcoin.png';
import bankchest from '../assets/media/icons/bankchest.png';

const Sidebar = ({ onSelectContent }) => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ width: '280px' , height: '100vh' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('shop')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={goldcoin} style={{ width: '1.5rem'}} alt="Shop Icon" />
                <span className="sidebar-item-title">Shop</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>0 coins</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('bank')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={bankchest} style={{ width: '1.5rem'}} alt="Bank Icon" />
                <span className="sidebar-item-title">Bank</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(0/10)</span>
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
