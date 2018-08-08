import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from "react-router-dom";
import LoadingDots from './LoadingDots';
const activeStyle = { color: 'orange' };

const Header = ({ loading }) => (

    <nav>
        <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        {" | "}
        <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
        {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
);

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;