import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => (
    <nav nav className="login" >
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onclick={() => props.authenticate('Github')}>LOGIN WITH GITHUB</button>
        <button className="facebook" onclick={() => props.authenticate('Facebook')}>LOGIN WITH FACEBOOK</button>
    </nav>
);
Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;