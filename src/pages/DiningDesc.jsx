import { useState } from "react";
import "../css/DiningDesc.css";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";
export default function DiningDesc() {
  const [data, showData] = useState(false);
  function handleans() {
    showData(!data);
  }

  const [questyle, setQueStyle] = useState(false);
  function handleStyle() {
    setQueStyle(!questyle);
  }

  const [quemat, setQueMaterial] = useState(false);

  function handleMaterial() {
    setQueMaterial(!quemat);
  }

  const [cushion, setCushion] = useState(false);

  function handleCushion() {
    setCushion(!cushion);
  }

  const [dining, setDining] = useState(false);
  function handleDining() {
    setDining(!dining);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/white-dining.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          How to Choose the Perfect Dining Chair for Your Dining Room
        </p>
        <p className="dine-desc">
          If you're here, you’re probably in the midst of finding that perfect
          dining chair for your dining area. The dining room is more than just a
          place to eat; it’s a hub of family discussions, hearty laughs, and the
          creation of memories that last a lifetime. Central to this hub is the
          dining table,surrounded by an often overlooked but essential element:
          the perfect dining chairs.
        </p>

        <p className="dine-desc">
          Of course, 'perfect' can mean different things: comfort is crucial,
          and choosing dining chairs that enhance the visual appeal and elegance
          of your home is equally important. This can be a bit challenging,
          which is why we've created this 6 step comprehensive guide to help you
          select and purchase the dining chairs that best suit your needs.
        </p>

        <div className="box-img-div1">
          <img src="./images/chair1.webp" className="box-img"></img>
          <img src="./images/chair2.webp" className="box-img"></img>
          <img src="./images/chair3.webp" className="box-img"></img>
        </div>
        <div className="box-img-div2">
          <img src="./images/chair4.webp" className="box-img"></img>
          <img src="./images/chair5.avif" className="box-img"></img>
          <img src="./images/chair6.webp" className="box-img"></img>
        </div>

        <p className="suit">1. Suit Your Lifestyle</p>
        <p className="questions-head">
          Before diving into styles and materials, it's essential to assess your
          specific needs. Consider the following questions:
        </p>
        <ol>
          <li className="que">
            How often do you use your dining room? If you frequently host large
            gatherings, opt for chairs that are both comfortable and easy to
            clean.
          </li>
          <li className="que">
            Who will be using the chairs? If you have children, consider durable
            and stain-resistant fabrics.
          </li>
          <li className="que">
            What is your dining room's primary function? For multipurpose
            spaces, choose versatile chairs that can double as extra seating for
            other areas of your home.
          </li>
        </ol>

        <img src="./images/all-chair.webp" className="all-chair"></img>

        <p className="suit">
          2. Prioritizing Comfort and Ergonomics in dimension
        </p>
        <p className="questions-head">
          Comfort should be the most important when choosing dining chairs. The
          way it supports your body - can impact your dining experience. Looks
          can be deceiving, so test for yourself – can you sit comfortably on
          this chair and have a great time without getting up?
        </p>
        <p className="questions-head">
          When choosing dining chairs, start by measuring the width at its
          widest point, which could be the backrest or the seat.
        </p>
        <ul>
          <li className="que">
            For optimal comfort, an armless dining chair should be around 22
            inches wide and 24 inches deep. This size provides ample space
            without feeling cramped.
          </li>
          <li className="que">
            Avoid chairs smaller than 17 inches by 20 inches, as they may not
            offer the comfort you need.
          </li>
        </ul>

        <div className="advice">
          <p className="grey-line"></p>
          <p className="designer-advice">
            Designers' Advice: If your dining area is compact, consider armless
            chairs or ones with slimmer<br></br> profiles to maximise space
            without compromising comfort.
          </p>
        </div>

        <ul>
          <li className="que">
            Most dining chairs are designed with a seat height of 18 to 20
            inches from the floor. This height allows for a comfortable distance
            between the seat and the table, typically providing 10 to 12 inches
            of space between them, allowing sufficient legroom and allows for a
            relaxed seating posture.
          </li>
          <li className="que">
            The height of the backrest should be between 14 to 18 inches above
            the seat. A well-designed backrest that follows the natural curve of
            your back can enhance comfort. Consider inclined backrests and
            padded or upholstered chairs for added support.
          </li>
        </ul>
        <p className="que">
          {" "}
          If you’re accommodating knee patients, toddlers, or older adults,
          having at least one armchair at the dining table can be incredibly
          beneficial. It offers additional support and makes it easier to get in
          and out of the chair.
        </p>

        <img src="./images/fabric-colors.webp" className="fabrics"></img>

        <div>
          <p className="suit">3. Exploring Materials and Fabrics</p>
          <p className="questions-head">
            The material of your dining chair significantly impacts its
            durability, comfort, and style. Here are some less commonly
            discussed points:
          </p>
          <ul>
            <li className="que">
              Consider chairs made from sustainable materials such as bamboo or
              reclaimed wood. These options are not only environmentally
              friendly but also add a unique touch to your dining room.
            </li>
            <li className="que">
              Look for performance fabrics designed for high durability and easy
              cleaning, such as Crypton or Sunbrella. These are ideal for homes
              with children or pets.
            </li>
          </ul>
          <p className="que">
            Combining different materials, like a wooden frame with a leather
            seat and more, can really create a visually appealing and modern
            look for your dining room.
          </p>
        </div>

        <div>
          <img
            src="./images/traingle-img-1.webp"
            className="traingle-img"
          ></img>
        </div>

        <div>
          <p className="suit">4. Matching Your Dining Room Style</p>
          <p className="que">
            Dining chairs that complement, rather than match, the{" "}
            <u>dining table are currently in vogue</u>. This could be tricky but
            look for a common element like color, shape, or material that ties
            the chairs and table together. For instance, mismatched geometric
            chairs can be unified by painting them the same color or using the
            same upholstery fabric.
          </p>
          <div className="advice-2">
            <p className="short-grey-line"></p>
            <p className="designer-advice">
              Designers' Advice: Pair antique tables with modern chairs of
              similar leg styles for a seamless blend of periods and styles.
            </p>
          </div>
        </div>

        <div>
          <p className="suit">5. Choose durable and easy to maintain</p>
          <p className="questions-head">
            Selecting the right material for your dining chairs is crucial not
            only to reflect your lifestyle and aesthetic but also for
            practicality and maintenance. Each material brings a unique vibe to
            your dining space while requiring specific care to keep it looking
            its best.
          </p>
          <ul>
            <li className="que">
              Metal chairs can add a sleek, modern touch and a sense of
              lightness to your room. They are durable but need to be
              rust-resistant to ensure longevity.
            </li>

            <li className="que">
              Wooden chairs are timeless and versatile, offering a warm and can
              complement various interior styles. However, wood can change color
              over time and requires prompt cleaning of spills to prevent
              stains. Additionally, wood needs to be properly maintained to
              avoid scratches and water damage, which means regular polishing
              and careful handling.
            </li>
            <li className="que">
              Glass chairs, though less common, can add a unique and
              sophisticated look but come with the downside of visible
              fingerprints and smudges, requiring frequent cleaning.{" "}
            </li>
          </ul>
          <p className="que">
            For households with pets or children, non-upholstered chairs or
            those with performance fabric are often the best choice as they are
            easy to clean. Leather chairs, especially bonded or tufted
            varieties, and those made from cotton blends or Sunbrella fabrics,
            are also excellent for easy maintenance. If you prefer luxurious
            materials like chenille or velvet, consider using slipcovers that
            can be removed and cleaned easily.{" "}
          </p>
        </div>

        <img src="./images/whole-hall-img.webp" className="fabrics"></img>

        <div>
          <p className="suit">6. Practical Considerations</p>
          <p className="questions-head">
            Dining Area can be busy, which makes it important for us to consider
            certain practical aspects that are beyond aesthetics and comfort.{" "}
          </p>
          <ul>
            <li className="que">
              Opt for dining chairs that are easy to move around, especially if
              they serve multiple purposes. Chairs with open backrests or slat
              backs are easier to maneuver and handle. Solid or heavy-set chairs
              may be less convenient for frequent rearrangements.
            </li>
            <li className="que">
              Measure your dining area to ensure your chosen chairs fit
              comfortably around the table without overcrowding the space.{" "}
            </li>
            <li className="que">
              Set a budget before shopping and stick to it. High-quality dining
              chairs can be an investment, but in the long run they offer great
              value.
            </li>
          </ul>
          <p className="questions-head">
            This may seem a little overwhelming, which is why we suggest you
            customize your dining chair based on the dimensions of your dining
            table, and the overall theme of your dining room.{" "}
          </p>
        </div>

        <button type="button" className="contact-us">
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How do I determine the right size dining chair for my table?</p>
            <button onClick={handleans} className="plussub">
              {data ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {data && (
              <p className="fqa-ans">
                As a general rule, ensure there is at least 12 inches between
                the seat of the chair and the tabletop. Also, allocate about 24
                inches of space per chair at your dining table to ensure guests
                can dine comfortably without feeling crowded.
              </p>
            )}
          </div>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Can I mix and match different styles of dining chairs?</p>
            <button onClick={handleStyle} className="plussub">
              {questyle ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {questyle && (
              <p className="fqa-ans">
                Absolutely! Mixing and matching chair styles can add a dynamic
                and personalized touch to your dining room. Just ensure there’s
                a cohesive element, like color or material, that ties the chairs
                together.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>
              What materials are best for dining chairs in terms of durability?
            </p>
            <button onClick={handleMaterial} className="plussub">
              {quemat ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {quemat && (
              <p className="fqa-ans">
                Hardwoods like oak, maple, and walnut are known for their
                durability and are excellent choices for dining chairs. Metal
                chairs can also be very durable, while upholstered chairs
                provide comfort and a touch of elegance, though they may require
                more maintenance
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How important is seat cushioning in dining chairs?</p>
            <button onClick={handleCushion} className="plussub">
              {cushion ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {cushion && (
              <p className="fqa-ans">
                Cushioning is crucial for comfort, especially if you often have
                long meals or use your dining area as a workspace. Look for
                chairs with high-quality foam to ensure that the cushion retains
                its shape and comfort over time.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How can I ensure the dining chairs fit the room's style?</p>
            <button onClick={handleDining} className="plussub">
              {dining ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {dining && (
              <p className="fqa-ans">
                Consider the overall theme and color scheme of your dining room.
                Choose chairs that complement the environment, whether you’re
                going for a modern, traditional, or eclectic look. If in doubt,
                neutral colours and classic designs are usually a safe bet.
              </p>
            )}
          </div>
          <p className="horz-line"></p>
        </div>
      </div>
    </div>
  );
}
