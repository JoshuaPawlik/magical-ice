import React, { Component } from 'react';

const RightArrow = (props) => {

  let styles = {
    color: 'blue'
  }

  return (
    <div onClick={props.nextSlide} className="nextArrow" style={styles}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
