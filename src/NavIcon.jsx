import React, { Fragment } from 'react';

const NavIcon = () => (
    <Fragment>
        <input 
            type="checkbox" 
            id="navi-toggle" className="checkbox"
        />
        <label 
            htmlFor="navi-toggle"
            className="button"
        >
            <span className="icon">&nbsp;</span>
        </label>
    </Fragment>
);

export default NavIcon;
