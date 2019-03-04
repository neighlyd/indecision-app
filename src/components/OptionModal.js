import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (


        <Modal
        isOpen={!!props.selectedOption}
        className="modal"
        closeTimeoutMS={200}
        contentLabel="Selected Option"        
        onRequestClose={props.handleClearSelectedOption}>        
            <h3 className="modal__title">Select Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
        </Modal>
);

export default OptionModal;