function ProjectCard(props) {
    const project = props.project;
    console.log(project);

    const toolsList = project.tools.map((tool) => {
        return (
            <img key={tool} width="24" src={`/images/icons/${tool}.svg`} alt={tool} className="ml-2"/>
        )
    });

    return (
      <div className="flex flex-col md:flex-row items-center w-4/5 h-128 p-6 md:p-16 max-w-screen-md bg-gray-900 text-white rounded-4xl">
        <a href={project.link} target="_blank" className="shrink-0">
          <img src={`/images${project.img}`} className="h-72 w-72 md:h-96 md:w-80 object-cover rounded-3xl" alt={project.name + " Cover"}></img>
        </a>
        <div className="flex flex-col self-start md:ml-10">
          <h3 className="text-2xl font-bold py-6">Discover PNW</h3>
          <a href={project.link} target="_blank">WEBSITE</a>
          <div className="flex md:flex-col py-3">
            <p className="py-1">TOOLS</p>
            <div className="flex flex-wrap">
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
        <div className="py-8 px-9 flex flex-col items-center">
        <h2 className="text-2xl pb-8 font-bold bg-gradient-to-r from-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Some of my Projects</h2>
        {projectList}
        </div>
    )
}

export default ProjectsList;  