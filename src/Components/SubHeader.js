import '../App.css';

const SubHeader = () => {
    return (
        <>
            <div className="filters">
                <button className="filter-options active">All</button>
                <button className="filter-options">Gift Cards</button>
                <button className="filter-options">Health, HouseHold & Personal Care</button>
                <button className="filter-options">Electronic Gadgets</button>
                <button className="filter-options">Mobiles &  Televisions</button>
                <button className="filter-options">Men's Fashion</button>
                <button className="filter-options">Sports & Fitness</button>
                <button className="filter-options">Beauty, Health & Grocery</button>
                <button className="filter-options">Bags & Luggages</button>

            </div>

            <div className="limited-time-section">
                <div className="content">
                    Limited Time Deals...
                </div>
                <div className="counter">

                </div>

        

            </div>
        </>
    )
}
export default SubHeader