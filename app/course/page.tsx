import CourseCard from "../(componant)/course-card/page"
import FacilityCard from "../(componant)/facility-card/page"
import Navbar from "../(componant)/navbar/page"
import course1 from '../../public/img/course1.png'
import course2 from '../../public/img/course2.png'
import course3 from '../../public/img/course3.png'


export default function Course() {
    return (
        <>
            <section className="Sub-header">
                <Navbar />
                <h1>Our Courses</h1>
            </section>
            {/* <!-- course start --> */}
            <section className="course">
                <h1>Course We Offer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                <CourseCard title={'Undergraduate Programs'}/>
                <CourseCard title={'Graduate Programs'}/>
                <CourseCard title={'Adult Learning & Degree Completion'}/>
                </div>
            </section>
            {/* <!-- course end --> */}
            {/* <!-- best course start --> */}
            <section className="facilities">
                <h1>Best Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <FacilityCard title={'Web Development'} src={course1}/>
                    <FacilityCard title={'Artificial Intelligenc'} src={course2}/>
                    <FacilityCard title={'Data Science'} src={course3}/>
                </div>
            </section>
            {/* <!-- best courses end --> */}
        </>
    )
}