import AboutUs from "../../Components/Home/About/AboutUs";
import Courses from "../../Components/Home/Courses/Courses";
import Hero from "../../Components/Home/Hero/Hero";
import Students from "../../Components/Home/Students/Students";
import Teachers from "../../Components/Home/Teachers/Teachers";



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Courses></Courses>
            <Teachers></Teachers>
            <Students></Students>
        </div>
    );
};

export default Home;