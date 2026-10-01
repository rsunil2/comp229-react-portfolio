import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <main className="home">
            <h1>Welcome to my Portfolio</h1>

            <h2>Software Engineering & AI Student</h2>

            <p>
                Welcome to my personal portfolio. 
                I am a Software Engineering Technology - AI student with an interest in software delveopment, databases and AI.

            </p>

            <p>
                My goal is to continue developing practical software solutions while expanding my knowledge of modern technologies
            </p>

             <Link to="/about" className="button">
                Learn More About Me
            </Link>
           
        </main>
        
    )
}

export default Home;