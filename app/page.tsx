import Image from 'next/image'
import Header from './(componant)/header/page'
import Campus1 from '../public/img/Campus1.png'
import Campus2 from '../public/img/Campus2.png'
import Campus3 from '../public/img/Campus3.png'
import libary from '../public/img/libary.png'
import playground from '../public/img/playground.png'
import food from '../public/img/food.png'
import user from '../public/img/user.png'
import CourseCard from './(componant)/course-card/page'
import FacilityCard from './(componant)/facility-card/page'
import CampusCol from './(componant)/campus-col/page'
import TestimonialsCol from './(componant)/testimonials-col/page'
import Button from './(componant)/button/page'

export default function Home() {
    return (
        <>
            <Header />
            <section className="course">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <CourseCard title={'UnderGraduate Programe'} />
                    <CourseCard title={'Graduate Programe'} />
                    <CourseCard title={'Adult Learning & Degree Completion'} />
                </div>
            </section>
            {/* <!-- Course Section End --> */}
            {/* <!-- Campus Section Start--> */}

            <section className="campus">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>TAKE OUR VIRTUAL TOUR</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <CampusCol src={Campus1} title={'DELHI'} />
                    <CampusCol src={Campus2} title={'HYDERABAD'} />
                    <CampusCol src={Campus3} title={'MUMBAI'} />
                </div>
            </section>
            {/* <!-- Campus Section End --> */}
            {/* <!-- Facilities Section Start --> */}
            <section className="facilities">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>Our Facilities</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <FacilityCard src={libary} title={'Best Libary'} />
                    <FacilityCard src={playground} title={'Athletics '} />
                    <FacilityCard src={food} title={'Tasty and Healthy Food'} />
                </div>
            </section>
            {/* <!-- Testimonials Section Start --> */}
            <section className="testimonials">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>What Our Student Says</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <TestimonialsCol src={user} title={'Student Name'} />
                    <TestimonialsCol src={user} title={'Student Name'} />
                </div>
            </section>
            {/* <!-- Call To Action Section Start --> */}
            <section className="cta">
                <h1>GET READY FOR A BRIGHT FUTURE</h1>
                <Button title={'CONTACT US'}/>
            </section>
            {/* <!-- Call To Action Section End --> */}
        </>
    )
}
