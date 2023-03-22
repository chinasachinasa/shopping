import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'






const Footer = () =>{
    return(

        <>

<footer>
      <div className="redd">
        <div className="store">
          <h3>Redd Store</h3>
        </div>

        <p className="square">If you have a closet full of clothes but not a single thing to wear,<br /> perhaps you just need some inspiration.<br /> We looked to some of the most iconic designers and couturiers for their thoughts on dressing in style. <br />Below, find 20 of the best quotes about fashion.</p>
      </div>

      <div className="site-map">
        <ul>
          <div className="site">
            <h3>Site map</h3>
          </div>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">New Arrival</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="social-media">
        <div className="container">
          <h3>Connect with us</h3>
        </div>

        <div className="socials">
          <a href="#"><img src={facebook} width="30px" alt="Facebook" /></a>
          <a href="#"><img src={twitter} width="30px" alt="Twitter" /></a>
        </div>
      </div>

    </footer>

        
        </>

    )
}


export default Footer;