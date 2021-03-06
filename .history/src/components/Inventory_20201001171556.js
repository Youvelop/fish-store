import React from "react";
import PropTypes from 'prop-types'
import AddFishForm from './AddFishForm'
import EditFishForm from "./EditFishForm"
import Login from "./Login"

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    };

    authenticate = (provider) => {
        alert(provider);
    }
    render() {
        return <Login authenticate={this.authenticate} />;
        return <div className="inventory">
            <h2>Inventory</h2>
            <AddFishForm addFish={this.props.addFish} />
            <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} />)}
        </div>;
    }
}

export default Inventory;