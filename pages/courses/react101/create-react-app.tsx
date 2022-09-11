/* eslint-disable @next/next/no-img-element */
import mainStyles from "../../../styles/Home.module.css";
import courseStyles from "../../../styles/Courses.module.css";
import CodeSnippet from "../../../components/Courses/CodeSnippet";
import NextButton from "../../../components/Courses/NextButton";

export default function CreateReactApp(): JSX.Element {
    return(
        <div className={mainStyles.main}>
            <h1 className={courseStyles.courseCard} style={{ width: "auto" }}>How to Initialize a React Project</h1>
            <p className={courseStyles.courseCard} style={{ width: "auto" }}>Pre-Requisites</p>
            <div className={courseStyles.textBlock} style={{ padding: 40 }}>
                <div>
                    <p style={{ width: "50%" }}>First, make sure you have Node.js installed on your computer.</p>
                    <img src={"https://i.imgur.com/wr5G8l7.png"} alt="nodejs logo" width={"20%"}/>
                </div>
                <div>
                    <a href="https://nodejs.org/en/" target={"_blank"} rel="noreferrer">
                        <p>Click here if you need to install it.</p>
                    </a>
                </div>
            </div>
            <p className={courseStyles.courseCard} style={{ width: "auto" }}>Creating React Project</p>
            <div className={courseStyles.textBlock} style={{ padding: 40 }}>
                <p style={{ width: "50%" }}>Open your terminal/powershell and call this command. <span>my-app</span> will be the name of your project.</p>
                <CodeSnippet snippet="npx create-react-app my-app --template typescript" />
                <div>
                    <p style={{ width: "50%" }}>This will create a React app with Typescript pre-installed.</p>
                    <a href="https://create-react-app.dev/docs/getting-started#creating-a-typescript-app" target={"_blank"} rel="noreferrer">
                        <p>Click here to read the documentation.</p>
                    </a>
                </div>
            </div>
            <NextButton label="Let's get to the Project 👉" url={"react-project"}/>
        </div>
    );
}
