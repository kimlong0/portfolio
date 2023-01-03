function ProjectCard(props) {
    const project = props.project;
    console.log(project);

    const toolsList = project.tools.map((tool) => {
        return (
            <img key={tool} width="24" src={`/images/icons/${tool}.svg`} alt={tool} className="md:my-2"/>
        )
    });

    return (
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 h-128 p-6 md:p-16 max-w-screen-md bg-gray-900 text-white rounded-4xl">
        <a href={project.link} target="_blank" className="shrink-0">
          <img src={`/images${project.img}`} className="h-72 w-72 md:h-96 md:w-80 object-cover rounded-3xl" alt={project.name + " Cover"}/>
        </a>
        <div className="flex flex-col self-start md:ml-10">
          <a className="text-2xl font-bold my-5" href={project.link} target="_blank">Discover PNW</a>
          <a className="my-2" href={project.source}>SOURCE</a>
          <div className="flex md:flex-col">
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
      <div id="Projects" className="py-8 px-9 flex flex-col items-center">
        <h2 className="text-2xl pb-8 font-bold bg-gradient-to-r from-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Some of my Projects</h2>
        {projectList}
      </div>
  )
}

export default ProjectsList;  