import React from 'react'

const Login = () => (
    <nav nav className="login" >
        <h2>Inventory Login</h2>
        <p>Signn in to manage your store's inventory</p>
        <button className="github" onclick={() => this.props.authenticate('Github')}>LOGIN WITH GITHUB</button>
        <button className="facebook" onclick={() => this.props.authenticate('Facebook')}>LOGIN WITH FACEBOOK</button>

    </nav>
);

export default Login;