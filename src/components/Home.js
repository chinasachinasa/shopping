import polo1 from '../images/polo1.jpg'
import polo2 from '../images/polo2.jpg'
import polo3 from '../images/polo3.png'
import sneaker1 from '../images/sneaker1.jpg'
import sneaker2 from '../images/sneaker2.jpg'
import sneaker3 from '../images/sneaker3.jpg'



const Home = () =>{
    return(

        <>

    <div className="container">
        <div className="box">
          <img src={polo1} alt="red polo" />
        </div>
        <div className="box">
          <img src={polo2} alt="two in one polo" />
        </div>
        <div className="box">
          <img src={polo3} alt="black polo" />
        </div>
        <div className="box">
          <img src={sneaker1} alt="white sneaker" />
        </div>
        <div className="box">
          <img src={sneaker2} alt="black and white sneaker" />
        </div>
        <div className="box">
          <img src={sneaker3} alt="blue black sneaker"/>
         </div> 
      </div>
        </>

    )
}


export default Home;