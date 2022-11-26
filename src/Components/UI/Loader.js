import '../../App.css';
import  ReactDOM  from 'react-dom';

export const Backdrop = props=>{
    const handleClick = () =>{
        if(props.onClose){
            props.onClose();
        }
    }
    return(
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}


const Loader = () => {
    return (
        ReactDOM.createPortal(
            <div className="loader">
            <div>
                <div className="circle-bounce">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="loading-title">Fetching Your Data</div>
            </div>
        </div> , document.getElementById("loader-root")
        )
    )
}

export default Loader;