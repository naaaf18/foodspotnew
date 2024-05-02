import { useState } from "react"
import { Link } from "react-router-dom"
const Heading =()=>{
  
    return (
        <a href="/">
        <img className="logo"alt='image here 'src="https://fpimages.withfloats.com/tile/632972807f42460001be357d.png">

        </img>
        </a>
    )
}

const HeaderComponent=()=>{
    const [isLogged,setIsLogged] = useState(false)
    return(
        <div className="header">
            <Heading/>
        <div className="nav-items">
            <ul>
                <li><Link to='/'>Home</Link></li>
               <li> <Link to='/About'>About us</Link></li> 
               <li> <Link to='/Contact'>Conatact us</Link></li> 

                <li>Cart</li>

            </ul>
        </div>
        { (isLogged)? <button onClick={()=>setIsLogged(false)}>logout</button>:<button onClick={()=>setIsLogged(true)} >login</button>}

        </div>
    )
}
export default HeaderComponent;