import { useState } from "react";
import "../css/DiningDesc.css";
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";

export default function SofaLiving() {
  const [material, setMaterial] = useState(false);
  const [clean, setClean] = useState(false);
  const [replace, setReplace] = useState(false);
  const [services, setServices] = useState(false);
  const [visit, setVisit] = useState(false);
  function handleMaterial() {
    setMaterial(!material);
  }
  function handleClean() {
    setClean(!clean);
  }
  function handleReplace() {
    setReplace(!replace);
  }
  function handleServices() {
    setServices(!services);
  }
  function handleVisit() {
    setVisit(!visit);
  }
  return (
    <div className="main">
      <div>
        <img src="./images/sofa.jpg" className="dining-desc-img"></img>
      </div>

      <div className="dining-desc">
        <div className="white-space"></div>
        <p className="dining-intro">
          From Ordinary to Extraordinary: Selecting the Best Sofa Set for Your
          Living Room
        </p>

        <p className="dine-desc">
          The living room, being the heart of the home, demands furniture that
          not only looks appealing but also offers comfort and functionality.
          Whether you're entertaining guests, relaxing with a book, or enjoying
          a family movie night, the right sofa set can make all the difference.{" "}
        </p>
        <p className="dine-desc">
          Among all living room furniture, the sofa set stands out as the
          centrepiece, setting the tone for the entire space. Choosing the
          perfect sofa set can be daunting, but fear not! At Maanavi Homes, we
          understand the importance of finding the perfect sofa that combines
          comfort, style, and functionality. This guide will walk you through
          everything you need to know to choose the perfect sofa set for your
          living room that meets your needs and enhances your living space.{" "}
        </p>

        <img src="./images/horizontal_images.webp" className="fabrics"></img>

        <p className="suit-head">1. Understand Your Space</p>
        <p className="home-setting">
          Before diving into styles and designs, it's essential to understand
          the dimensions and layout of your living room. Measure your space
          meticulously to determine the size of the sofa set that will fit
          comfortably without overwhelming the room. Consider the placement of
          doors, windows, and other furniture to ensure the sofa complements the
          flow of the room. This will help you decide on the size of the sofa
          set that will best fit your space without overcrowding it.
        </p>

        <img
          src="./images/Blog_images_Horizonatal.webp"
          className="fabrics"
        ></img>

        <div>
          <p className="suit-head">2. Identifying Your Style</p>
          <p className="home-setting">
            Your sofa should reflect your personal style and blend seamlessly
            with your home. Are you drawn to modern, minimalist designs, or do
            you prefer something more classic and ornate? Maanavi Homes offers a
            wide range of styles, from modern luxury sofa sets to elegant royal
            sofas and chic contemporary sofas.
          </p>
          <p className="home-setting">
            Knowing your style preference will narrow down your choices and make
            the selection process easier. Our curated collection ensures that
            your furniture is not just a place to sit, but a reflection of your
            personal style.
          </p>
        </div>

        <img src="./images/two-sofa.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">3. Choosing the Right Configuration</p>
          <p className="home-setting">
            The configuration of your sofa set is crucial for maximizing comfort
            and space utility. It could be:
          </p>
          <ul>
            <li className="lists">
              L-Shaped Sofa Set: Perfect for corner spaces, this design provides
              ample seating and can help define the living area in an open-plan
              layout.
            </li>
            <li className="lists">
              U-Shaped Sofa Design: Ideal for larger rooms, offering plenty of
              seating and creating a cozy, enclosed feel.
            </li>
            <li className="lists">
              I-Shaped Sofa Set: Best for smaller spaces, providing a sleek and
              streamlined look.
            </li>
          </ul>
          <p className="home-setting">
            Consider your room’s shape and how you use the space to decide on
            the best configuration.
          </p>
        </div>

        <img src="./images/made_in_india.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">4. Selecting the Right Material</p>
          <p className="home-setting">
            The <u>material of your sofa </u>influences both its aesthetic
            appeal and durability. Here are some popular options:
          </p>
          <ul>
            <li className="lists">
              Leather Sofa Set: A luxury leather sofa set exudes sophistication
              and is easy to clean, making it perfect for families.
            </li>
            <li className="lists">
              Fabric Sofa: Available in a wide range of colours and textures,
              fabric sofas offer versatility and comfort.
            </li>
            <li className="lists">
              Wooden Sofa Set: Provides a classic, sturdy option with a timeless
              appeal.
            </li>
          </ul>
        </div>

        <img src="./images/fabric-colors.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">5. Customization for a Personal Touch</p>
          <p className="home-setting">
            Customization allows you to create a sofa that perfectly matches
            your needs and style. At Maanavi Homes, we emphasize customization.
            You can choose every details, from the fabric, colour, cushion
            firmness, and even the type of legs, ensuring your sofa is truly
            one-of-a-kind. This personalized approach ensures that your sofa
            fits perfectly with your lifestyle and preferences.
          </p>
        </div>

        <div>
          <p className="suit-head">6. Comfort and Functionality</p>
          <p className="home-setting">
            While style is important, comfort should never be compromised. The
            primary purpose of a sofa is to provide a comfortable place to sit
            and relax. We at Maanavi Homes Manufacture Premium Furniture with
            comfort in mind, featuring supportive cushioning, ergonomic designs,
            and soft, luxurious fabrics. Take the time to sit and test out
            different sofas to find one that feels just right for you.
          </p>
          <p className="home-setting">Consider features such as:</p>
          <ul>
            <li className="lists">
              Recliner Sofa Set: Perfect for ultimate relaxation, ideal for
              movie nights.
            </li>
            <li className="lists">
              Lounge Sofa Set: Adds a touch of luxury and comfort, perfect for
              lounging and unwinding
            </li>
            <li className="lists">
              Sofa Bed: Great for small spaces or homes that frequently host
              guests.
            </li>
          </ul>
        </div>
        <img src="./images/black_white.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">7. Latest Trends and Designs</p>
          <p className="home-setting">
            In the dynamic world of interior design, staying attuned to the
            <u> latest trends</u> can breathe new life into your living room and
            ensure your sofa choice is both stylish and contemporary.
          </p>
          <p className="home-setting">
            As design aesthetics evolve, they offer fresh perspectives and
            innovative ideas that can transform your space. Staying updated with
            the latest sofa trends can inspire your choice. This could include
            Modern Sofa Set Designs, Artistic Designer Sofas and more.
          </p>
        </div>

        <div>
          <p className="suit-head">8. Quality and Budget</p>
          <p className="home-setting">
            Investing in a high-quality sofa set ensures it will last for years
            to come. At Maanavi Homes, we prioritize using the finest materials
            and expert craftsmanship to create sofas that stand the test of
            time. While keeping your budget in mind, remember that a sofa set
            for your living room is an investment that reflects your taste and
            lifestyle and will ensure it remains a cherished part of your home
            for years to come.
          </p>
        </div>

        <img src="./images/blog_2_images_6.webp" className="fabrics"></img>

        <div>
          <p className="suit-head">Final Thoughts</p>
          <p className="home-setting">
            Choosing the perfect sofa set for your living room involves
            considering your space, style, material, comfort, colour, and
            budget. At Maanavi Homes, we understand the importance of finding
            the right balance between aesthetics and functionality. Our{" "}
            <u>custom furniture store</u> offers a wide range of options to
            ensure you find the ideal sofa set that not only looks great but
            also meets your comfort and quality expectations.
          </p>
        </div>

        <button type="button" className="contact-us">
          CONTACT US
        </button>

        <div className="fqa-section">
          <p className="fqa">FQAS</p>
          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Which sofa material is best for pets and children?</p>
            <button onClick={handleMaterial} className="plussub">
              {material ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          {material && (
            <p className="fqa-ans">
              Leather and microfiber sofas are great options for homes with pets
              and children. They are durable, easy to clean, and can withstand
              the wear and tear of daily use. Leather especially ages well,
              developing a unique patina over time.
            </p>
          )}

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How do I maintain and clean my sofa?</p>
            <button onClick={handleClean} className="plussub">
              {clean ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {clean && (
              <p className="fqa-ans">
                The care and maintenance of your sofa depend on the material.
                For leather sofas, regular dusting and occasional treatment with
                a leather conditioner are recommended. Fabric sofas may require
                vacuuming and spot cleaning. Always refer to the manufacturer’s
                care instructions for the best results.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>How often should I replace my sofa?</p>
            <button onClick={handleReplace} className="plussub">
              {replace ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {replace && (
              <p className="fqa-ans">
                The lifespan of a sofa depends on its construction, material,
                and how heavily it’s used. On average, a quality sofa can last
                between 7 to 15 years. Consider replacing your sofa when it’s no
                longer comfortable, shows significant wear, or no longer fits
                your style.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Does Maanavi Homes offer delivery and installation services?</p>
            <button onClick={handleServices} className="plussub">
              {services ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {services && (
              <p className="fqa-ans">
                Yes, we provide comprehensive delivery and installation services
                to ensure your new sofa is set up perfectly in your home.
              </p>
            )}
          </div>

          <p className="horz-line"></p>
          <div className="fqa-que">
            <p>Can I visit your showroom to see the sofas in person?</p>
            <button onClick={handleVisit} className="plussub">
              {visit ? <RiSubtractLine /> : <GoPlus />}
            </button>
          </div>
          <div>
            {visit && (
              <p className="fqa-ans">
                Yes, we invite you to visit our showroom to experience the
                comfort and quality of our sofa sets first-hand. Our team will
                be happy to assist you in choosing the perfect piece for your
                home.
              </p>
            )}
          </div>

          <p className="horz-line"></p>

        </div>
      </div>
    </div>
  );
}
