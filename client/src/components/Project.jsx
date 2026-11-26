const Project = () => {
    return(
        <main>

        <h1>Featured Project</h1>
        {/* Project 1 - DispatchPro */}
        <section className="project">
      <img
        src="/DispatchPro.png"
        alt="DispatchPro logisctics management dashboard"
      />

      <div>
        <h2>DispatchPro</h2>

        <p>DipatchPro is a logistics management application designed
            to help manage customer orders, loads, drivers and delivery
            information through a centralized dashboard. </p>
        
        <p>
            <strong>My Role:</strong> I worked on the development of
            application features, including user and admin functionality,
            backend integration and database-related components.
        </p>

        <p>
            <strong>Technologies:</strong> Next.js, NestJS, Prisma,
            JavaScript and database technologies.
        </p>

        <p>
            <strong>Outcome:</strong> The project produced a working
            dashboard that allows logistics information and orders to
            be organized and managed through one application.
        </p>
      </div>
      </section>

        

        {/* Project 2 */}

        {/* Project 3 */}    
        </main>
    )
}

export default Project;