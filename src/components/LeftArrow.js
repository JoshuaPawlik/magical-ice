import React, { Component } from 'react';

const LeftArrow = (props) => {

  let styles = {
    color: 'blue'
  }

  return (
    <div onClick={props.previousSlide} className="backArrow" style={styles}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
