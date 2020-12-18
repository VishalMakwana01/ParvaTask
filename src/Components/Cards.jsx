import React, { Component } from 'react';
import picture from "../Team_photos/AbhijeetKatte.jpg"

class Card extends Component {
    state = {
        name: this.props.info.name,
        about: this.props.info.about,
        photo: this.props.info.photo
    }
    render() {
        return (<div className="card-contents">
            <div className="image-wrapper">
                <img class="team-image" src={this.state.photo}></img>

                <div className="image-hidden">
                    <p className="img-head mt-3">Name</p>
                    <p className="img-content">{this.state.name}</p>
                </div>
                <div className="profile-content">
                    <header>{this.state.name}</header>
                    <p className="team-desc">
                        {this.state.about}
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Card;