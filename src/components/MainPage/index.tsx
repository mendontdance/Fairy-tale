import React from 'react';
import { DATA } from '../../configs/data';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const fairyTalesData = Object.values(DATA);
  const navigate = useNavigate();

  return (
    <div className="container">
      {fairyTalesData.map((fairyTale) => {
        return (
          <button type="button" key={fairyTale.name} onClick={() => navigate('/first-fairy-tale')}>
            {fairyTale.name}
          </button>
        );
      })}
    </div>
  );
};

export default MainPage;
