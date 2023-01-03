import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class MyNavLink extends Component {
    render() {
        return (
            // 展开props
            <NavLink activeClassName="yangshi" to="/about" {...this.props}/>
        );
    }
}

export default MyNavLink;
