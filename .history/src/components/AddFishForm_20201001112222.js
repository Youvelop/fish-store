import React from "react";

class AddFishForm extends React.Component {

    createFish = e => {
        e.preventDefault();
        console.log('making a fish');
    }
    render() {
        return <div className="AddFishForm">

            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name " type="text" placeholder="name" />
                <input name="price " type="text" placeholder="price" />
                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" type="text" placeholder="desc" />
                <input name="image" type="text" placeholder="image" />
                <button type="submit">+ Add A Fish</button>
            </form>
        </div>;
    }
}

export default AddFishForm;