import { useState } from "react";
import "../css/DiningDesc.css";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { RiSubtractLine } from "react-icons/ri";
export default function HomeDecor() {
  const [color, setColor] = useState(false);
  const [limitations, setLimitations] = useState(false);
  const [decor, setDecor] = useState(false);
  const [timeless, setTimeless] = useState(false);
  const[mix,setMix]=useState(false);
  const navigate=useNavigate();
  function handleNavigate(){
    navigate("/contactus");
  }

  function handleColor() {
    setColor(!color);
  }

  function handleLimi() {
    setLimitations(!limitations);
  }

  function handleDecor() {
    setDecor(!decor);
  }

  function handleTimeless() {
    setTimeless(!timeless);
  }

  function handleMix(){
    setMix(!mix)
  }
  return (
    <div className="main">
      <div>
        <img src="./images/home-decor.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          Master the Art of Furniture Color Combination: Elevate Your Home Décor
        </p>

        <div>
          <p className="dine-desc">
            Colour is the soul of any room, and the right furniture colour
            combination can turn an ordinary space into an extraordinary
            masterpiece. Whether you're starting from scratch or refreshing an
            existing room, understanding how to combine furniture colours can
            create a cohesive and inviting atmosphere.
          </p>
          <p className="dine-desc">
            At Goldnest, we believe that{" "}
            <u>custom furniture can transform your living spaces</u>. Let's dive
            into the art of <u>furniture colour combinations</u> and discover
            how to create a harmonious home.
          </p>
        </div>

        <div className="advice">
          <p className="grey-line"></p>
          <p className="designer-advice">
            According to the Institute for Colour Research, people make a
            subconscious judgment about an environment or product within 90
            seconds of initial viewing, and between 62% & 90% is based on color
            alone. This emphasizes the importance of choosing the right colour
            combinations for your furniture to create the desired impact.
          </p>
        </div>

        <img src="./images/circlesofa.webp" className="fabrics"></img>

        <div>
          <p className="questionarie">WAIT, BUT WHAT IS COLOUR THEORY?</p>
          <p className="home-setting">
            Colour theory is the foundation of all design elements.
            Understanding primary, secondary, and tertiary colours is essential
            in creating a balanced and harmonious space.
          </p>
          <p className="home-setting">
            The colour wheel is a visual representation of colours arranged
            according to their chromatic relationship. Using the colour wheel,
            you can create harmonious combinations by choosing colours that
            complement each other, such as complementary, analogous, or triadic
            schemes.
          </p>
        </div>

        <div>
          <p className="questionarie">
            WHY CHOOSING THE RIGHT FURNITURE COLOR COMBINATION IS IMPORTANT?
          </p>
          <p className="home-lists">1. PSYCHOLOGICAL EFFECTS OF COLOURS:</p>
          <p className="list-details">
            Colour has the remarkable ability to influence our mood and
            perceptions of people. Selecting the right hues for your custom
            furniture can create the desired atmosphere in your living spaces.
            The color of your furniture significantly influences the overall
            ambiance of a room. Bright colours can make a space feel energetic
            and vibrant, while softer, muted tones can create a calming and
            relaxing environment.
          </p>

          <p className="home-lists">2. CREATING A FOCAL POINT:</p>
          <p className="list-details">
            The colour of your furniture can serve as a focal point in the room.
            Whether you opt for a bold statement piece or a subtle accent,
            Goldnest’s customization allows you to strategically use colour
            to draw attention to key areas and enhance the overall design
            aesthetic.
          </p>

          <p className="home-lists">
            3. PERSONAL EXPRESSION THROUGH CUSTOMIZATION:
          </p>
          <p className="list-details">
            Your home is an extension of your personality, and your custom
            furniture colour should reflect that. We recommend you to choose
            colours that resonate with your style, creating pieces that feel
            uniquely yours. From vibrant and eclectic to understated and
            elegant, the colour palette is your canvas.
          </p>
        </div>

        <img src="./images/colourpalet.webp" className="fabrics"></img>

        <div>
          <p className="questionarie">OUR FAVOURITE FURNITURE COLOURS:</p>
          <p className="home-lists">1. MONOCHROMATIC SCHEMES:</p>
          <p className="list-details">
            Monochromatic colour schemes involve using different shades of a
            single colour. This approach creates a cohesive and sophisticated
            look, ideal for modern and minimalist designs.
          </p>
        </div>

        <img src="./images/brownsofa.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">2. COMPLEMENARY SCHEMES:</p>
          <p className="list-details">
            Complementary colour schemes use colours that are opposite each
            other on the colour wheel, such as blue and orange. These
            combinations create a vibrant and dynamic contrast that can make
            your furniture stand out.
          </p>
        </div>

        <img src="./images/creamsofa.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">3. ANALOGOUS SCHEMES:</p>
          <p className="list-details">
            Analogous colour schemes involve using colours that are besides one
            another on the colour wheel. This results in a harmonious and serene
            look, perfect for creating a relaxed and cohesive space.
          </p>
        </div>

        <img src="./images/bubbles.webp" className="fabrics"></img>

        <div>
          <p className="home-lists">4. TRIADIC SCHEMES:</p>
          <p className="list-details">
            Triadic colour schemes use three colours that are evenly spaced
            around the colour wheel, such as red, yellow, and blue. This
            approach provides a balanced and visually appealing look with plenty
            of contrast
          </p>
        </div>

        <img src="./images/skeleton-stairs.webp" className="fabrics"></img>

        <div>
          <p className="questionarie">
            EXPERTS TIPS FOR SELECTING FURNITURE COLOUR COMBINATIONS
          </p>

          <p className="home-lists">
            1. CONSIDERING YOUR ROOM SIZE AND LIGHTING:
          </p>
          <p className="list-details">
            The size of your room and the amount of natural light it receives
            can influence your colour choices. Discuss how Goldnest
            considers the interplay between natural and artificial light,
            ensuring that your custom furniture looks stunning in various
            lighting conditions.
          </p>

          <p className="home-lists">2. MATCHING WITH WALL COLOURS:</p>
          <p className="list-details">
            To achieve a harmonious look, consider how your furniture colours
            will interact with your wall colours. Neutral walls provide a
            versatile backdrop for bold furniture colours, while coloured walls
            may require more subtle furniture tones.
          </p>

          <p className="home-lists">3. MIXING TEXTURES AND MATERAILS:</p>
          <p className="list-details">
            Custom Furniture Colour isn’t limited to solid hues; incorporating a
            variety of textures and materials can enhance the visual interest of
            your furniture color combinations. Mixing wood, metal, fabric, and
            glass can add depth and complexity to your design.
          </p>
        </div>

        <img src="./images/templedesign.webp" className="fabrics"></img>

        <div>
          <p className="questionarie">FURNITURE COLOR TRENDS FOR 2024</p>
          <p className="home-lists">BOLD AND BRIGHT HUE</p>
          <p className="list-details">
            Bold and bright hues are making a comeback in 2024. Vibrant colors
            like deep teal, mustard yellow, and rich magenta can add a sense of
            excitement and personality to your space.
          </p>

          <p className="home-lists">EARTHY AND NEUTRAL TONES</p>
          <p className="list-details">
            Earthy and neutral tones remain a popular choice for their timeless
            appeal. Colors like warm beige, soft taupe, and rich olive green
            create a calming and grounded atmosphere.
          </p>

          <p className="home-lists">VINTAGE AND MODERN MIX</p>
          <p className="list-details">
            Combining vintage and modern elements can result in a unique and
            eclectic look. Pairing mid-century modern furniture with
            contemporary color palettes can create a stylish and personalized
            space.
          </p>

          <p className="questionarie">
            LET'S fIND OUT WHICH FURNITURE COLOUR COMBINATION IS BEST FOR YOU!
          </p>
          <p className="home-lists">1. MODERN MINIMALIST APARTMENT</p>
          <p className="list-details">
            If you envision a modern minimalist apartment you can benefit from a
            monochromatic color scheme with sleek, neutral furniture pieces.
            Adding pops of color through accessories like cushions and artwork
            can provide visual interest without overwhelming the space.
          </p>

          <p className="home-lists">2. COZY RUSTIC COTTAGE</p>
          <p className="list-details">
            In a vintage rustic cottage, earthy tones and natural materials can
            create a warm and inviting atmosphere. Combining wood furniture with
            soft, neutral fabrics and subtle pops of color can enhance the
            cottage's charm.
          </p>

          <p className="home-lists">3. LUXURIOUS CONTEMPORARY HOME</p>
          <p className="list-details">
            For a luxurious contemporary home, bold and sophisticated color
            combinations can make a statement. Rich jewel tones like emerald
            green and sapphire blue, paired with metallic accents, can create a
            glamorous and opulent look.
          </p>

          <p className="questionarie">
            2 MAJOR MISTAKES TO AVOID WHILE SELECTING THE FURNITURE COLOUR
          </p>

          <p className="home-lists">1. Overwhelming with too many colours: </p>
          <p className="list-details">
            Using too many colours in one space can create a chaotic and
            overwhelming look. Stick to a cohesive color palette to maintain
            balance and harmony.
          </p>

          <p className="home-lists">2. Ignoring the room’s function: </p>
          <p className="list-details">
            Consider the function of each room when choosing furniture colours.
            For example, calming colours are ideal for bedrooms, while vibrant
            colours can energize a home office or playroom.
          </p>
        </div>

        <div>
          <p className="questionarie">FINAL THOUGHTS</p>
          <p className="list-details">
            Creating the perfect furniture color combination is an art that
            combines creativity, knowledge of color theory, and an understanding
            of personal style. By exploring different schemes and experimenting
            with colors, you can create a home that is not only beautiful but
            also uniquely yours. At <u>Goldnest </u>, we're here to help you
            every step of the
          </p>

          <p className="list-details">
            way, where your vision meets craftsmanship.
          </p>
        </div>

        <button type="button" className="contact-us" onClick={handleNavigate}>
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How do I choose the right colour for my custom furniture?</p>
            <button onClick={handleColor} className="plussub">
              {color ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {color && (
            <p className="fqa-ans">
              Choosing the right colour involves considering your personal
              preferences, the existing colour scheme of your home, and the mood
              you want to create. Goldnest designers can guide you through the
              process, helping you find the perfect palette that aligns with
              your vision.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              Can I customise the colour of any piece of furniture, or are there
              limitations?
            </p>
            <button onClick={handleLimi} className="plussub">
              {limitations ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {limitations && (
              <p className="fqa-ans">
                Goldnest offers the highest level of customization, allowing you
                to choose colours for a wide range of furniture pieces. However,
                some materials and finishes may have specific colour options.
                Our team will provide guidance on available choices during the
                consultation.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              How do I choose a furniture colour that matches my existing decor?
            </p>
            <button onClick={handleDecor} className="plussub">
              {decor ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {decor && (
              <p className="fqa-ans">
                Consider the dominant colours in your existing decor and select
                furniture colours that complement or contrast in a harmonious
                way. Using a colour wheel can help you find the perfect match.
                <br></br>
                <br></br>
                During the customization process, our designers take into
                account the colour scheme of your home. We can provide colour
                swatches and digital visualisations to help you see how the
                chosen palette will harmonise with your existing décor.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              Do you recommend any specific colours that are considered timeless
              for custom furniture?
            </p>
            <button onClick={handleTimeless} className="plussub">
              {timeless ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {timeless && (
              <p className="fqa-ans">
                Neutral tones such as whites, grays, and beiges are often
                considered timeless, as they provide a versatile backdrop for
                various styles. However, the timelessness of a colour also
                depends on personal preferences. Goldnest can help you
                strike the right balance between trends and enduring appeal.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Can I mix different styles of furniture with various colours?</p>
            <button onClick={handleMix} className="plussub">
              {mix ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {mix && (
              <p className="fqa-ans">
                Absolutely! Mixing styles and colors can create a unique and
                personalized look. Just ensure there's a common element, like a
                shared color or material, to tie everything together. Maanavi
                Homes allows for customization not only in terms of colour but
                also patterns and textures. Whether you prefer a solid colour,
                subtle patterns, or textured finishes, our customization options
                cater to a variety of design preferences.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
