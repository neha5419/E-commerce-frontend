import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
export default function DesignerFurniture() {
  const [regular, setRegular] = useState(false);
  const [quality, setQuality] = useState(false);
  const[standard,setStandard]=useState(false);
  const[decormatch,setDecorMatch]=useState(false);
  function handleReg() {
    setRegular(!regular);
  }
  function handleQuality() {
    setQuality(!quality);
  }
  function handleStandard(){
   setStandard(!standard);
  }
  function handleDecor(){
   setDecorMatch(!decormatch);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/black.jpeg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          7 Reasons Why Should You Invest In Designer Furniture
        </p>

        <p className="home-lists">
          In a world where standardization often takes center stage, there is
          something profoundly alluring about owning designer furniture. It's
          not just about having a piece that stands out; it embodies uniqueness,
          quality, and personal expression, transforming your home into a
          reflection of your style and story. Let’s delve into the compelling
          reasons why luxury designer furniture is really worth it.
        </p>

        <p className="home-lists">1. BUILT TO LAST</p>
        <p className="list-details">
          As the old saying goes “ Choose quality, and you'll never regret the
          price”, is one of the main reasons why you should invest in designer
          furniture. When deciding between designer and mass-produced furniture,
          opting for the less expensive choice might seem like a smart way to
          save money initially. But keep in mind - lower quality means greater
          wear and tear, and the chances are it might need frequent replacement
          in the long run.
        </p>
        <p className="list-details">
          When you choose designer furniture, you're investing in longevity.
          These pieces are built with meticulous craftsmanship and high-quality
          materials, ensuring they stand the test of time, and passed down
          through generations.
        </p>

        <img src="./images/made-craftmen.webp" className="fabrics"></img>

        <p className="home-lists">2. A STATEMENT OF LUXURY AND UNIQUENESS</p>
        <p className="list-details">
          Designer furniture is often synonymous with exclusivity. Custom
          designer pieces are unique, being one-of-a-kind creations or limited
          editions. This exclusivity adds a layer of luxury and sophistication
          to your home, making your home furniture a true reflection of your
          refined taste. Your furniture becomes a conversation starter, a
          statement piece that speaks volumes about your appreciation for fine
          craftsmanship and design.
        </p>

        <img
          src="./images/designer_furniture_pieces.webp"
          className="fabrics"
        ></img>

        <p className="home-lists">3. EXPERIENCE EXCEPTIONAL QUALITY</p>
        <p className="list-details">
          Let’s admit it. It’s quite easy to tell if something looks cheap.
          Similarly, Good quality shows! The difference in quality between mass
          produced furniture and designer furniture is immediately apparent.
          It’s built by expert craftsmen, often by hand. From the stitching of
          the fabric to the smooth finish of the wood, every aspect of designer
          furniture tells your story.
        </p>

        <img src="./images/person_img.webp" className="fabrics"></img>

        <p className="home-lists">4. PERFECT FIT FOR YOUR SPACE</p>
        <p className="list-details">
          Custom furniture is designed with your specific needs in mind. Whether
          you need a <u>sofa that fits perfectly in your living room</u> or a{" "}
          <u>dining table that complements your kitchen's design</u>, custom
          furniture offers unmatched personalization. This ensures that each
          piece is not only functional but also feels cohesive and fits your
          lifestyle perfectly.
        </p>

        <img src="./images/beautiful_interior.webp" className="fabrics"></img>

        <p className="home-lists">
          5. RESEARCH AND CRAFTSMANSHIP TO BUILD FURNITURE THAT OUTLIVES TRENDS
        </p>
        <p className="list-details">
          When you invest in luxury designer furniture, you’re choosing
          countless hours of research, thoughtful design, and expert
          craftsmanship. Instead of following the trend, they are Trend-setters
          & get the spotlight! These pieces are crafted over months which makes
          them timeless, classic, and minimalist styles. The exceptional
          creative vision behind each piece means you're acquiring a unique work
          of art that stands out from the ordinary.
        </p>

        <img src="./images/dark_border_img.webp" className="fabrics"></img>
        <p className="home-lists">6. COMFORT DESIGNED JUST FOR YOU</p>
        <p className="list-details">
          Designer furniture often focuses on ergonomics and comfort, offering
          pieces that are designed to support your body and improve your overall
          well-being. From chairs that provide proper back support to sofas that
          are perfect for lounging, custom pieces are made with your comfort in
          mind, enhancing your quality of life.
        </p>

        <p className="home-lists">7. A PIECE OF YOUR LEGACY</p>
        <p className="list-details">
          Designer furniture carries a story and an emotional connection that
          factory-made items simply can’t match. These pieces are crafted
          specifically for you, often becoming treasured family heirlooms that
          are passed down through generations. They hold sentimental value and
          connect.
        </p>

        <img src="./images/bird_interior.webp" className="fabrics"></img>

        <p className="suit-head">FINAL THOUGHTS</p>
        <p className="home-setting">
          Investing in designer furniture is an investment in your home’s style,
          comfort, and longevity. It’s an opportunity to create a living space
          that not only looks stunning but also provides unmatched quality and
          comfort. At <u>Maanavi Homes</u>, we believe that your home deserves
          the very best, which is why we offer a range of designer furniture
          options that can transform your space into a work of art.
        </p>

        <button type="button" className="contact-us">
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              What sets custom designer furniture apart from regular furniture?
            </p>
            <button onClick={handleReg} className="plussub">
              {regular ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {regular && (
            <p className="fqa-ans">
              Custom designer furniture offers unmatched personalization,
              quality, and uniqueness, tailored specifically to your taste and
              needs. Unlike standard furniture, it undergoes countless hours of
              research, design planning, and expert craftsmanship, making it one
              of-a-kind.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How can I ensure the quality of custom furniture?</p>
            <button onClick={handleQuality} className="plussub">
              {quality ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {quality && (
              <p className="fqa-ans">
                You should choose reputable designers or artisans known for
                their craftsmanship and use of high-quality materials. At
                Maanavi Homes, we provide guarantee for all of our furniture!
                Our team guides you for the right care, and we always encourage
                our clients to reach out to us in case of any issues.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Is designer furniture more expensive than standard furniture?</p>
            <button onClick={handleStandard} className="plussub">
              {standard ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {standard && (
              <p className="fqa-ans">
                Designer furniture typically comes with a higher price tag due
                to its quality and exclusivity. However, it’s often considered a
                worthwhile investment because of its longevity and the unique
                character it brings to your space.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Can I customize designer furniture to match my home's decor?</p>
            <button onClick={handleDecor} className="plussub">
              {decormatch ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {decormatch && (
              <p className="fqa-ans">
                Yes, Absolutely! Many designer furniture pieces can be
                customized to suit your style and space. At Maanavi we create
                bespoke pieces where you choose from a range of materials,
                finishes, colors and dimensions to create a piece that aligns
                perfectly with your interior design.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
