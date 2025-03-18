import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function FurnitureSec() {
  const [luxury, setLuxury] = useState(false);
  const [smart, setSmart] = useState(false);
  const [trend, setTrend] = useState(false);
  const[upgrades,setUpgrade]=useState(false);
  const navigate=useNavigate();
  function handleNavigate(){
    navigate("/contactus");
  } 
  function handleLux() {
    setLuxury(!luxury);
  }
  function handleSmart() {
    setSmart(!smart);
  }
  function handleTrend() {
    setTrend(!trend);
  }
  function handleUpgrade(){
    setUpgrade(!upgrades);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/green.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          Trending in Luxury Furniture: A Look at 2024's Must-Have Designs
        </p>

        <p className="dine-desc">
          The world of luxury furniture is exciting and evolving at a rapid
          pace. Today the landscape of furniture design is now dominated by the
          lifestyle and personalities of its owners, to ensure every corner of
          their home tells their story. Our design experts have put together
          their list of some truly remarkable innovations to look out for in the
          realm of high-end furniture!
        </p>
        <p className="dine-desc">
          The furniture designs of 2024 are all about combining style, comfort,
          and functionality, including use of innovative materials and high-tech
          integrations. Whether you're renovating your space or curious about
          what's trending, this guide will take you through the must-have
          designs that are defining luxury furniture this year. And with 2025
          just around the corner, it's the perfect time to stay updated with all
          the latest trends.
        </p>

        <img src="./images/blog_2_images.webp" className="fabrics"></img>

        <p className="home-lists">1. CONSIDER CUSTOM FURNITURE PIECES</p>
        <p className="home-lists">
          One trend our design experts absolutely love this year is the shift
          towards customization. In 2024, everyone wants their home to reflect
          their personality, and what better way than with bespoke furniture?
        </p>
        <ul>
          <li className="list-details">
            Personalized Upholstery: Now you can choose the fabric, color,
            texture and pattern for your pieces. Whether you prefer bold,
            vibrant prints or subtle, neutral tones, the options are endless.
            Custom upholstery lets you personalize everything as per your
            preferences.
          </li>
          <br></br>
          <li className="list-details">
            Modular Furniture: Move and rearrange any pieces to suit your needs.
            Imagine a sofa that can be transformed into a bed or sectional in
            just minutes. The modular furniture system is a perfect example of
            how luxury and practicality can coexist.
          </li>
          <br></br>
          <li className="list-details">
            Artisanal Craftsmanship: There’s something special about a piece of
            furniture that’s been handcrafted just for you. From intricately
            detailed pieces to handwoven rugs, these pieces add a touch of
            uniqueness, premium quality and charm to your home.
          </li>
          <br></br>
        </ul>

        <img src="./images/blog_2_images_1.webp" className="fabrics"></img>

        <p className="home-lists">2. OPT FOR SUSTAINABLE LUXURY</p>
        <p className="list-details">
          Sustainability isn’t just a buzzword, it is a key focus in the luxury
          furniture industry. People are now prioritizing pieces made from more
          eco-friendly materials and this is one design trend that’s not going
          away anytime soon. Use of reclaimed barn wood, recycled or
          biodegradable materials and non toxic finishes are gaining popularity
          as they don’t just look good but also feel good, knowing you’re
          contributing towards a greener planet.
        </p>

        <p className="home-lists">HIGH-TECH MEETS HIGH-END</p>
        <p className="list-details">
          Technology is being increasingly integrated with luxury furniture,
          changing the way we live and interact with our homes. From Smart Beds
          to interactive mirrors and Wireless Charging Furniture, the fusion of
          tech and design is reshaping luxury interiors. Maanavi Home’s
          designers’ forward thinking and innovative approach ensure you get the
          best of smart furniture enhancing both aesthetics and modern living.
        </p>

        <img src="./images/lap.webp" className="fabrics"></img>

        <p className="home-lists">4. ENJOY THE BEAUTY OF BIOPHILIX DESIGN</p>
        <p className="list-details">
          If you’re looking to reconnect with the Nature, consider Biophilic
          Design. This interior trend incorporates natural elements into
          furniture design to create calming, refreshing spaces.
        </p>
        <ul>
          <li className="list-details">
            Natural Materials: Think stone coffee tables, wooden bed frames, and
            linen upholstery. These materials not only look beautiful but also
            have a grounding effect on our well-being.
          </li>
          <li className="list-details">
            Organic Shapes: Our Design experts love furniture with flowing,
            organic shapes that mimic nature’s curves and add a touch of unique
            serenity and elegance to any room.
          </li>
        </ul>

        <img src="./images/blog_2_images_2.webp" className="fabrics"></img>

        <p className="home-lists">5. MAKE A STATEMENT WITH MAXIMALISM</p>
        <p className="list-details">
          While minimalism has its charm, 2024 is seeing a resurgence of
          maximalism in luxury furniture. We suggest making a statement with a
          pop of bold colors, patterns, and textures.
        </p>
        <p className="list-details">
          This is a great way to highlight a focal point in a room, add some
          flair and personality to any room. Don’t hesitate to get creative -
          mix and match colors, textures or even shapes and patterns too!
        </p>

        <p className="home-lists">6. CHOOSE COMPACT LUXURY</p>
        <p className="list-details">
          Urban living often means dealing with smaller spaces, but that doesn’t
          mean you have to compromise on luxury. In 2024, compact luxury
          furniture is all about making the most out of your space.
        </p>

        <ul>
          <li className="list-details">
            Multifunctional Pieces: Think ottomans that double as storage units
            or beds with built-in drawers. These pieces are designed to make the
            most of limited space.
          </li>
          <br></br>
          <li className="list-details">
            Slim Silhouettes: Furniture with sleek, slim profiles that don’t
            overwhelm the room but still offer comfort and elegance.
          </li>
          <br></br>
          <li className="list-details">
            Space-Saving Innovations: Fold-away desks, nesting tables, and
            wall-mounted shelves are perfect for creating a luxurious feel in
            smaller spaces.
          </li>
        </ul>
        <p className="home-lists">7. GET ARTISTIC AND HANDCRAFTED ACCENTS</p>
        <p className="list-details">
          Why hang art on the walls when your furniture can be the artwork?
          Today<u> artistic accents</u> are a key trend, turning everyday pieces
          into conversation starters.
        </p>
        <ul>
          <li className="list-details">
            Sculptural Furniture: Chairs, tables, and sofas that look like they
            belong in a gallery. Think of pieces with bold, sculptural forms and
            unique designs.
          </li>
          <br></br>
          <li className="list-details">
            Mixed Media: Combining materials like metal, glass, wood, and fabric
            to create visually stunning and tactile pieces.
          </li>
          <br></br>
          <li className="list-details">
            Bespoke Creations: One-of-a-kind pieces that are custom-designed to
            reflect your personal style and taste.
          </li>
        </ul>

        <img src="./images/blog_2_images_4.webp" className="fabrics"></img>
        <p className="home-lists">
          8. EXPERIMENT WITH BOLD AND SUBDUED PALETTES
        </p>
        <p className="list-details">
          Bold colours are also in the spotlight this year. Look for Deep blues,
          forest greens, and rich burgundies. These colours are perfect for
          adding depth to your room.Whereas Soft, earthy tones like beige,
          taupe, and soft greys create a calming and sophisticated environment.
          Our experts suggest combining the bold and neutral palettes can create
          a more balanced and visually appealing look.
        </p>

        <p className="home-lists">9. INDULGE IN ORGANIC AND GEOMETRIC FORMS</p>
        <p className="list-details">
          The next design trend that our experts predict for 2024-25 is
          preference for curves and fluid lines that mimic natural forms. A soft
          angle is a great way to offset the geometric structure and rigid
          lines.
        </p>
        <img src="./images/blog_2_images_5.webp" className="fabrics"></img>

        <p className="home-lists">10. RETRO REVIVAL:</p>
        <p className="list-details">
          A blast from the past! Vintage furniture is making a comeback in 2024.
          Mid-century modern designs, Art Decor elements, and 80s-inspired
          pieces are being reinvented with a contemporary twist, adding a
          nostalgic yet modern twist to interiors.
        </p>

        <img src="./images/vintage.webp" className="fabrics"></img>

        <p className="list-details">
          A new year is always an exciting time to explore trends and new
          possibilities with interior and furniture. And with 2025 just around
          the corner, now is the perfect time to update your space with these
          must-have designs.
        </p>
        <p className="list-details">
          Our design team is always eager to help and advise you on what’s
          trending. <u>Reach out</u> anytime to learn about what’s New in-store
          (and-in trend).
        </p>

        <button type="button" className="contact-us" onClick={handleNavigate}>
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>What defines luxury furniture in 2024?</p>
            <button onClick={handleLux} className="plussub">
              {luxury ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {luxury && (
            <p className="fqa-ans">
              Luxury furniture in 2024 is all about combining high-end
              materials, innovative designs, and technological integrations that
              enhance both aesthetics and functionality.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Are smart furniture designs really practical or just a fad?</p>
            <button onClick={handleSmart} className="plussub">
              {smart ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {smart && (
              <p className="fqa-ans">
                According to our designers, Smart furniture is here to stay!
                From beds with automations to tables with wireless charging,
                these innovations make life easier and more convenient. They’re
                practical investments that merge technology with functionality,
                catering to modern lifestyles.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>What should I look out for in 2025 furniture trends?</p>
            <button onClick={handleTrend} className="plussub">
              {trend ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {trend && (
              <p className="fqa-ans">
                2025 is expected to expand on current trends, focusing even more
                on Smart furniture designs and hyper-personalization. Expect to
                see more compact yet luxurious designs tailored to urban living,
                alongside advancements in sustainable and multifunctional
                furniture.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              How do I keep up with furniture trends without frequent upgrades?
            </p>
            <button onClick={handleUpgrade} className="plussub">
              {upgrades ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {upgrades && (
              <p className="fqa-ans">
                Focus on timeless pieces with versatile designs and use
                accessories to reflect current trends. Swap out throw pillows,
                rugs, or wall art to keep your space fresh and aligned with the
                latest styles without a complete makeover.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
