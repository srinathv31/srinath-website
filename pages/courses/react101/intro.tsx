/* eslint-disable @next/next/no-img-element */
import mainStyles from "../../../styles/Home.module.css";

export default function Intro(): JSX.Element {
    const reactLogoImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png";
    
    return(
        <div className={mainStyles.main}>
            <h1>Learn React 
                <span>
                    <img src={reactLogoImg} alt="React Icon" height={50}/>
                </span>101</h1>
            <p>Welcome to the course</p>
        </div>
    );
}
