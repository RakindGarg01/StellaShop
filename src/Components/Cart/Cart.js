// import {useState} from "react"
// import Modal from "../UI/Modal"
const Cart = ({count})=>{

    // const [showModal , setShowModal] = useState(false)

    // const handleModal = ()=>{
    //     setShowModal(previousState => !previousState)
    // }

    return(
        
        <button  className="cart-container">
            <i className='fa fa-shopping-cart'></i>
            <span>{count}</span>
        </button>
        //  {
        //     showModal && 
        //     <Modal onclose={handleModal}>
        //         Cart Modal!!
        //     </Modal>
        // }
    
    )
}
export default Cart