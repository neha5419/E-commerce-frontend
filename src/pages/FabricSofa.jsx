import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function FabricSofa() {
  const [bestsofa, setBestSofa] = useState(false);
  const [custom, setCustom] = useState(false);
  const[clean,setClean]=useState(false);
  const navigate=useNavigate();
  function handleNavigate(){
    navigate("/contactus");
  }

  function handleSofa() {
    setBestSofa(!bestsofa);
  }
  function handleCustom() {
    setCustom(!custom);
  }
  function handleClean(){
    setClean(!clean)
  }
  return (
    <div className="main">
      <div>
        <img src="./images/fabric-sofa.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          Selecting the Best Sofa Upholstery Fabric for Your Home
        </p>

        <p className="dine-desc">
          Thinking of reupholstering your couch or maybe choosing fabric for a
          new one? Well you are in the right place! When deciding on the right
          upholstery, it is not only based on aesthetics but also comfort,
          longevity and lifestyle.
        </p>
        <p className="dine-desc">
          Upholstery has changed so much from just being a fabric cover. Today,
          what matters is innovation, sustainability and personalization. Let us
          look into sofa upholstery by exploring common yet unusual materials
          and insider tips to keep your couch looking great throughout.
        </p>

        <img src="./images/sofa_u1.webp" className="fabrics"></img>

        <p className="home-lists">1. LEATHER UPHOLSTERY FOR SOFA:</p>
        <p className="list-details">
          Leather is a classic, it’s long-lasting and elegant, Perfect for busy
          spaces and houses with children or pets. Leather ages well, developing
          a unique patina over time. There are many different types of leather
          available each with its own characteristics. Full-grain leather has
          the highest quality, providing an organic look and feel whilst
          top-grain leather is slightly more processed although it lasts just as
          long.
        </p>

        <img src="./images/sofa_u2.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">2.FABRIC UPHOLSTERY</p>
          <p className="list-details">
            A lot of people prefer fabric upholstery in sofas because it
            provides various color, patterns and textures. Common fabric
            materials used on sofa include:
          </p>

          <ul>
            <li className="list-details">Cotton Upholstery</li>
            <p className="list-details">
              Cotton is a classic for sofa upholstery. It is breathable, feels
              comfortable, comes in various patterns and colours. It’s also
              quite easy to clean which makes it good for families with kids or
              pets.
            </p>

            <li className="list-details">Linen Upholstery</li>
            <p className="list-details">
              It offers you a more relaxed and casual look. Natural look and
              airiness are the things we enjoy most about linen upholstery;
              however this kind of cloth gets creased very quickly so if you
              want everything around you to be tidy all the time it might not be
              your first choice.
            </p>

            <li className="list-details">Velvet for Sofa</li>
            <p className="list-details">
              Velvet is the synonym of luxury and comfort. Velvet can instantly
              transform any room with its sumptuous texture. It is soft, rich in
              colors and plush to feel. While velvet is undeniably stylish, it
              does need some care.
            </p>
          </ul>
        </div>
        <img src="./images/black_white.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">3. SYNTHETIC MATERIALS</p>
          <p className="list-details">
            Some sofas use synthetic materials, like vegan leather, which
            imitates genuine leather and less expensive. If you are looking for
            leather-like aesthetics without breaking your bank account, these
            materials may be useful.
          </p>

          <ul>
            <li className="list-details">Polyester</li>
            <p className="list-details">
              Polyester has become one of the most popular synthetics because of
              its toughness and ability to resist stains. It is also available
              in many colors and designs. They are a practical option for
              families with kids or pets.
            </p>

            <li className="list-details">Nylon</li>
            <p className="list-details">
              It is known that nylon possesses strength and resilience
              properties hence often blended with other fibers when making long
              lasting and attractive upholstery fabrics.
            </p>

            <li className="list-details">Microfiber</li>
            <p className="list-details">
              Microfiber is incredibly soft and resistant to stains, making it a
              top choice for families. Additionally microfiber is also
              relatively easy to clean.
            </p>
          </ul>
        </div>

        <img src="./images/cream_black_sofa.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">
            4. QNIQUE UPHOLSTERY MATERIALS YOU MAY NOT KNOW ABOUT
          </p>
          <p className="list-details">
            Let’s go beyond the usual offerings and explore some innovative and
            eco-friendly upholstery materials.
          </p>

          <ul>
            <li className="list-details">Performance Fabric:</li>
            <p className="list-details">
              Performance fabric has revolutionizing the industry with its blend
              of fashion and function. It’s gentle to the touch, tough, and
              doesn’t allow any stains, dampness or foul smells through. Crypton
              fabrics are perfect for busy households because they don't require
              much in terms of care. Spills bead up on the surface, making it
              easy to clean.
            </p>

            <li className="list-details">Recycled Upholstery Materials:</li>
            <p className="list-details">
              Sustainability is not just a trend; it is the way we live now.
              Instead of purchasing new materials for sofa upholstery, consider
              incorporating recycled ones. Fabrics made from recycled polyester
              or upcycled textiles strike an unusual balance between style and
              environmental friendliness. Hence apart from being durable they
              also enhance a reduction in the ecological footprint, bringing in
              a positive impact.
            </p>

            <li className="list-details">
              Customizable and Modular Upholstery:
            </li>
            <p className="list-details">
              Expect more personalization options in upholstered furniture as
              customers continue to seek tailor-made products. Think about
              changing your couch’s cover depending on the season or your
              inspiration. You can mix different kinds of material as well as
              patterns using modular upholstery systems in order to give your
              home a unique tailored look.
            </p>
          </ul>
        </div>
        <img src="./images/fabric-colors.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">
            STILL CONFUSED? LET'S CHOOSE THE RIGHT UPHOLSTERY FOR YOU
          </p>
          <ol>
            <li className="list-details">
              Consider Your Lifestyle - Do you have kids or pets? Then opt for a
              fabric like microfiber or leather that is made to last and
              easy-to-clean. For a more luxurious feel, velvet or linen might be
              your go to.
            </li>
            <li className="list-details">
              Aesthetics - Your sofa set is the focal point in your living room,
              so choose an upholstery that matches your decor. Bold colors and
              textured fabrics make a statement, while neutral tones offer
              versatility.
            </li>
            <li className="list-details">
              <u>Maintenance Needs </u>- Some fabrics require more care than
              others. If you want low maintenance options, look for materials
              that are stain resistant and easy to clean.
            </li>
            <li className="list-details">
              Cost Considerations - Upholstery cost can vary greatly. Polyester
              and microfiber is affordable and durable. Velvet and leather is at
              the higher end but offers unmatched elegance and durability.
              Investing in good quality upholstery will save you money in the
              long run by reducing the need to replace often.
            </li>
          </ol>

          <p className="home-lists">SOFA UPHOLSTERY DECODED</p>
          <p className="list-details">
            So, there you have it! Comfort, style, and personal taste, the
            perfect upholstery is a blend of these features. It's about more
            than just picking a fabric—it's an opportunity to create a space
            that resonates with your lifestyle.
          </p>
          <p className="list-details">
            Each material, whether it’s the luxurious feel of velvet, the
            classic look of leather or the practicality of modern fabrics brings
            its own personality to your space. It’s a decision that goes beyond
            trends, it’s about what makes your home a haven and beautiful.
          </p>
          <p className="list-details">
            Inspired yet too overwhelmed to find the right sofa upholstery
            fabric on your own? Touch base with our team of design experts at
            Maanavi Homes.
            <u>Get in</u> touch to build your story!
          </p>
        </div>

        <button type="button" className="contact-us" onClick={handleNavigate}>
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>What is the best fabric for sofa upholstery?</p>
            <button onClick={handleSofa} className="plussub">
              {bestsofa ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {bestsofa && (
            <p className="fqa-ans">
              There’s not one answer to which fabric to use for a sofa. Your
              choice should be based on your needs and personal preference,
              considering durability, comfort, maintenance and aesthetics. It’s
              always a good idea to visit a furniture store or request samples
              so you can feel the fabrics to get an idea of what works for you.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Can I get custom prints for my sofa upholstery?</p>
            <button onClick={handleCustom} className="plussub">
              {custom ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {custom && (
              <p className="fqa-ans">
                Absolutely! At Maanavi Homes we offer you a vast range of custom
                prints and patterns on upholstery fabrics.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How to clean the Upholstery?</p>
            <button onClick={handleClean} className="plussub">
              {clean ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {clean && (
              <p className="fqa-ans">
                Maintaining the fabric of your sofa is crucial to extend its
                life and keep it looking clean and beautiful. Here are some tips
                to maintain fabric upholstery on your sofa:
                <br></br><br></br>- Regular Vacuuming: Dust, dirt and debris can
                accumulate on your sofa’s fabric, so vacuum it regularly. Use a
                soft brush attachment to prevent damage to the fabric. Vacuum
                both the seat cushions and the crevices between them.
                <br></br><br></br>- Flip and Rotate Cushions: To ensure even wear, flip
                and rotate the seat and back cushions regularly. This will
                prevent one side from getting more worn or compressed than the
                other.
                <br></br><br></br>- Clean Spills Promptly: Accidents happen, so it’s
                important to clean spills and stains as soon as they happen.
                Blot the stain gently with a clean, absorbent cloth or paper
                towel to soak up as much of the liquid as possible. Don’t rub,
                it will spread the stain.
                <br></br><br></br>- Spot Cleaning: For specific stains, refer to the care
                label on your sofa for cleaning instructions. Some fabrics can
                be cleaned with mild detergent and water, while others may
                require a fabric cleaner. Always test any cleaning solution on
                an inconspicuous area of the fabric first to ensure it doesn’t
                damage or discolour it.
                <br></br><br></br>- Professional Cleaning: Consider having your sofa
                professionally cleaned every 12 to 24 months depending on usage.
                Professional cleaners can deep clean and remove embedded dirt
                and stains effectively.
                <br></br><br></br>Remember that different fabric may have specific care
                instructions, so always check the care label provided by the
                manufacturer. Following these maintenance tips can help extend
                the life of your fabric sofa and keep it looking its best.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
