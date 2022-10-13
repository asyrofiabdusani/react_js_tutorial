import React from "react";
import pic from "../img/pic.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Card = (props) => {
    return (
        <div className="container mt-3">
            <div className="card">
                <img src={pic} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <h6 className="card-title text-muted">
                        <del>{props.strip_price}</del>
                    </h6>
                    <h5 className="card-title">Rp {props.price}</h5>
                    <a href="#" className="btn btn-primary">
                        Add To Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
