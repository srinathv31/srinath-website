import mainStyles from "../styles/Home.module.css";
import Course from "../utilities/interfaces/course";
import CourseCard from "../components/Courses/CourseCard";

export default function Courses(): JSX.Element {
    const reactLogoImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png";

    const courseList: Course[] = [
        { name: "React 101", url: "courses/react101/intro", img: reactLogoImg },
        { name: "Deploying a React App", url: "courses/coming-soon", img: reactLogoImg },
    ];

    return(
        <div className={mainStyles.main}>
            <h1>Course List</h1>
            {courseList.map((course, idx) => {
                return (
                    <CourseCard key={idx} course={course} />
                );
            })}
        </div>
    );
}
