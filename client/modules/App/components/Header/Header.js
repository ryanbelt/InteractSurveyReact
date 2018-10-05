import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header(props, context) {

  return (
    <nav className={"navbar navbar-inverse"}>
      <div className="container-fluid" style={{paddingLeft: 30, paddingRight: 30}}>

          <ul className="nav navbar-nav navbar-right">
            <li><a role="button" onClick={props.goToHome}>Home</a></li>
          </ul>
      </div>
    </nav>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
};

export default Header;
