/* eslint-disable @next/next/no-img-element */
import mainStyles from "../../../styles/Home.module.css";
import courseStyles from "../../../styles/Courses.module.css";
import CodeEditorSnippet from "../../../components/Courses/CodeEditorSnippet";
import { useState } from "react";
import NextButton from "../../../components/Courses/NextButton";

export default function WhatIsReact(): JSX.Element {
    return(
        <div className={mainStyles.main}>
            <h1 className={courseStyles.courseCard} style={{ width: "auto" }}>What Is React?</h1>
            <p>{"Well... Let's start with some examples"}</p>
            <p>Here is an HTML example of a web page with a counter</p>
            <CodeEditorSnippet sandboxUrl="https://codesandbox.io/embed/dreamy-river-w7f68z?fontsize=14&hidenavigation=1&theme=dark" />
            <p>Here is the same counter in React</p>
            <CodeEditorSnippet sandboxUrl="https://codesandbox.io/embed/romantic-khorana-7q64b7?fontsize=14&hidenavigation=1&theme=dark" />
            <div className={courseStyles.textBlock}>
                <div>
                    <p>Notice how we need to update both elements to update the value of Count properly.</p>
                    <img src={"https://i.imgur.com/1F7nifp.png"} alt="html code snippet" width={"50%"}/>
                </div>
                
                <div>
                    <p>This is because plain HTML <span>cannot</span> update state dynamically since HTML is static. Tracking state is very important when making web applications.</p>
                </div>
            </div>
            <div className={courseStyles.textBlock}>
                <div>
                    <p>However, in React we can call this useState hook to create a <span>state</span> for the count variable.</p>
                    <img src={"https://i.imgur.com/g9Nzegi.png"} alt="useState code snippet" width={"50%"}/>
                </div>
                
                <div>
                    <p>Then we can update this state however we want in <span>one</span> place by calling <span>setCount</span>.</p>
                    <img src={"https://i.imgur.com/D2TDZ15.png"} alt="state code snippet" width={"50%"}/>
                </div>

                <div>
                    <p>Finally, we can access the count value anywhere without specifying the id or anything like that just by calling <span>count</span></p>
                    <img src={"https://i.imgur.com/5X6RRTJ.png"} alt="react code snippet" width={"50%"}/>
                </div>
            </div>
            <div className={courseStyles.textBlock}>
                <div>
                    <p style={{ padding: 20 }}>This may seem small, but you can imagine as the application scales up and we have 100s of buttons, we only need the one useState in React vs. writing a for-loop or declaring the state 100 times in plain JS/HTML</p>
                </div>
                <div>
                    <p>Overall, React gets rid of a lot of <span>boilerplate</span> code and you can develop your apps faster 🏃</p>
                </div>
            </div>
            <NextButton label="How to Create a React Project 👉" url={"create-react-app"}/>
        </div>
    );
}

export function App() {
    const [count, setCount] = useState<number>(0);
  
    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Count: {count}</h2>
            <h2>ClickedButton: {count}</h2>
        </div>
    );
}
