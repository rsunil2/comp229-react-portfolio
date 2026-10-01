const About = () => {
    return (
        <main>
            <h1>About Me</h1>

            <section className="about-container">

                <img
                    src="/RyanS.jpg"
                    alt="Ryan Sunil"
                    className="profile-photo"
                />

                <h2>Ryan Sunil</h2>

                <div className="about-text">
                    <p>
                        I am a Software Engineering Technology - Artificial
                        Intelligence student at Centennial College with an
                        interest in web development, software development,
                        databases and artificial intelligence.
                    </p>

                    <p>
                        I enjoy building practical software solutions,
                        including web applications and systems designed
                        to support business and logistics operations.
                    </p>
                </div>

                <a
                    href="/Ryan-Sunil-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                >
                    View My Resume
                </a>

            </section>
        </main>
    )
}

export default About;