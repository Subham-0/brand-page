const Hero = () => {
    return (
        <div className="hero">
            <div className="section1">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="subhead">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="subbuttons">
                    <button>Shop Now</button>
                    <button className="catagory">Catagory</button>
                </div>
                <p>Also Available On</p>
                <div>
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="" />
                </div>
            </div>
            <div className="section2">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;