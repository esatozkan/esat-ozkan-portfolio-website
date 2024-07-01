import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectData } from '../../data/Data'

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {
                    projectData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            des={project.des}
                            src={project.src}
                            store={project.store}
                            storeLink={project.storeLink}
                            appStore={project.appStore}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects