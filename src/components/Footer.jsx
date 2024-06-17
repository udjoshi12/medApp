const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_column">
                    <h3>Shop Categories</h3>
                    <a href="#">Medicine</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Supplements</a>
                    <a href="#">Personal Care</a>
                </div>
                <div className="footer_column">
                    <h3>Contact Us</h3>
                    <p>Email: contact@mediack.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Street, City, Country</p>
                </div>
                <div className="footer_column">
                    <h3>Follow Us</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <hr />
            <div className="copyright">
                &copy; 2024 Mediack Web Store. All rights reserved.
            </div>
        </footer> 
    )
}

export default Footer;