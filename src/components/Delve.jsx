import React from 'react';

const areas = [
    {
      name: 'Area 1',
      level: 1,
      experience: 25,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 2',
      level: 15,
      experience: 37.5,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 3',
      level: 30,
      experience: 67.5,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 4',
      level: 45,
      experience: 100,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 5',
      level: 60,
      experience: 175,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 6',
      level: 75,
      experience: 250,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 7',
      level: 90,
      experience: 380,
      timeTo: 2000,
      image: '',
    },
    {
      name: 'Area 8',
      level: 90,
      experience: 380,
      timeTo: 2000,
      image: '',
    },
  ];

const Delve = () => {
 
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
  
        <div className="container-fluid tree-container">
        <div className="row">
          {areas.map((area, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div
                className={`card bg-dark text-white tree`}
              >
                <div className="tree-wrapper">
                  <img src={area.image} alt={area.name} className="card-img-top" style={{width : '7rem'}} />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{area.name}</h5>
                  <p className="card-text">
                    Level: {area.level}<br />
                    Experience: {area.experience} XP <br />
                    Delve Time: {area.timeTo / 1000}s
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

export default Delve;
