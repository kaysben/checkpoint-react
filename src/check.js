import kak from './arrd.png';
import './style.css'


function Cheeck(){
    return(
        <div className="App">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
   
   <h1 class="title red">react checkpoint</h1>
   
   <br/>
   
   <img src={kak} alt = 'me'/>
   
   <br/>
   
   <img src="/arr.png" alt ="me"/>
   
   </div>
   
   <video width="320" height="240" controls>
   
   <source src="myVideo.mp4"  type="video/mp4" alt = "video" />
   
   </video>
       </div>
    )
}
export default Cheeck