import Courses from "../components/Courses";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar/>
            <Header/>
            <Courses/>
        </div>
    );
};

export default Home;