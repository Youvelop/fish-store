import React from "react";
import AddFishForm from './AddFishForm'
import EditFishForm from "./EditFishForm"

class Inventory extends React.Component {
    render() {
        return <div className="inventory">
            <h2>Inventory</h2>
            <AddFishForm addFish={this.props.addFish} updateFish={this.props.updateFish} />
            <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} fish={this.props.fishes[key]} />)}
        </div>;
    }
}

export default Inventory;