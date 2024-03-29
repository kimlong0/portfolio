import { ArrowDownRightIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

function ProjectCard(props) {
  const project = props.project;
  const toolsLinks = new Map([
    ["firebase", "https://firebase.google.com/"],
    ["r", "https://www.r-project.org/"],
    ["react", "https://reactjs.org/"],
    ["shiny", "https://shiny.rstudio.com/"]
  ]);

  const toolsList = project.tools.map((tool) => {
      return (
        <a key={tool} href={toolsLinks.get(tool)} target="_blank" className="flex">
          <img width="24" src={`/images/icons/${tool}.svg`} alt={tool} className=""/>
        </a> 
      )
  });
  
  // If project has no logo image then the logo is the project's name.
  const logo = project.img ? <img src={`/images/${project.img}`} className="w-60 rounded-4xl"/> : <h2 className="text-3xl text-center font-medium">{project.name}</h2>
  
  return (
    <div className="sm:basis-1/2 p-1 w-full">
        <div className="relative flex flex-col items-center justify-center h-96 w-full p-6 sm:p-16 text-black rounded-5xl hover:scale-95 hover:brightness-105 duration-500" style={{backgroundColor: project.color}}>
          <a href={project.source} target="_blank">
            <CodeBracketIcon width="25" className="absolute top-10 right-10"/>
          </a>
          <a href={project.link} target="_blank">
            <div className="rounded-4xl shadow-2xl border-transparent border-2 hover:border-black duration-300 ease-in p-5">
              {logo}
            </div>
          </a>
          <div className="absolute top-10 left-10 mb-10 flex flex-col gap-1">
            {toolsList}
          </div>
          <a href={project.link} target="_blank">
            <ArrowDownRightIcon width="25" className="absolute bottom-0 right-10 mb-10"/>
          </a>
        </div>
    </div>

  )
}
  
function ProjectsList(props) {
  const projects = props.projects;
  const projectList = projects.map((project) => <ProjectCard key={project.name} project={project}/>)
  return (
    <div>
      <div className="flex flex-col items-center flex-wrap md:flex-row">
        {projectList}
      </div>
    </div>
  )
}

export default ProjectsList;  