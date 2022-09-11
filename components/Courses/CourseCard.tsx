/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import courseStyles from "../../styles/Courses.module.css";
import Course from "../../utilities/interfaces/course";

export default function CourseCard({ course }: {
    course: Course
}): JSX.Element {
    return(
        <Link href={`${course.url}`}>
            <div className={courseStyles.courseCard}>
                <img src={course.img} alt={`${course.name} Image`} height={50} style={{ marginRight: 10 }}/>
                <p>{course.name}</p>
            </div>
        </Link>
    );
}
