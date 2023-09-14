import React from 'react';

const trees = [
  {
    name: 'Normal Tree',
    level: 1,
    experience: 25,
    image: 'tree1.png',
  },
  {
    name: 'Oak Tree',
    level: 15,
    experience: 37.5,
    image: 'tree2.png',
  },
  {
    name: 'Willow Tree',
    level: 30,
    experience: 67.5,
    image: 'tree3.png',
  },
  {
    name: 'Maple Tree',
    level: 45,
    experience: 100,
    image: 'tree4.png',
  },
  {
    name: 'Yew Tree',
    level: 60,
    experience: 175,
    image: 'tree5.png',
  },
  {
    name: 'Magic Tree',
    level: 75,
    experience: 250,
    image: 'tree6.png',
  },
  {
    name: 'Redwood Tree',
    level: 90,
    experience: 380,
    image: 'tree7.png',
  },
  {
    name: 'Elder Tree',
    level: 90,
    experience: 380,
    image: 'tree8.png',
  },
];

const Woodcutting = () => {
    // Sample player woodcutting data (replace with actual data)
    const playerWoodcuttingLevel = 50;
    const playerWoodcuttingXP = 15000;
    const currentAxeEquipped = 'Rune Axe';
  
    // Calculate progress percentage for the progress bar
    const maxXP = 20000; // Replace with the maximum XP for the woodcutting skill
    const progressPercentage = (playerWoodcuttingXP / maxXP) * 100;
  
    return (
      <div>
        {/* Secondary Navbar */}
        <nav className="navbar navbar-dark bg-dark skill-navbar">
          <div className="container-fluid skill-progress-container">
            {/* Progress Bar */}
            <div className="progress skill-progress" style={{ width: '100%' }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progressPercentage}%` }}
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
  
            {/* Player Woodcutting Info */}
            <div className="navbar-text">
              <strong>Woodcutting Level:</strong> {playerWoodcuttingLevel} |
              <strong> Woodcutting XP:</strong> {playerWoodcuttingXP} XP |
              <strong> Current Axe:</strong> {currentAxeEquipped}
            </div>
          </div>
        </nav>
  
        <div className="container-fluid tree-container">
        <div className="row">
          {trees.map((tree, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              {/* Adjust the column class names here based on your requirements */}
              <div className="card bg-dark text-white">
                <img src={tree.image} alt={tree.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{tree.name}</h5>
                  <p className="card-text">
                    Level: {tree.level}<br />
                    Experience: {tree.experience} XP
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Woodcutting;






