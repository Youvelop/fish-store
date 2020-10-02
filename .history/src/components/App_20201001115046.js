
import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    adFish = (fish) => {
        console.log('adding a fish');
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={100} />
                </div>
                <Order />
                <Inventory />
            </div>
        );
    }
}

export default App;