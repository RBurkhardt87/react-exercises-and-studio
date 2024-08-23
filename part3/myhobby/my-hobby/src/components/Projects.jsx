import {useState} from 'react';
import data from '../data.json';

export default function MyProjects() {
   
    const [ index, setIndex] = useState(0);


   

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

     let projects = data.projects;
     let project = projects[index];

   return (
    <>
        <button onClick={handleClick} >
            Next
        </button>
        <div>
            <h2>{project.name}</h2>
            <p>{`This project will incorporate the ${project.element} element and the ${project.sign} sign. It will use ${project.stringColor} string with ${project.stone} stones.`}
            </p>
            <img src={project.imageUrl} alt={project.name} width={500} height={500}/>
        </div>
    </>
    );
};