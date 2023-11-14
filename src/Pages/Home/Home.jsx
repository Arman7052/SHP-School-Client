import AboutUs from "../../Components/Home/About/AboutUs";
import Admission from "../../Components/Home/Admission/Admission";
import ContactSection from "../../Components/Home/ContactSection/ContactSection";
import Courses from "../../Components/Home/Courses/Courses";
import Gallary from "../../Components/Home/Gallary/Gallary";
import Hero from "../../Components/Home/Hero/Hero";
import NewsSection from "../../Components/Home/News/NewsSection";
import Students from "../../Components/Home/Students/Students";
import Teachers from "../../Components/Home/Teachers/Teachers";
import Footer from "../../Components/Shared/Footer/Footer";



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Courses></Courses>
            <Teachers></Teachers>
            <Students></Students>
            <Gallary></Gallary>
            <ContactSection></ContactSection>
            <NewsSection></NewsSection>
            <Admission></Admission>
            <Footer></Footer>
        </div>
    );
};

export default Home;