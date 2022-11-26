import '../../style1.scss';
import '../../App.css';

import  ReactDOM  from "react-dom";
import { Backdrop } from "./Loader";
const Modal = ({onClose , children})=>{

    return(
        <>
        {
            ReactDOM.createPortal(
                <>
                <div className="modal2">
                    
                    <button type="close" id="closing" onClick={onClose}><i className="fa fa-times"></i> </button>
                    <div className="content">{children}</div>
                </div>
                <Backdrop onClose={onClose}></Backdrop>
               
                </> 
                , document.getElementById("modal-root")
            )
        }
        </>
    )
}
export default Modal;