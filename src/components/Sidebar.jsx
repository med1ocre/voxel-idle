import React, { useState } from 'react';
import goldcoin from '../assets/media/icons/goldcoin.png';
import bankchest from '../assets/media/icons/bankchest.png';
import attack from '../assets/media/skills/attack/attack.png';
import strength from '../assets/media/skills/strength/strength.png';
import defence from '../assets/media/skills/defence/defence.png';
import hitpoints from '../assets/media/skills/hitpoints/hitpoints.png';
import settings from '../assets/media/icons/settings.png';
import completion from '../assets/media/icons/completion.png';
import statistics from '../assets/media/icons/statistics.png';
import leaderboard from '../assets/media/icons/leaderboard.png';
import woodcutting from '../assets/media/skills/woodcutting/woodcutting.png';

const Sidebar = ({ onSelectContent }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark ${isSidebarVisible ? '' : 'sidebar-hidden'}`} style={{ width: '280px', height: '100vh' }}>
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
                <img src={attack} style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Attack</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={strength} style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Strength</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={defence} style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Defence</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('combat')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={hitpoints} style={{ width: '1.5rem'}} alt="Strength Icon" />
                <span className="sidebar-item-title">Hitpoints</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
      </ul>



      <ul className="nav nav-pills flex-column">
        <div className="nav-main-heading font-weight-bold"><span>Non-Combat</span></div>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('woodcutting')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={woodcutting} style={{ width: '1.5rem'}} alt="Woodcutting Icon" />
                <span className="sidebar-item-title">Woodcutting</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(1 / 99)</span>
            </a>
        </li>
      </ul>



      <ul className="nav nav-pills flex-column">
        <div className="nav-main-heading font-weight-bold"><span>Other</span></div>
        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('completion')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={completion} style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Completion Log</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>(0.00%)</span>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('statistics')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={statistics} style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Statistics</span>
                </div>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('leaderboard')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Leaderboard</span>
                </div>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-light" style={{ display: 'flex', alignItems: 'center' }} onClick={() => onSelectContent('settings')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={settings} style={{ width: '1.5rem'}} alt="Attack Icon" />
                <span className="sidebar-item-title">Settings</span>
                </div>
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
