import React, { useState } from 'react';
import mines from '../assets/media/skills/delve/areas/mines.png'
import cavern from '../assets/media/skills/delve/areas/cavern.png'
import forest from '../assets/media/skills/delve/areas/forest.png'
import abyssaldepth from '../assets/media/skills/delve/areas/abyssaldepth.png'
import frozenhollow from '../assets/media/skills/delve/areas/frozenhollow.png'
import magmafissure from '../assets/media/skills/delve/areas/magmafissure.png'
import sulphurvents from '../assets/media/skills/delve/areas/sulphurvents.png'
import vaaloutpost from '../assets/media/skills/delve/areas/vaaloutpost.png'
import abyssalcity from '../assets/media/skills/delve/areas/abyssalcity.png'
import primevalruins from '../assets/media/skills/delve/areas/primevalruins.png'
import question from '../assets/media/icons/question.png'
import xp from '../assets/media/icons/xp.png'
import stopwatch from '../assets/media/icons/stopwatch.png'
import Modal from "react-bootstrap/Modal";
import convertToFractionFromDecimal from "../js/usefulfunctions"


const areas = [

    {
      name: 'Mines',
      level: 1,
      experience: 25,
      timeTo: 2000,
      image: mines,
      reward: [

        { name: 'Ether', chance: 1 , media: question , amount: 1},
        { name: 'Copper Ore', chance: 0.50 , media: question , amount: 2},

      ]

    },

    {
      name: 'Fungal Cavern',
      level: 15,
      experience: 37.5,
      timeTo: 2000,
      image: cavern,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Petrified Forest',
      level: 30,
      experience: 67.5,
      timeTo: 2000,
      image: forest,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Abyssal Depths',
      level: 45,
      experience: 100,
      timeTo: 2000,
      image: abyssaldepth,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Frozen Hollow',
      level: 60,
      experience: 175,
      timeTo: 2000,
      image: frozenhollow,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Magma Fissure',
      level: 75,
      experience: 250,
      timeTo: 2000,
      image: magmafissure,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Sulphur Vents',
      level: 90,
      experience: 380,
      timeTo: 2000,
      image: sulphurvents,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Vaal Outpost',
      level: 90,
      experience: 380,
      timeTo: 2000,
      image: vaaloutpost,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Abyssal City',
      level: 95,
      experience: 380,
      timeTo: 2000,
      image: abyssalcity,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

    {
      name: 'Primeval Ruins',
      level: 99,
      experience: 380,
      timeTo: 2000,
      image: primevalruins,
      reward: [

        { name: 'Ether', chance: 1 , media: question},
        { name: 'Juice', chance: 0.25 , media: question},

      ]
    },

  ];

const Delve = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedArea, setSelectedAreaRewards] = useState(null);

    const showModal = (area) => {
      setSelectedAreaRewards(area);
      setIsOpen(true);
    };

    const hideModal = () => {
      setSelectedAreaRewards(null); 
      setIsOpen(false);
    };
 
    return (
        
        <div>
        <Modal show={isOpen} onHide={hideModal} className="delve-modal">
          <Modal.Header>
            <Modal.Title>Drops</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedArea && (
              <ul style={{'listStyleType': 'none'}}>
                {selectedArea.reward.map((reward, index) => (
                  <li key={index}>
                  <span>
                    {reward.amount} x &nbsp;
                    <img
                      src={reward.media} 
                      alt="Reward"
                      style={{ width: '1rem', marginRight: '0.5rem' }}
                    />
                  </span>
                  {reward.name} ({convertToFractionFromDecimal(reward.chance)})
                </li>
                ))}
              </ul>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={hideModal}>OK</button>
          </Modal.Footer>
        </Modal>
        {/* Secondary Navbar */}
        <nav className="navbar navbar-dark bg-dark skill-navbar">
          <div className="container-fluid skill-progress-container ">
            {/* Progress Bar */}
            <div className="progress skill-progress-container" style={{ width: '100%' }}>
              <div
                className="progress-bar skill-progress"
                role="progressbar"
                style={{ width: `50%` }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
  
            {/* Player Woodcutting Info */}
            <div className="navbar-text">
              <strong>Delve Level: 1</strong> |
              <strong> Delve XP: 50</strong> |
              <strong> Current Tool: </strong>
            </div>
          </div>
        </nav>
  
        <div className="container-fluid area-container">
        <div className="row">
          {areas.map((area, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className={`card bg-dark text-white area`}>
                <div className="area-wrapper">
                  <img
                    src={question}
                    className='position-absolute top-0 end-0 me-2 mt-2'
                    style={{ width: '1rem', cursor: 'pointer' }}
                    onClick={() => showModal(area)} // Pass the area to showModal
                  />
                  
                  <h5 className="card-title">{area.name}</h5>

                  <div className="col-12 row justify-content-center gutters-tiny text-center area-info-row">
                    <div className="resize-32  m-2">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={xp} alt="" className="p-1 resize-32 slot-bg" />
                        <div className="font-size-sm text-white text-center">
                          <small className="badge-pill bg-secondary">{area.experience}</small>
                        </div>
                      </div>
                    </div>

                    <div className="resize-32 m-2">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={stopwatch} alt="" className="p-1 resize-32 slot-bg" />
                        <div className="font-size-sm text-white text-center">
                          <small className="badge-pill bg-secondary">{(area.timeTo / 1000).toFixed(2)}s</small>
                        </div>
                      </div>
                    </div>
                  </div>




                  
                  <img src={area.image} alt={area.name} className="card-img-top" />
                </div>
                <div className="card-body">
                  
                <div className="progress delve-progress-bg" style={{ width: '100%' }}>
                  <div
                    className="progress-bar delve-progress"
                    role="progressbar"
                    style={{ width: `0%` }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delve;
