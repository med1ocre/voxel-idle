import React from 'react';
import goldcoin from '../assets/media/icons/goldcoin.png';
import bankchest from '../assets/media/icons/bankchest.png';


const Sidebar = ({ onSelectContent }) => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ width: '280px' , height: '100vh' }}>
      <ul className="nav nav-pills flex-column">
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
                <span style={{ marginLeft: 'auto' }}>0 / 10</span>
            </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column">
        <div className="nav-main-heading font-weight-bold"><span>Combat</span></div>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/skills/attack/attack.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Attack</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/skills/strength/strength.svg" style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Strength</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/skills/defence/defence.svg" style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Defence</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/skills/hitpoints/hitpoints.svg" style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Hitpoints</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
      </ul>



      <ul className="nav nav-pills flex-column">
        <div className="nav-main-heading font-weight-bold"><span>Non-Combat</span></div>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Attack</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
      </ul>



      <ul className="nav nav-pills flex-column">
        <div className="nav-main-heading font-weight-bold"><span>Other</span></div>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Completion Log</span>
                </div>
                
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Statistics</span>
                </div>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Leaderboard</span>
                </div>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Settings</span>
                </div>
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
