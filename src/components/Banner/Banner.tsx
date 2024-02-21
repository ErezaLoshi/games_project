
import './Banner.css'

const reactDescriptions=['updated','info',]


function getRandomInt(max:any){
  return Math.floor(Math.random() * (max+1))
}
const desc=reactDescriptions[getRandomInt(1)];

const Banner = ()=>{
  
  
  return(
    <div className='banner'>
      <div className='banner-info'>
        <h1>Get {desc} about the games you like</h1>
        <a href="#">Explore</a>

      </div>
    </div>
  )
  }
  export default Banner;