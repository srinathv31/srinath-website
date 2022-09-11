/* eslint-disable @next/next/no-img-element */
import mainStyles from "../../../styles/Home.module.css";
import courseStyles from "../../../styles/Courses.module.css";
import NextButton from "../../../components/Courses/NextButton";

export default function Intro(): JSX.Element {
    const reactLogoImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png";
    
    return(
        <div className={mainStyles.main}>
            <div className={courseStyles.courseCard} style={{ width: "auto" }}>
                <span>
                    <img src={reactLogoImg} alt="React Icon" height={50}/>
                </span>
                <h1>Learn React 101</h1>
            </div>
            <p>Welcome to the course!</p>
            <p>By the end of this project you will know how to:</p>
            <ul className={courseStyles.courseObjectives}>
                <li>{"Create and Initialize a React App ✅"}</li>
                <li>{"Style a Simple Web Page 🧑‍🎨"}</li>
                <li>{"Use React Hooks to Manage State of App's Data 🧐"}</li>
                <li>{"Create a Cracked Web App to Show Off 😎"}</li>
            </ul>
            <NextButton label="Let's Start ➡️" url={"what-is-react"} img={reactLogoImg} />
        </div>
    );
}
