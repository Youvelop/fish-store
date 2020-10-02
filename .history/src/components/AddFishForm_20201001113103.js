import React from "react";

class AddFishForm extends React.Component {

    nameRef
    priceRef
    statusRef
    descRef
    imageRef

    createFish = e => {
        e.preventDefault();
        console.log('making a fish');
    }
    render() {
        return <div className="AddFishForm">

            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name" />
                <input name="price" priceRef={this.priceRef} type="text" placeholder="price" />
                <select name="status" statusRef={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="image" />
                <button type="submit">+ Add A Fish</button>
            </form>
        </div>;
    }
}

export default AddFishForm;