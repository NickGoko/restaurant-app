import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  // Define a function to handle the "Explore Menu" button click
  const handleExploreMenuClick = () => {
    // You can add functionality here, such as scrolling to the menu section
    // For example, you can use a library like 'react-scroll' to smoothly scroll to the menu
    // For now, let's just display an alert when the button is clicked.
    alert('Button Clicked! Add your custom functionality here.');
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
  Discover exquisite flavors and delightful dining experiences. Our carefully crafted menu offers a wide range of delectable dishes to satisfy your cravings. Join us for a memorable culinary journey.
</p>
        {/* Use an onClick handler for the button */}
        <button
          type="button"
          className="custom__button"
          onClick={handleExploreMenuClick}
        >
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        {/* Use 'alt' text that describes the image */}
        <img src={images.welcome} alt="Delicious Food" />
      </div>
    </div>
  );
};

export default Header;
