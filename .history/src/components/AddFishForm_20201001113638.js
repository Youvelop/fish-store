import React from "react";

class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        console.log(this.nameRef.value.value);
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