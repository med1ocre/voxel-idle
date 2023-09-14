import React, { useState } from 'react';
import NormalTree from '../assets/media/skills/woodcutting/trees/normaltree.png';
import OakTree from '../assets/media/skills/woodcutting/trees/oaktree.png';
import WillowTree from '../assets/media/skills/woodcutting/trees/willowtree.png';
import MapleTree from '../assets/media/skills/woodcutting/trees/mapletree.png';
import YewTree from '../assets/media/skills/woodcutting/trees/yewtree.png';
import MagicTree from '../assets/media/skills/woodcutting/trees/magictree.png';
import RedwoodTree from '../assets/media/skills/woodcutting/trees/redwoodtree.png';
import ElderTree from '../assets/media/skills/woodcutting/trees/eldertree.png';
import calculateRequiredXP from '../js/script.js'
import { stats } from '../data/player';



const trees = [
  {
    name: 'Normal Tree',
    level: 1,
    experience: 25,
    timeToCut: 2000,
    image: NormalTree,
  },
  {
    name: 'Oak Tree',
    level: 15,
    experience: 37.5,
    timeToCut: 2000,
    image: OakTree,
  },
  {
    name: 'Willow Tree',
    level: 30,
    experience: 67.5,
    timeToCut: 2000,
    image: WillowTree,
  },
  {
    name: 'Maple Tree',
    level: 45,
    experience: 100,
    timeToCut: 2000,
    image: MapleTree,
  },
  {
    name: 'Yew Tree',
    level: 60,
    experience: 175,
    timeToCut: 2000,
    image: YewTree,
  },
  {
    name: 'Magic Tree',
    level: 75,
    experience: 250,
    image: MagicTree,
    timeToCut: 2000,
  },
  {
    name: 'Redwood Tree',
    level: 90,
    experience: 380,
    image: RedwoodTree,
    timeToCut: 2000,
  },
  {
    name: 'Elder Tree',
    level: 90,
    experience: 380,
    image: ElderTree,
    timeToCut: 2000,
  },
];

const Woodcutting = () => {
    // Sample player woodcutting data (replace with actual data)
    const playerWoodcuttingLevel = stats.skill.woodcutting.level;
    const currentAxeEquipped = stats.skill.woodcutting.currentAxe;

    const progressPercentage = (stats.skill.woodcutting.currentXP / stats.skill.woodcutting.requiredXP) * 100;
    
    // Calculate progress percentage for the progress bar
    

    const [isCutting, setIsCutting] = useState(false);

    // Function to check for level up
    function checkForLevelUp() {
      
      const currentXP = stats.skill.woodcutting.currentXP;
      let currentLevel = stats.skill.woodcutting.level;
      let requiredXP = calculateRequiredXP(currentLevel);
      
      // Check for multiple level-ups if the player has gained a lot of XP
      while (currentXP >= requiredXP) {
        console.log("Level up!");
        
        // Level up the player
        currentLevel += 1;
        stats.skill.woodcutting.level = currentLevel;
        
        // Calculate the new required XP for the next level
        requiredXP = calculateRequiredXP(currentLevel);
        stats.skill.woodcutting.requiredXP = requiredXP;
      }
    }
    
    //FOR SOME REASON MY CHOPTREE WILL STACK AND DOUBLE XP GAINS

    const chopTree = (tree) => {
      const currTree = tree;
    
      const chopNextTree = () => {
        // Award the player with a log based on the tree type
        const logReward = getLogReward(currTree);
    
        // Update player's stats
        stats.coins += logReward.coins;
        stats.skill.woodcutting.currentXP += logReward.experience;
    
        // Check for level up
        checkForLevelUp();
    
        // Reset cutting state to allow cutting another tree
        setIsCutting(false);
    
        // Start chopping the next tree after a 2-second delay
        setTimeout(() => {
          const nextTreeIndex = (trees.indexOf(currTree) + 1) % trees.length; // Cycle through the tree list
          chopTree(trees[nextTreeIndex]);
        }, 2000);
      };
    
      if (!isCutting) {
        setIsCutting(true);
    
        setTimeout(() => {
          chopNextTree();
        }, tree.timeToCut);
      } else {
        // If already cutting, just update the chopping tree
        currTree = tree;
      }
    };
    
    

    const getLogReward = (tree) => {
      // Calculate log reward based on the tree type (you can customize this logic)
      const logReward = {
        experience: tree.experience,
      };
      return logReward;
    };

    return (
      <div>
        {/* Secondary Navbar */}
        <nav className="navbar navbar-dark bg-dark skill-navbar">
          <div className="container-fluid skill-progress-container ">
            {/* Progress Bar */}
            <div className="progress skill-progress-container" style={{ width: '100%' }}>
              <div
                className="progress-bar skill-progress"
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
              <strong>Woodcutting Level:</strong> {stats.skill.woodcutting.level} |
              <strong> Woodcutting XP:</strong> {stats.skill.woodcutting.currentXP} XP |
              <strong> Current Axe:</strong> {currentAxeEquipped}
            </div>
          </div>
        </nav>
  
        <div className="container-fluid tree-container">
        <div className="row">
          {trees.map((tree, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div
                className={`card bg-dark text-white tree ${isCutting ? 'disabled' : ''}`}
                onClick={() => chopTree(tree)}
              >
                <div className="tree-wrapper">
                  <img src={tree.image} alt={tree.name} className="card-img-top" style={{width : '7rem'}} />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{tree.name}</h5>
                  <p className="card-text">
                    Level: {tree.level}<br />
                    Experience: {tree.experience} XP <br />
                    Chop Time: {tree.timeToCut / 1000}s
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






