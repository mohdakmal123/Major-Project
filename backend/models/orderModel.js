// Model.js
import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility (important for screen readers)
Modal.setAppElement('#root');

const Model = ({ isOpen, onRequestClose, title, content }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default Model;
