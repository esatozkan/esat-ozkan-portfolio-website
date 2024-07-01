import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import zooventure from "../../assets/zooventure.png"
import serefe from "../../assets/serefe.png"
import zooventurePro from "../../assets/zooventurePro.png"
import fiesta from "../../assets/fiesta.png"
import ebrarPhotography from "../../assets/ebrarPhotography.png"
import aeneasOnline from "../../assets/aeneasonline.png"

function Projects() {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-ellipsis'>
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
            </div>
            <div className='grid grid-cols-3 gap-14'>
                <ProjectCard title="ZOOVENTURE" des="I have published an educational application containing pictures and photographs of various animals. In this application, by clicking on the animal images, users can listen and learn about the animal species in 8 different languages. The application also includes games which users can reach out to basic level information about animals." src={zooventure} />

                <ProjectCard title="ŞEREFE KLASİK" des="A card game that people can play by gathering with their friends. They perform the tasks given to them by drawing illustrated and entertaining cards, and those who cannot do so are penalized." src={serefe} />

                <ProjectCard title="ZOOVENTURE PRO" des="The app contains 6 different games including the memory game, finding the animal names from given letters and matching real animal photos to animated images which can be played in 6 different languages." src={zooventurePro} />

                <ProjectCard title="FİESTA" des="An app that lets users enjoy time with friends. It includes various games like card games, forbidden word guessing, confession, and more. Users can snap moments while playing and save memories on their profiles." src={fiesta} />

                <ProjectCard title="EBRAR PHOTOGRAPHY" des="I made the website of the photography studio. The website is connected to social media accounts and photos shared on social media automatically appear on the site. It is fully responsive and has customer and site owner communication features." src={ebrarPhotography} />

                <ProjectCard title="AENEAS ONLİNE" des="I created the website of aeneas online company. The site where the company's applications are located is user-friendly. It enables communication between the company and customers and the site has been beautified with various animations suitable for applications." src={aeneasOnline} />
            </div>



        </section>
    )
}

export default Projects
