import {Link} from "react-router-dom";

export default function Body(){
    return(
        <div className="body">
           <div className="furniture-sec">
            <img src="./images/dining-place.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">HOW TO CHOOSE THE PERFECT <br></br>DINING CHAIR FOR YOUR DINING<br></br> ROOM </p>
            <p className="readme">If you're here, you’re probably in the midst of finding 
                that perfect dining chair<br></br> for your dining area. The dining
                 room is more than just a place to eat; it’s a<br></br> hub of family
                  discussions, hearty la...</p>
          
           <Link to="/dining" className="more"><u>Read More</u></Link>
           </div>
           </div>
           <div className="furniture-sec1">
            <img src="./images/modern-dining.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">TOP 5 MODERN DINING TABLE<br></br>DESIGN TO TRANSFORM YOUR HOME </p>
            <p className="readme">Imagine a beautifully set dining table, delicious food, and loved ones gathered<br></br> for your dining area. The dining
            around, sharing stories and laughter.<br></br> The dining table is more than just a piece of furniture; it is the centrepiece ...</p>
          
           <Link to="/moderndining" className="more"><u>Read More</u></Link>
           </div>
           </div>
           <div className="furniture-sec1">
            <img src="./images/sofa.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">FROM ORDINARY TO EXTRAORDINARY: <br></br>SELECTING THE BEST SOFA SET FOR<br></br> YOUR LIVING ROOM </p>
            <p className="readme">The living room, being the heart of the home, demands furniture
                 that not only<br></br> looks appealing but also offers comfort and functionality.
                 Whether you're<br></br> entertaining guests, relaxing with a book, or...</p>
          
           <Link to="/sofaliving" className="more"><u>Read More</u></Link>
           </div>
           </div>
           <div className="furniture-sec1">
            <img src="./images/home-decor.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">MASTER THE ART OF FURNITURE <br></br>COLOR COMBINATION: ELEVATE YOUR<br></br> HOME DECOR </p>
            <p className="readme">Colour is the soul of any room, and the right furniture colour combination 
                can <br></br>turn an ordinary space into an extraordinary masterpiece.
                 Whether you're<br></br> starting from scratch or refreshing an existi...</p>
          
           <Link to="/homedecor" className="more"><u>Read More</u></Link>
           </div>
           </div>

           <div className="furniture-sec1">
            <img src="./images/dress-table.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">UNLOCKING THE POTENTIAL: HOW<br></br>CUSTOM FURNITURE TRANSFORMS<br></br> SMALL LIVING SPACES </p>
            <p className="readme">Contrary to the popular belief - Living in a smaller space doesn’t
                 mean<br></br> sacrificing style and functionality. In fact, 
                it’s an opportunity to get creative<br></br> and make the most out of every inch. Custom...</p>
          
           <Link to="/dresstable" className="more"><u>Read More</u></Link>
           </div>
           </div>

           <div className="furniture-sec1">
            <img src="./images/black.jpeg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">7 REASONS WHY SHOULD YOU INVEST <br></br>IN DESIGNER FURNITURE </p>
            <p className="readme">In a world where standardization often takes center stage,
                 there is<br></br> something profoundly alluring about owning designer furniture.
                 It's not<br></br> just about having a piece that stands out; it embodies un...</p>
          
           <Link to="/designerfurniture" className="more"><u>Read More</u></Link>
           </div>
           </div>

           <div className="furniture-sec1">
            <img src="./images/fabric-sofa.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">SELECTING THE BEST SOFA <br></br>UPHOLSTERY FABRIC FOR YOUR HOME </p>
            <p className="readme">Thinking of reupholstering your couch or maybe choosing fabric
                 for a new one?<br></br> Well you are in the right place! When deciding on the right upholstery,
                 <br></br>it is not only based on aesthetics but also com...</p>
          
           <Link to="/fabricsofa" className="more"><u>Read More</u></Link>
           </div>
           </div>

           <div className="furniture-sec1">
            <img src="./images/modern-fur.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">MUST-HAVE MODERN LIVING ROOM <br></br>FURNITURE </p>
            <p className="readme">Your living room is the heart of your home, a space where you
                 gather with<br></br> loved ones, entertain guests, and unwind after a long day.
                 It’s essential to<br></br> furnish this space thoughtfully, blending comf...</p>
          
           <Link to="/modernfur" className="more"><u>Read More</u></Link>
           </div>
           </div>

           <div className="furniture-sec1">
            <img src="./images/green.jpg" className="dining-img" alt="dining-image"></img>
            <div className="desc">
            <p className="suggestion">TRENDING IN LUXURY FURNITURE: A<br></br>LOOK AT 2025'S MUST-HAVE DESIGNS </p>
            <p className="readme">The world of luxury furniture is exciting and evolving at a rapid pace.
                <br></br> Today the landscape of furniture design is now dominated 
                by the lifestyle<br></br> and personalities of its owners, to ensure every co...</p>
          
           <Link to="/furniture-sec" className="more"><u>Read More</u></Link>
           </div>
           </div>

        </div>
    )
}