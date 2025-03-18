import { useState } from "react";
import "../css/DiningDesc.css";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function DressTable() {
  const [custom, setCustom] = useState(false);
  const [smallStore, setSmallStore] = useState(false);
  const [design, setDesign] = useState(false);
  const [functional, setFunctional] = useState(false);
  const[tips,setTips]=useState(false);
  const navigate=useNavigate();
  function handleCustom() {
    setCustom(!custom);
  }

  function handleStore() {
    setSmallStore(!smallStore);
  }

  function handleDesign() {
    setDesign(!design);
  }
  function handleNavigate(){
    navigate("/contactus");
  }

  function handleFunction() {
    setFunctional(!functional);
  }

  function handleTips(){
    setTips(!tips);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/dress-table.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          Unlocking the Potential: How Custom Furniture Transforms Small Living
          Spaces
        </p>

        <p className="dine-desc">
          Contrary to the popular belief - Living in a smaller space doesn’t
          mean sacrificing style and functionality. In fact, it’s an opportunity
          to get creative and make the most out of every inch. Custom furniture
          becomes the unsung hero in transforming compact living areas into
          stylish, organised havens.
        </p>
        <p className="dine-desc">
          Keep reading as we explore how Maanavi Homes’ custom furniture can
          unlock the potential of small living spaces, turning limitations into
          design opportunities.
        </p>

        <img src="./images/sun-rays.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">1. TAILORED DIMENSIONS FOR PERFECT FIT</p>
          <p className="list-details">
            The key to making a small space work is utilising every nook and
            corner effectively. Maanavi Homes’ custom furniture allows you to
            tailor the dimensions of each piece to fit your space seamlessly.
            Say goodbye to awkward gaps or oversized furniture that overwhelms
            the room—customization ensures a perfect fit, maximising both floor
            and wall space. This personalized approach allows homeowners to
            incorporate their style and preferences while making the most of
            their living space.
          </p>
          <br></br>
          <br></br>
          <p className="home-lists">
            2. MULTI-FUNCTIONAL PIECES FOR SMART STORAGE SOLUTIONS
          </p>
          <p className="list-details">
            Clutter is the enemy of small spaces, and small spaces often require
            furniture to wear multiple hats. Custom furniture from Maanavi Homes
            are designed with functionality in mind, offering clever storage
            solutions and versatile designs. Discover coffee tables that convert
            into dining tables or ottomans with hidden storage compartments,
            proving that every piece can serve a dual purpose keeping everything
            organised without compromising on style.
          </p>
        </div>

        <img src="./images/ottoman_storage.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">
            3. REFLECTING YOUR STYLE IN LIMITED SPACE
          </p>
          <p className="list-details">
            Your personality should shine, regardless of the size of your living
            space. Maanavi Homes’ custom furniture allows you to express your
            unique style even in the cosiest of corners. From choosing a custom
            colour palette to selecting materials and textures that reflect your
            taste, customization ensures that every piece tells a story, turning
            your small space into a personalised sanctuary. Not just that,
            Custom color furniture can also transform your living space and even
            make a small space look bigger.
          </p>
          <br></br>
          <br></br>

          <p className="home-lists">
            4. ILLUSION OF SPACE WITH THOUGHTFUL DESIGN
          </p>
          <p className="list-details">
            Strategic design choices can create the illusion of a larger space.
            Maanavi Homes’ expertise in custom furniture includes thoughtful
            design elements that enhance the perception of space. Whether it’s
            the strategic placement of mirrors, the use of{" "}
            <u>custom colour furniture</u>, or the selection of pieces with
            clean lines, our custom designs are tailored to make your small
            space feel open and inviting, making small spaces feel larger
          </p>
        </div>

        <img src="./images/brown-gray-sofa.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">5. MODULAR FURNITURE</p>
          <p className="list-details">
            Modular furniture offers flexibility and adaptability, making it
            ideal for small spaces. Custom modular pieces can be reconfigured to
            suit your changing needs, allowing you to adapt your living space as
            required. Whether it's a modular sofa for your living room that can
            be rearranged into different seating configurations or a modular
            shelving unit for the kitchen that can be expanded over time, these
            pieces offer endless possibilities.
          </p>
        </div>

        <img src="./images/brownish-silver.jpg" className="fabrics"></img>

        <div>
          <p className="home-lists">FINAL THOUGHTS</p>
          <p className="list-details">
            Small spaces come with their unique set of challenges, but with
            Maanavi Homes’ custom furniture, these challenges become
            opportunities for innovation and creativity. Unlock the full
            potential of your compact living area by embracing customization.
            Tailored dimensions, multi-functional designs, and smart storage
            solutions are just a few ways our custom furniture transforms small
            spaces into stylish, functional retreats. Discover the possibilities
            with Maanavi Homes and make every inch count in your home.
          </p>
        </div>

        <button type="button" className="contact-us" onClick={handleNavigate}>
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              Why choose custom furniture for a small space instead of
              ready-made options?
            </p>
            <button onClick={handleCustom} className="plussub">
              {custom ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {custom && (
            <p className="fqa-ans">
              Custom furniture allows you to maximise every inch of your small
              space. Unlike ready-made alternatives, custom pieces can be
              tailored to fit the exact dimensions of your room, ensuring a
              perfect fit and optimal use of space.
            </p>
          )}
        

        <p className="horz-line"></p>
        <div className="fqa-que">
          <p>Can custom furniture really help with storage in a small space?</p>
          <button onClick={handleStore} className="plussub">
            {smallStore ? <RiSubtractLine /> : <GoPlus />}
          </button>
        </div>
        <div>
          {smallStore && (
            <p className="fqa-ans">
              Absolutely. Maanavi Homes’ custom furniture is designed with
              functionality in mind. From hidden storage compartments to smart
              shelving solutions, our custom designs prioritize efficient
              storage without compromising on style.
            </p>
          )}
        </div>

        <p className="horz-line"></p>
        <div className="fqa-que">
          <p>
            Are there specific design strategies to make a small space feel
            larger?
          </p>
          <button onClick={handleDesign} className="plussub">
            {design ? <RiSubtractLine /> : <GoPlus />}
          </button>
        </div>
        <div>
          {design && (
            <p className="fqa-ans">
              Yes, our custom designs incorporate strategic elements to enhance
              the perception of space. Whether it’s the use of mirrors, light
              colours, or space-saving furniture, we tailor the design to create
              the illusion of a larger, more open environment.
            </p>
          )}
        </div>

        <p className="horz-line"></p>
        <div className="fqa-que">
          <p>
            Can custom furniture be designed for multi-functional use in small
            spaces?
          </p>
          <button onClick={handleFunction} className="plussub">
            {functional ? <RiSubtractLine /> : <GoPlus />}
          </button>
        </div>
        <div>
          {functional && (
            <p className="fqa-ans">
              Absolutely. Maanavi Homes specialises in creating custom pieces
              that serve dual purposes. From convertible coffee tables to
              modular seating options, our designs are crafted to adapt to the
              evolving needs of your small space.
            </p>
          )}
        </div>

        <p className="horz-line"></p>
        <div className="fqa-que">
          <p>Tips for Incorporating Custom Furniture into Your Small Space</p>
          <button onClick={handleTips} className="plussub">
            {tips ? <RiSubtractLine /> : <GoPlus />}
          </button>
        </div>
        <div>
          {tips && (
            <p className="fqa-ans">
              1. Measure Your Space<br></br>
              Before commissioning custom furniture, it's essential to measure
              your space accurately. This ensures that each piece is designed to
              fit perfectly, maximizing both functionality and aesthetics.
              <br></br><br></br>
              2. Prioritize Functionality<br></br>
              While aesthetics are important, functionality should be the
              primary consideration when designing custom furniture for small
              spaces. Think about how you use your space and what features would
              be most beneficial. Multi-functional pieces, built-in storage, and
              space-saving designs should be at the top of your list.
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
