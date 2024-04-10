import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Define state for the count

  
  const ProductData = [
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
  ];
  return (
    <>
      <Navbar counter={count} />
      <Herosection />
      <article className="product-container">
        {ProductData.map((product, index) => (
          <ProductSpace
            productDetails={product}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </article>
      <FooterComp />
    </>
  );
}



function Navbar({ counter }) {
  return (
    
    <nav className="nav navbar navbar-expand-lg bg-body-tertiary sticky-top">
      
      <article className="container-fluid js">
        
        <a className="navbar-brand" href="#">
          
          
          Shopping Cart
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <section className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-dark"
              onClick={(e) => e.preventDefault()}
            >
              <span className="cart-icon">
                <i className="fa fa-shopping-cart me-1"></i>
              </span>
              Cart 
              <span className="badge bg-dark text-white ms-1 rounded-pill ">
                {counter}
              </span>
            </button>
          </form>
        </section>
      </article>
    </nav>
  );
}



function Herosection() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        
        <div className="col-10 col-sm-8 col-lg-6">
          
          <img
            src="/cart.jpg" 
            className="d-block mx-lg-auto img-fluid" 
            alt="Shopping site" 
            width="700" 
            height="500" 
            loading="lazy" 
          />
        </div>
        
        <div className="col-lg-6">
          
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Welcome to Our Shopping Cart
          </h1>
          
          <p className="lead">
            Discover amazing deals and shop your favorite products!
          </p>
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Shop Now!
            </button>
            
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProductSpace({ productDetails, count, setCount }) {
  
  const [show, setShow] = useState(true); 

  
  function addCart() {
    setShow(!show); 
    setCount(count + 1); 
  }

  
  function removeCart() {
    setShow(!show); 
    setCount(count - 1); 
  }

  return (
    <section className="product">
      <div className="img-container">
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className="product-img"
        />
      </div>
      <div className="details-container">
        <p className="product-title">{productDetails.title}</p>
        <h3 className="product-price">${productDetails.price.toFixed(2)}</h3>
        <div className="product-rating">
          
          <StarRating product={productDetails} />{" "}
        </div>
      </div>
      
      {show ? (
        <div className="btn-container">
          <button className="btn btn-primary" onClick={addCart}>
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="btn-container">
          <button className="btn btn-danger" onClick={removeCart}>
            Remove From Cart
          </button>
        </div>
      )}
    </section>
  );
}


function StarRating({ product }) {
  const stars = [];

  const rating = Number(product.rating.rate);
  const ratingCount = Number(product.rating.count);

  
  const fullStars = Math.floor(rating);

  
  const hasHalfStar = rating % 1 !== 0;

  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
  }

  
  if (hasHalfStar) {
    stars.push(
      <i key="half" className="fa fa-star-half-o" aria-hidden="true"></i>
    );
  }

  
  for (let i = stars.length; i < 5; i++) {
    stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>);
  }

  return (
    <div className="star-rating">
      <span className="content-title">Rating:</span>{" "}
      <span className="content-star">{stars}</span>
      <span className="content-count"> ({ratingCount})</span>
    </div>
  );
}



function FooterComp() {
  
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top display-6 fw-bold">
        
        <div className="col-md-4 d-flex align-items-center">
          
          <span className="text-muted">© {currentYear} Shopping Cart Inc</span>
        </div>

        
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa fa-youtube-square" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
