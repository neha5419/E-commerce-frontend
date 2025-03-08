import { useState } from "react";
import "../css/DiningDesc.css";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
export default function ModernDining() {
  const [trend, setTrend] = useState(false);
  const [style, setStyle] = useState(false);
  const [options, setOptions] = useState(false);
  const [quality, setQuality] = useState(false);
  function handleData() {
    setTrend(!trend);
  }

  function handleStyle() {
    setStyle(!style);
  }

  function handleOptions() {
    setOptions(!options);
  }

  function handleQuality() {
    setQuality(!quality);
  }
  return (
    <div className="main">
      <div>
        <img
          src="./images/modern-dining-full.webp"
          className="dining-desc-img"
        ></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          Top 5 Modern Dining Table Designs to Transform Your Home
        </p>

        <div>
          <p className="dine-desc">
            Imagine a beautifully set dining table, delicious food, and loved
            ones gathered around, sharing stories and laughter.
          </p>
          <p className="dine-desc">
            The dining table is more than just a piece of furniture; it is the
            centrepiece of your dining room, a gathering place for family meals,
            and a space for hosting guests. Selecting the perfect dining table
            design can elevate your home's interior, blending functionality with
            a touch of elegance. At Golnest, we understand the importance
            of choosing a design that reflects your personal style while
            offering comfort and durability.
          </p>
          <p className="dine-desc">
            Here, we present five luxurious dining table designs that can
            transform your dining space into a sophisticated haven.
          </p>
        </div>

        <img
          src="./images/blog_images_vertical_1.webp"
          className="fabrics"
        ></img>

        <div>
          <p className="suit-head">
            1. The Timeless Charm of Wooden Dining Table
          </p>
          <p className="home-setting">
            A wood dining table design exudes warmth and timeless elegance,
            making it a versatile choice for any dining room. Whether you prefer
            a rustic farmhouse style or a sleek modern look, wood can be crafted
            into various shapes and finishes. Consider these options for a touch
            of natural beauty:
          </p>
          <ul>
            <li className="lists">
              Dining table design in wooden with intricate carvings for a
              classic appeal, adding a vintage charm that can evoke a sense of
              nostalgia.
            </li>
            <li className="lists">
              Glass top wooden dining table design that combines the sturdiness
              of wood with the sophistication of glass, offering a balanced
              blend of traditional and modern aesthetics.
            </li>
            <li className="lists">
              Extendable wooden tables that offer flexibility for both everyday
              use and larger gatherings, ensuring that you always have enough
              space for family and friends.
            </li>
          </ul>

          <p className="home-setting">
            Wooden tables not only provide durability but also age gracefully,
            enhancing their charm over time. The natural grain patterns of wood
            make each piece unique, adding character to your dining room. Choose
            from rich mahogany for a classic touch, warm oak for a cozy feel, or
            sleek walnut for a modern vibe.
          </p>
        </div>

        <img src="./images/glass_table.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">2. Sleek and Modern Glass Designs</p>
          <p className="home-setting">
            For those who lean towards contemporary aesthetics, a modern dining
            table design with glass elements can be a stunning addition. Glass
            tables create an illusion of space, making your dining area appear
            larger and more open. Here are some practical yet stylish options:
          </p>
          <ul>
            <li className="lists">
              Dining table design in glass with minimalistic metal frames for a
              chic, modern look that speaks of sophistication and simplicity.
            </li>
            <li className="lists">
              Glass top wooden dining table design that balances the modernity
              of glass with the warmth of wood, creating a harmonious fusion of
              materials.
            </li>
            <li className="lists">
              Frosted glass tables for a subtle, elegant touch that adds privacy
              while maintaining a light and airy feel, perfect for modern homes
              with a minimalist design ethos.
            </li>
            <li className="lists">
              Coloured glass tables that add a pop of colour to your dining
              room, available in hues like emerald green, royal blue, smokey
              grey and more for a unique and contemporary twist.
            </li>
          </ul>
          <p className="home-setting">
            Glass tables are easy to clean and maintain.The transparency of
            glass can also highlight other elements of your dining room, such as
            a beautiful rug or a designer chandelier. The reflective surface of
            glass tables can add a sense of brightness and openness to home
            interiors.
          </p>
        </div>

        <img src="./images/marble_table.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">
            3. The Richness of Contemporary Italian Marble
          </p>
          <p className="home-setting">
            For a truly luxurious dining experience, nothing compares to the
            grandeur of Italian marble dining table design. Marble tables are
            not only visually stunning but also incredibly durable, standing the
            test of time. Consider the following designs to add a touch of
            opulence to your home:
          </p>
          <ul>
            <li className="lists">
              Dining table marble top in classic white with natural veining for
              a timeless look that exudes elegance and sophistication.
            </li>
            <li className="lists">
              Marble tables with metal accents in gold or brass for a
              contemporary twist, creating a striking contrast that enhances the
              table's luxurious appeal.
            </li>
            <li className="lists">
              Custom-shaped marble tables that serve as a statement piece in
              your dining room, reflecting your unique style and taste.
            </li>
            <li className="lists">
              Mixed material designs that combine marble with other luxurious
              elements like glass or wood, creating a table that is both
              functional and artistically intriguing.
            </li>
          </ul>
          <p className="home-setting">
            Marble tables are synonymous with luxury and sophistication, making
            them a perfect choice for those who appreciate the finer things in
            life. The cool, smooth surface of marble also makes it a pleasant
            choice for hot climates, adding to its appeal. Opt for colours like
            classic white, bold black, or even unique green or pink marble to
            make a striking statement.
          </p>
        </div>

        <div>
          <p className="suit-head">4. Smart Folding Dining Tables </p>
          <p className="home-setting">
            In today's dynamic living spaces, flexibility and functionality are
            key. A folded dining table design offers the perfect solution for
            those who need to maximize their space without compromising on
            style. These tables can be easily expanded or folded down, catering
            to different needs:
          </p>
          <ul>
            <li className="lists">
              Foldable wooden tables with extendable sections for added
              convenience, allowing you to adjust the size of the table to fit
              the occasion.
            </li>
            <li className="lists">
              Space-saving designs that blend seamlessly with your existing
              decor, providing a practical solution for smaller homes or
              apartments. This Innovative mechanisms allows easy transformation
              from a compact table to a full-sized dining setup, ensuring that
              you always have the perfect table size for any gathering.
            </li>
          </ul>
          <p className="home-setting">
            Folded tables are ideal for urban homes where space is at a premium,
            providing both practicality and elegance. The versatility of these
            tables ensures that you can always make the most of your dining
            space, whether you're hosting a large dinner party or enjoying a
            quiet meal with your family. Designs that incorporate hidden storage
            options add an extra layer of functionality.
          </p>
        </div>

        <img src="./images/two-marble.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">5. Unique Dining table designs</p>
          <p className="home-setting">
            For homeowners who desire a dining table that stands out as a unique
            piece of art, consider designs made from exotic and unconventional
            materials. These tables can serve as conversation starters and focal
            points in your dining room:
          </p>
          <ul>
            <li className="lists">
              Reclaimed wood dining table design that uses salvaged timber,
              offering a rustic charm and an eco-friendly choice.
            </li>
            <li className="lists">
              Tables made from petrified wood, which is fossilized over
              thousands of years, providing a one-of-a-kind natural beauty.
            </li>
            <li className="lists">
              Resin tables that incorporate colourful or transparent resin with
              wood or other materials, creating stunning and artistic designs.
            </li>
            <li className="lists">
              Metallic tables crafted from copper or brass, offering a luxurious
              and industrial-chic aesthetic.
            </li>
          </ul>
          <p className="home-setting">
            These tables are perfect for those who appreciate craftsmanship and
            want their dining room to reflect their unique style. Each piece
            tells a story, adding depth and character to your dining space.
          </p>
        </div>

        <div>
          <p className="suit-head">FINAL THOUGHTS</p>
          <p className="home-setting">
            Choosing the right luxury dining table for your home involves
            considering your personal style, space, interior theme and
            functional needs. Whether you prefer the timeless charm of wood, the
            sleek modernity of glass, the richness of marble, or the unique
            allure of exotic materials, there is always a perfect table out
            there for you.
          </p>
          <p className="home-setting">
            In unveiling these 5 modern dining tables designs, Goldnest
            invites you to reimagine your dining space as a bastion of luxury
            and personalised elegance. Each table, with its distinct design and
            exquisite craftsmanship, stands ready to anchor your meals and
            memories with grace and style. Our commitment to bespoke design
            ensures that your home will be adorned with a piece that speaks to
            your individuality and your pursuit of the finer things in life.
          </p>
        </div>

        <button type="button" className="contact-us">
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              What are the latest trends in dining table designs offered by
              Goldnest for 2025?
            </p>
            <button onClick={handleData} className="plussub">
              {trend ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {trend && (
              <p className="fqa-ans">
                At Goldnest, we stay ahead of the curve with the latest
                dining table design trends. Our collection features a mix of
                traditional and contemporary styles, including modern dining
                table designs with sleek, minimalist aesthetics and luxury
                dining tables crafted from unique materials like Italian marble
                and tempered glass. We also offer wood dining table designs with
                natural finishes and live edges, bringing a rustic yet elegant
                touch to your dining space.
              </p>
            )}

            <p className="horz-line"></p>
            <div className="fqa-que">
              <p>
                How do I choose the right dining table size for my dining room?
              </p>
              <button onClick={handleStyle} className="plussub">
                {style ? <RiSubtractLine /> : <GoPlus />}
              </button>
            </div>
            <div>
              {style && (
                <p className="fqa-ans">
                  Choosing the right dining table size from Goldnest
                  involves considering the dimensions of your dining room and
                  the number of people you typically host. Our experts can help
                  you measure your space and recommend tables that provide ample
                  room for chairs to be pulled out comfortably. Whether you need
                  a six-seater, eight-seater, or a customized size, we have the
                  perfect solution for your home.
                </p>
              )}
            </div>

            <p className="horz-line"></p>
            <div className="fqa-que">
              <p>
                What customization options does Goldnest offer for dining
                tables?
              </p>
              <button onClick={handleQuality} className="plussub">
                {quality ? <RiSubtractLine /> : <GoPlus />}
              </button>
            </div>
            <div>
              {quality && (
                <p className="fqa-ans">
                  We pride ourselves on offering extensive customization options
                  to ensure your dining table perfectly fits your style and
                  needs. You can choose from various materials, finishes, and
                  designs, including glass top wooden dining table designs and
                  dining tables with marble tops.
                  <br></br>
                  <br></br>
                  We also offer bespoke options where you can select the exact
                  dimensions, shape, and additional features like extendable
                  sections or built-in storage. Our team works closely with you
                  to create a dining table that complements your home decor,
                  reflects your personality and meets your functional
                  requirements.
                </p>
              )}
            </div>

            <p className="horz-line"></p>
            <div className="fqa-que">
              <p>
                How do I maintain the quality and appearance of my dining table?
              </p>
              <button onClick={handleOptions} className="plussub">
                {options ? <RiSubtractLine /> : <GoPlus />}
              </button>
            </div>
            <div>
              {options && (
                <p className="fqa-ans">
                  Maintaining the quality and appearance of your luxury dining
                  table from Goldnest involves regular cleaning and care.
                  Care instructions vary based on materials but generally
                  include using coasters, wiping spills promptly, and avoiding
                  abrasive cleaners to maintain the pristine condition.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
