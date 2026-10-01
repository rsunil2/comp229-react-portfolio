import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className="home">

            <section className="hero-section">

                <p className="hero-intro">Hello, I'm</p>

                <h1>Ryan Sunil</h1>

                <h2>Software Engineering & AI Student</h2>

                <p className="hero-description">
                    I am a Software Engineering Technology - Artificial
                    Intelligence student with an interest in web development,
                    software development, databases and AI.
                </p>

                <p className="mission">
                    My goal is to build practical software solutions that
                    solve real-world problems, with a growing focus on
                    business and logistics applications.
                </p>

                <div className="hero-buttons">

                    <Link to="/about" className="hero-button">
                        About Me
                    </Link>

                    <Link to="/projects" className="hero-button secondary">
                        View Projects
                    </Link>

                </div>

                <div className="focus-areas">
                    <span>Web Development</span>
                    <span>Logistics Software</span>
                    <span>Databases</span>
                    <span>AI & Data</span>
                </div>

            </section>

        </main>
    )
}

export default Home;