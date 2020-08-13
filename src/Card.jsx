import React from "react";
import web from '../src/images/img2.jpg'
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
  <div className = 'col-md-4 col-10 mx-auto'>
  <div className="card" >
  <img className="card-img-top" src= {props.imgsrc} alt={props.imgsrc}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text font-weight-bold ">{props.text}</p>
    <NavLink to="" className="btn btn-primary">Start Learning Today</NavLink>
  </div>
</div>
  </div>
  </>
  );
};

export default Card;
