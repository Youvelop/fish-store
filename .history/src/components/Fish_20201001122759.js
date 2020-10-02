
import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";

        return <li className="single-fish">Fish</li>
    }
}

export default Fish;