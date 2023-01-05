import { ArrowUpIcon } from "@heroicons/react/24/solid";

function ProjectCard(props) {
    const project = props.project;

    const toolsList = project.tools.map((tool) => {
        return (
            <img key={tool} width="24" src={`/images/icons/${tool}.svg`} alt={tool} className="mb-8"/>
        )
    });

    // If project has no logo image then the logo is the project's name.
    const logo = project.img ? <img src={`/images/${project.img}`} className="w-60"/> : <h2 className="text-3xl font-medium">{project.name}</h2>

    return (
      <div className="sm:basis-1/2 p-1 w-full">
        <a href={project.link} target="_blank">
          <div className="relative flex flex-col items-center justify-center h-128 w-full p-6 sm:p-16 text-black rounded-5xl" style={{backgroundColor: project.color}}>
            <ArrowUpIcon width="25" className="absolute top-0 mt-8"/>
            {logo}
            <div className="absolute bottom-0 flex flex-wrap gap-1">
              {toolsList}
            </div>
          </div>
        </a>
      </div>

    )
}
  
function ProjectsList(props) {
  const projects = props.projects;
  const projectList = projects.map((project) => <ProjectCard key={project.name} project={project}/>)
  return (
    <div>
      <div id="Projects" className="flex flex-col items-center flex-wrap md:flex-row mt-2">
        {projectList}
      </div>
    </div>
  )
}

export default ProjectsList;  