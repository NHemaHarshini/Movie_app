import react from "react";
import {Link} from "react-router-dom"; 
import Card from "./Cards";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
 
const Main=()=> {
        return (
            <>
            <div className="header">
                <nav>
                    <ul>
                        <li><a href="popular">Popular</a></li>
                        <li><a href="kids">Kids</a></li>
                        <li><a href="drama">Drama</a></li>
                        <li><a href="comedie">Comedie</a></li>
                        <li><a href="action">Action</a></li>
                    </ul>
                </nav>
                <form>
                    <div className="Search-btn">
                            <input type="text" placeholder="Enter movie name" className="inputText">
                            </input>
                            <button>
                                <i class="fas fa-search"></i>
                            </button>
                    </div>
                </form>
            </div>
            <div className="container">
                    <Card/>
                    <Card1/>
                    <Card2/>
                    <Card3/>
                    <Card4/>
                    <Card5/>
            </div>
            </>
        )
    }
export default Main;