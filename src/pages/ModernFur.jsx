import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function ModernFur() {
  const [section, setSection] = useState(false);
  const [coffee, setCoffee] = useState(false);
 const[chair,setChair]=useState(false);
const[console,setConsole]=useState(false);
const[rug,setRug]=useState(false);
const navigate=useNavigate();
function handleNavigate(){
  navigate("/contactus");
}
  function handleSec() {
    setSection(!section);
  }
  function handleCoffee() {
    setCoffee(!coffee);
  }
  function handleChair(){
    setChair(!chair);
  }
  function handleConsole(){
    setConsole(!console);
  }
  function handleRug(){
    setRug(!rug);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/modern-fur.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">Must-Have Modern Living Room Furniture</p>
        <p className="dine-desc">
          Your living room is the heart of your home, a space where you gather
          with loved ones, entertain guests, and unwind after a long day. It’s
          essential to furnish this space thoughtfully, blending comfort, style,
          and functionality seamlessly. We believe that each piece of furniture
          should not only serve a purpose but also tell a story. At Maanavi
          Homes, we’ve curated a list of must-have living room furniture pieces
          to transform your living space into a haven of comfort and elegance.
        </p>

        <img src="./images/big_hall.webp" className="fabrics"></img>

        <p className="home-lists">1. SOFA OR SECTIONAL</p>
        <p className="list-details">
          A comfortable and stylish sofa or sectional forms the focal point of
          any living room. Whether you prefer a classic sofa or a versatile
          sectional, choose a design that complements your space and offers
          ample seating for your family and guests.
        </p>

        <img src="./images/black_white.webp" className="fabrics"></img>

        <p className="home-lists">2. COFFEE TABLE</p>

        <p className="list-details">
          A coffee table is a functional and aesthetic essential, providing a
          surface for beverages, books, and decor. But why not make it a
          statement piece too? Opt for a coffee table that’s proportionate to
          your sofa and provides enough surface area for decor and daily use. A
          well-chosen coffee table can tie the entire room together, adding both
          function and style.
        </p>

        <img src="./images/coffee_table.webp" className="fabrics"></img>

        <p className="home-lists">3.ACCENT CHAIRS</p>
        <p className="list-details">
          Accent chairs are perfect for adding character and additional seating
          to your living room. Choose chairs that enhance your decor while
          providing a comfortable spot for reading or conversation.
        </p>
        <p className="list-details">
          Choose a luxury leather chair for a classic look or an
          Italian-designed chair for a contemporary touch. Ensure the chair
          complements your sofa and adds to the overall aesthetic of the living
          room.
        </p>

        <img src="./images/golden_design.webp" className="fabrics"></img>

        <p className="home-lists">4. MEDIA CONSOLE OR ENTERTAINMENT CENTER</p>
        <p className="list-details">
          Organize your entertainment setup with a media console or
          entertainment center that accommodates your TV, audio equipment, and
          storage for media accessories. Modern living rooms require smart
          storage solutions.
        </p>
        <p className="list-details">
          Think beyond the traditional TV unit. Consider floating shelves or
          sleek media consoles. These pieces don’t just serve a functional
          purpose but also contribute to the room’s design.
        </p>

        <img src="./images/living_room_5.webp" className="fabrics"></img>

        <p className="home-lists">5. END TABLES</p>
        <p className="list-details">
          End tables, also known as side tables, are versatile additions. They
          provide a convenient spot for lamps, drinks, or your favourite book.
          Choose end tables that complement the style of your sofa or sectional.
        </p>

        <img src="./images/brown_lines.webp" className="fabrics"></img>
        <p className="home-lists">6. OTTOMAN OR POUF</p>
        <p className="list-details">
          An ottoman or pouf is a multi-functional piece that can serve as a
          footrest, additional seating, or even a coffee table. For smart
          storage, opt for a multipurpose ottoman for hidden storage. Select a
          design that aligns with your decor and lifestyle.
        </p>

        <img src="./images/ottoman.webp" className="fabrics"></img>

        <p className="home-lists">7. RUG</p>
        <p className="list-details">
          Complete your living room setup with a well-chosen rug that ties the
          space together, adding warmth, texture, and visual interest. Consider
          the size, color, and material that compliments your furniture and
          decor. Don’t forget about stylish cushions and throws – they’re the
          perfect way to introduce color and pattern without overwhelming the
          room. Plus, they’re great for those cozy nights in.
        </p>
        <img src="./images/rugs_blog.webp" className="fabrics"></img>

        <p className="home-lists">8. LAMPS AND LIGHTING FIXTURES</p>
        <p className="list-details">
          Brighten your living room with a mix of ambient, task, and accent
          lighting. Floor lamps, table lamps, or pendant lights not only provide
          light but also contribute to the living room’s ambiance. You should
          also consider smart lighting options for added convenience and mood
          settings.
        </p>

        <p className="home-lists">9. CONSOLE TABLE</p>
        <p className="list-details">
          A console table near the entryway or against a wall can be a stylish
          addition. Use it for both functional and decorative purposes,
          displaying artwork, plants, or other decor items.
        </p>

        <p className="home-lists">10. ART AND ACCESSORIES</p>
        <p className="list-details">
          Personalize your living room with art and accessories. Choose art
          pieces that resonate with you and complement your furniture.
          Decorative artefacts, stylish vases, and modern crockeries can add
          those finishing touches that make the room feel complete.
        </p>

        <img src="./images/black_green_theme.webp" className="fabrics"></img>

        <p className="list-details">
          o there you have it! A comprehensive list of living room furniture -
          picked by our expert designers. Creating the perfect living room
          requires careful consideration and thoughtful selection of each
          furniture piece. At Maanavi Homes, we offer custom living room
          furniture designed to match your unique style and space requirements.
          Explore <u> our collection</u> to discover timeless pieces that will
          transform your living room into a comfortable and inviting retreat.
        </p>

        <button type="button" className="contact-us" onClick={handleNavigate}>
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              What factors should I consider when choosing a sofa or sectional
              for my living room?
            </p>
            <button onClick={handleSec} className="plussub">
              {section ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {section && (
            <p className="fqa-ans">
              Consider the size of your space, desired seating capacity, style
              preferences, lifestyle and the sofa’s comfort level. Measure your
              room to ensure the sofa fits comfortably and complements other
              furniture.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How do I choose the right coffee table for my living room?</p>
            <button onClick={handleCoffee} className="plussub">
              {coffee ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {coffee && (
              <p className="fqa-ans">
                Select a coffee table that matches the scale of your seating
                area, leaving enough space for movement. Consider materials,
                shapes, and styles that complement your existing furniture and
                decor.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              Are accent chairs necessary, and how do they enhance the living
              room?
            </p>
            <button onClick={handleChair} className="plussub">
              {chair ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {chair && (
              <p className="fqa-ans">
                Accent chairs are not only functional but add visual interest to
                your living room. They can complement your existing furniture,
                introduce a pop of color, and provide additional seating for
                guests.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              What's the difference between a media console and an entertainment
              center?
            </p>
            <button onClick={handleConsole} className="plussub">
              {console ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {console && (
              <p className="fqa-ans">
                A media console typically houses media equipment and has
                storage, while an entertainment center is a larger unit that
                often includes shelving, drawers, and space for a TV. Choose
                based on your storage and aesthetic needs.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How can I select the right rug for my living room?</p>
            <button onClick={handleRug} className="plussub">
              {rug ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {rug && (
              <p className="fqa-ans">
                Consider the size of your room and furniture arrangement. A rug
                should be large enough to fit under the key pieces of furniture,
                unifying the space. Choose a color and pattern that complements
                your decor.
              </p>
            )}
          </div>
          <p className="horz-line"></p>
        </div>
      </div>
    </div>
  );
}
