/* eslint-disable @next/next/no-img-element */
import mainStyles from "../../../styles/Home.module.css";
import courseStyles from "../../../styles/Courses.module.css";
import CodeSnippet from "../../../components/Courses/CodeSnippet";

export default function ReactProject(): JSX.Element {
    return(
        <div className={mainStyles.main} style={{ minHeight: "120vh" }}>
            <h1 className={courseStyles.courseCard} style={{ width: "auto" }}>Project #1: Complex Counter</h1>
            <p className={courseStyles.courseCard} style={{ width: "auto" }}>Getting Started</p>
            <div className={courseStyles.textBlock} style={{ padding: 40 }}>
                <p style={{ width: "80%" }}>The <span>App.tsx</span> file is your <span>main</span> file. This is the first file that React calls to render your application.</p>
                <p>Note: <span>We will go more in-depth on how React renders an application.</span> But for now, go ahead and add text and edit whatever you want in the App.tsx file to get a feel.</p>
                <CodeSnippet snippet="To run application, type in: npm start" />
            </div>
            <p className={courseStyles.courseCard} style={{ width: "auto", backgroundColor: "white", color: "black" }}>Project Requirements</p>
            <ul className={courseStyles.projectObjectives}>
                <li>{"Create 3 buttons: Increment, Decrement, Reset"}</li>
                <li>{"Create a text input with a button called \"Set Count\""}</li>
                <li>{"Create a useState called \"count\" of type \"number\""}</li>
                <li>{"Create a way to display the count value on the screen"}</li>
                <li>{"For each button, create functionality to alter the count state"}</li>
                <li>{"Create functionality to reset the count state to 0"}</li>
                <li>{"Create functionality to set count to the user's number input"}</li>
            </ul>
        </div>
    );
}
