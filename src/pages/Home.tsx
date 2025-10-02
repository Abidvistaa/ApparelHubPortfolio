import React from "react";
import "./home.css";
import homeright from "../images/home-right.jpg"; 
import homeleft from "../images/home-left.jpg"; 
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Home: React.FC = () => {

  useScrollAnimation("slide-left");
  useScrollAnimation("slide-right");

  return (
    <>
<div className="home-background">
  {/* Removed the <img> */}
  <h1 className="header-title">APPAREL HUB</h1>
</div>

<div className="belowBanner-section">
  <div className="belowBanner-text slide-left">
    <h2><span className="highlight-purple">Who we are?</span></h2>
    <h3>Over <span className="highlight-green">40</span> years of experience in the used American clothing market.</h3>
    <p>
      We are committed to contributing to a better planet by recycling
      textiles, shoes, toys, and other returned products, giving them a
      second chance to be used. At the same time, we contribute to the
      economies of thousands of families in other countries who have the
      opportunity to purchase our products at a lower price.
    </p>
    <p>
      In 2002, we established ourselves in Houston, Texas, as exporters of
      bales of used clothing, shoes, toys, and other returned products.
    </p>
    <p>Our average daily laundry sorting capacity is 70,000–90,000 pounds.</p>
    <p>
      We currently export to Guatemala, Honduras, Panama, Colombia and
      Ecuador.
    </p>
  </div>
  <div className="belowBanner-image">
    <img src={homeright} alt="homeright" width="300" height="365" />
  </div>
</div>


  <div className="text-image-section ">
  {/* Left: Image */}
  <div className="text-image-left ">
       <img src={homeleft} alt="homeright" width="300" height="570" />
  </div>

  {/* Right: Text */}
  <div className="text-image-right slide-right ">
    <h2>We care for the environment</h2>
    <p>
      We help reduce textile waste around the world by recycling.
      Each year, more than <span className="highlight-green">25 billion</span> pounds of clothing, shoes, accessories, hats, belts, blankets, and many other textiles are manufactured in the United States.
    </p>
    <p>
      The textile industry has imposed a fleeting and predatory fashion that requires us to renew all our garments from one season to the next.
    </p>
    <p>
      In the face of this unsustainable fashion that generates huge amounts of waste, a culture of efficient resource use, reusing and transforming garments, and extending the lifespan of our textiles is increasingly gaining ground.
    </p>
    <p>
      However, only <span className="highlight-green">15%</span> of textiles are recycled or donated, resulting in a total of 4 billion pounds of recovered and reused textiles.
    </p>
    <p>
      That's why we want to take advantage of textiles by preventing them from quickly becoming waste, and by giving them another chance to serve people in other countries.
    </p>
    <p>
      Our most common goal is to minimize the percentage of textiles that end up in landfills every day, preferably by giving them a second life through recycling and reuse, turning them into cleaning cloths or insulation materials.
    </p>
  </div>
</div>

    </>

  );
};

export default Home;
