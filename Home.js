import Header from "../components/Header";


function Home() {
    return (
        <div className="home-page">
            <header className="hero">
                <h1>Welcome to DigitalFredo Shop</h1>
                <p>Your one-stop shop for the best products online!</p>
                <button className="shop-now-btn">Shop Now</button>
            </header>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/711n8IHpCpL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>$29.99</p>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61t2bYdHrYL._AC_SX569_.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>$49.99</p>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61YBs2I56YL._AC_SX569_.jpg" alt="Product 3" />
                        <h3>Product 3</h3>
                        <p>$19.99</p>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/71y9SgG-XaS._AC_SX522_.jpg" alt="Product 4" />
                        <h3>Product 4</h3>
                        <p>$39.99</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 DigitalFredo. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;