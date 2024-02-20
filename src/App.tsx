const TAGS = {
  JAVASCRIPT: {
    name: 'JavaScript',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
  },
  HTML: {
    name: 'HTML',
  },
  REACT: {
    name: 'React',
  },
  CSS: {
    name: 'CSS',
  },
  SASS: {
    name: 'Sass',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
  },
  MUI: {
    name: 'Material UI',
  },
};

const PROJECTS = [
  {
    id: 1,
    title: 'GitHub Profile',
    description: 'descripción',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
    repo_url: 'https://github.com/NahuelEF/github-profile.git',
    web_url: 'https://nahuelef-github-profile.netlify.app/',
  },
  {
    id: 2,
    title: 'E-commerce Product Page',
    description: 'descripción',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MUI],
    repo_url: '',
    web_url: '',
  },
  {
    id: 3,
    title: 'Countries API App',
    description: 'descripción',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.SASS],
    repo_url: '',
    web_url: '',
  },
  {
    id: 4,
    title: 'Todo',
    description: 'descripción',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS],
    repo_url: '',
    web_url: '',
  },
];

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#experience">Experiencia</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Nahuel Ezequiel Fedele</h1>
          <h2>Desarrollador Front-End</h2>
          <p>
            ¡Bienvenido a mi portfolio! Soy un desarrollador front-end
            apasionado por crear experiencias web cautivadoras y funcionales. A
            continuación, encontrarás una selección de mis proyectos y
            habilidades.
          </p>
          <ul>
            <li>
              <a href="mailto:nahuelfedele@gmail.com">Correo electrónico</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nahuel-ezequiel-fedele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/NahuelEF"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
        <hr />
        <section id="experience">
          <h2>Experiencia Laboral</h2>
          <article>
            <h3>Desarrollador Front-End</h3>
            <p>
              Streambe | <time dateTime="2022-6">Junio 2022</time> -{' '}
              <time dateTime="2022-10">Octubre 2022</time>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              voluptatibus beatae, quia blanditiis ratione possimus.
            </p>
          </article>
        </section>
        <hr />
        <section id="projects">
          <h2>Proyectos Destacados</h2>
          <div>
            {PROJECTS.map((project) => (
              <article key={project.id}>
                <h3>{project.title}</h3>
                <p>{`${project.description} de ${project.title}`}</p>
                <ul>
                  {project.tags.map((tags) => (
                    <li key={tags.name} title={tags.name}>
                      {tags.name}
                    </li>
                  ))}
                </ul>
                <div>
                  <a href={project.repo_url}>GitHub Repo</a>
                  <br />
                  <a href={project.web_url}>Sitio Web</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <hr />
        <section id="skills">
          <h2>Habilidades</h2>
          <ul>
            <li>React</li>
            <li>TS</li>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
          </ul>
        </section>
        <hr />
        <section id="about">
          <h2>Sobre Mí</h2>
          <p>
            Soy un desarrollador front-end con experiencia en la creación de
            interfaces web atractivas y funcionales. Me apasiona trabajar en
            proyectos desafiantes que me permitan aplicar y expandir mis
            habilidades en desarrollo web. Si estás interesado en colaborar en
            un proyecto o simplemente quieres charlar sobre desarrollo web, ¡no
            dudes en ponerte en contacto conmigo!
          </p>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <a href="mailto:nahuelfedele@gmail.com">Correo electrónico</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nahuel-ezequiel-fedele/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/NahuelEF"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p>&#169;2024 NahuelEF</p>
      </footer>
    </>
  );
}
