import '../App.css';
import '../style1.scss';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Cart from './Cart/Cart';
// import Cart1 from './Cart/Cart1';
import Contact from './Contact';
const Navbar1 = ({ count }) => {
    return (
        <>
            <nav>
                <div className="logo">Stella Shop</div>

                <ul>
                    <li>

                        <div className="input-group my-3">
                            <input type="text" id="input-field" className="form-control" placeholder="Search for Your Product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button id="search-btn" className="btn btn-outline-light mr-5" type="button"><i id="search-icon" className="fas fa-search fa-lg"></i></button>
                            </div>
                        </div>
                    </li>
                    <li> <a href='#'>Home</a></li>
                    <li> <a href='#'>Contact us</a></li>
                    {/* <li><Link to='/'>Home</Link></li>

                    <li><Link to='/ContactUs'>Contact</Link> */}
                    
                    {/* <BrowserRouter> 
                        <Routes>
                            <Route path="/ContactUs" element={<Contact />} />
                        </Routes>
                    </BrowserRouter>  */}
                    {/* </li> */}
                    <li>
                        <Cart count={count} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar1