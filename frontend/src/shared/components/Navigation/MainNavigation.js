import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/BackDrop';

const MainNavigation = (props) => {
  const [drawwerIsOpen, setDrawwerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawwerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawwerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawwerIsOpen && <BackDrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawwerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
