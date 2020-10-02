import React from "react";

class AddFishForm extends React.Component {
    render() {
        return <div className="AddFishForm">

            <form className="fish-edit">
                <input name="name " type="text" placeholder="name" />
                <input name="price " type="text" placeholder="price" />
                <select name="status" type="text" placeholder="status" >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" type="text" placeholder="desc" />
                <input name="image" type="text" placeholder="image" />
            </form>
        </div>;
    }
}

export default AddFishForm;