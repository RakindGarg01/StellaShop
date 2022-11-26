import '../../../App.css';
import { useState } from "react";
import Modal from '../../UI/Modal';

const ListItem = ({ data , onAdd , onRemove }) => {

    const [counter, setCounter] = useState(0);
    const [showModal, setshowModal] = useState(false);

    const IncreaseCounterByOne = event => {
        onAdd(data.id);
        event.stopPropagation();
        setCounter(counter + 1);
    }
    const DecreaseCounterByOne = event => {
        event.stopPropagation();

        if (counter === 0) {
            return;
        }
        if(counter == 1){
            onRemove(data.id);
        }

        setCounter(counter - 1);
    }

    const handleModal = () => {
        setshowModal(previousState => !previousState)
    }

    return (
        <>
            <div onClick={handleModal} className="item-card">
                <div className="inner">
                    <img className="img-fluid" src={`/images/${data.thumbnail}`} alt="product image" />
                    <div className="item-card-information">
                        <div className="pricing">
                            <span>Rs {data.discountedPrice}</span>&nbsp;
                            <small>
                                <strike>
                                    Rs {data.price}
                                </strike>
                            </small>
                        </div>
                        <div className="title">
                            {data.title}
                        </div>
                    </div>

                    {
                        counter < 1 ?
                            <button className="cart-add" onClick={IncreaseCounterByOne}>
                                <span>Add to Cart</span>
                                <i className="fas fa-cart-arrow-down fa-lg"></i>
                            </button>
                            :
                            <div className="cart-addon">
                                <button onClick={DecreaseCounterByOne}><span>-</span></button>
                                <span>{counter}</span>
                                <button onClick={IncreaseCounterByOne}><span>+</span></button>
                            </div>
                    }
                </div>
            </div>
            {showModal && <Modal onClose={handleModal}>
                <div className="item-card-modal">
                    <div className="img-wrap">
                        <img className="img-fluid" src={`/images/${data.thumbnail}`} alt="product image" />
                    </div>
                    <div className="meta">
                        <h3 id='title'>{data.title}</h3>
                        <div className="pricing">
                            <span className="Price">Rs {data.discountedPrice}</span>&nbsp;
                            <small>
                                <strike>
                                    Rs {data.price}
                                </strike>
                            </small>
                        </div>
                        <p className='details'>{data.description}</p>

                        {
                            counter < 1 ?
                                <button className="cart-add" onClick={IncreaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <i className="fas fa-cart-arrow-down fa-lg"></i>
                                </button>
                                :
                                <div className="cart-addon">
                                    <button onClick={DecreaseCounterByOne}><span>-</span></button>
                                    <span>{counter}</span>
                                    <button onClick={IncreaseCounterByOne}><span>+</span></button>
                                </div>
                        }
                    </div>
                </div>
            </Modal>}
        </>
    )

}
export default ListItem