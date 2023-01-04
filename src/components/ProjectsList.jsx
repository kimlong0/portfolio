function ProjectCard(props) {
    const project = props.project;
    console.log(project);

    const toolsList = project.tools.map((tool) => {
        return (
            <img key={tool} width="24" src={`/images/icons/${tool}.svg`} alt={tool} className="sm:my-2"/>
        )
    });

    return (
      <div className="flex flex-col sm:flex-row items-center justify-center w-full h-128 p-6 sm:p-16 my-6 max-w-screen-md bg-gray-900 text-white rounded-5xl">
        <a href={project.link} target="_blank" className="shrink-0">
          <img src={`/images${project.img}`} className="h-72 w-72 sm:h-96 sm:w-80 object-cover rounded-3xl" alt={project.name + " Cover"}/>
        </a>
        <div className="flex flex-col self-start sm:ml-10">
          <a className="text-2xl font-bold my-5" href={project.link} target="_blank">{project.name}</a>
          <a className="my-2" href={project.source}>SOURCE</a>
          <div className="flex sm:flex-col">
            <p className="my-2 mr-3">TOOLS</p>
            <div className="flex flex-wrap gap-1">
                {toolsList}
            </div>
          </div>
        </div>
      </div>
    )
}
  
function ProjectsList(props) {
  const projects = props.projects;
  const projectList = projects.map((project) => <ProjectCard key={project.name} project={project}/>)
  return (
    <div>
      <div id="Projects" className="py-8 px-9 flex flex-col items-center">
        {projectList}
      </div>
    </div>
  )
}

export default ProjectsList;  