
import React, { useEffect } from 'react';
import '../assets/styles/modale.css';

const Modal = ({ children, title, classWidth, ButtonText, Toggle, toggle, handleCreateClick }) => {
  useEffect(() => {
    if (toggle) {
      document.body.classList.add('modal-open');
      document.body.style.paddingRight = '17px';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '0';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '0';
    };
  }, [toggle]);

  return (

    <>
      <div className=' model-box '>
       { /*<button type="button" className="btn btn-info text-white" onClick={handleCreateClick}>
          <i className="fa fa-plus"></i> {ButtonText}
  </button>*/}
        <div className={toggle ? "modal  fade show d-block light-bg " : "modal fade bd-example-modal-lg"} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={`modal-dialog ${classWidth}`} role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">{title}</h3>
                <button type="button" className="close" onClick={Toggle}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body position-relative model_cstm_box">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;


