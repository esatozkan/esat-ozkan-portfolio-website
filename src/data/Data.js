import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import zooventure from "../assets/zooventure.png"
import serefe from "../assets/serefe.png"
import zooventurePro from "../assets/zooventurePro.png"
import fiesta from "../assets/fiesta.png"
import ebrarPhotography from "../assets/ebrarPhotography.png"
import aeneasOnline from "../assets/aeneasonline.png"

export const featuresData = [
    {
        id: 1,
        title: "Business Stratagy",
        des: "Road maps and requirements appropriate to the work to be done are selected, determined and carried out.",
    },
    {
        id: 2,
        icon: <AiFillAppstore />,
        title: "App Development",
        des: "I create comprehensive and user-friendly, fully dynamic applications with the flutter framework.",
    },
    {
        id: 4,
        icon: <SiAntdesign />,
        title: "UX Design",
        des: "I create personalized applications and websites with my own designs, whenever and however desired.",
    },
    {
        id: 5,
        icon: <FaGlobe />,
        title: "Websites",
        des: "I create responsive websites that suit your needs using up-to-date programming languages ​​and frameworks.",
    },
];

export const projectData = [
    {
        id: 1,
        title: "ZOOVENTURE",
        des: "I have published an educational application containing pictures and photographs of various animals. In this application, by clicking on the animal images, users can listen and learn about the animal species in 8 different languages. The application also includes games which users can reach out to basic level information about animals.",
        src: zooventure,
        store: "playStore",
        appStore: "",
        storeLink: "https://play.google.com/store/apps/details?id=com.es.animals_app",
    },
    {
        id: 2,
        title: "ŞEREFE KLASİK",
        des: "A card game that people can play by gathering with their friends. They perform the tasks given to them by drawing illustrated and entertaining cards, and those who cannot do so are penalized.",
        src: serefe,
        store: "playStore",
        appStore: "",
        storeLink: "https://play.google.com/store/apps/details?id=com.aeneasgames.serefe_klasik"
    },
    {
        id: 3,
        title: "ZOOVENTURE PRO",
        des: "The app contains 6 different games including the memory game, finding the animal names from given letters and matching real animal photos to animated images which can be played in 6 different languages.",
        src: zooventurePro,
        store: "playStore",
        appStore: "",
        storeLink: "https://play.google.com/store/apps/details?id=com.oyunakademisi.zooventure"
    },
    {
        id: 4,
        title: "FİESTA",
        des: "An app that lets users enjoy time with friends. It includes various games like card games, forbidden word guessing, confession, and more. Users can snap moments while playing and save memories on their profiles.",
        src: fiesta,
        store: "playStore",
        appStore: "https://apps.apple.com/tr/app/fiesta/id6502469402?l=tr",
        storeLink: "https://play.google.com/store/apps/details?id=com.aeneasgames.fiesta"
    },
    {
        id: 5,
        title: "EBRAR PHOTOGRAPHY",
        des: "I made the website of the photography studio. The website is connected to social media accounts and photos shared on social media automatically appear on the site. It is fully responsive and has customer and site owner communication features.",
        src: ebrarPhotography,
        store: "web",
        appStore: "",
        storeLink: "https://ebrarphotography.com/"
    },
    {
        id: 6,
        title: "AENEAS ONLİNE",
        des: "I created the website of aeneas online company. The site where the company's applications are located is user-friendly. It enables communication between the company and customers and the site has been beautified with various animations suitable for applications.",
        src: aeneasOnline,
        store: "web",
        appStore: "",
        storeLink: "https://aeneasonline.com/"
    },
]

export const educationData = [
    {
        key: 1,
        title: "Atılım Anatolian High School",
        subTitle: "Kocaeli/Izmit",
        date: "2015",
        des: "I completed my high school education at Atılım Anatolian High School."
    },
    {
        key: 2,
        title: "Istanbul University",
        subTitle: "Istanbul/Avcılar",
        date: "2017",
        des: "I studied industrial engineering at Istanbul University"
    },
    {
        key: 3,
        title: "Marmara University",
        subTitle: "Istanbul/Avcılar",
        date: "2019",
        des: "I studied mechanical engineering at Marmara University"
    },
]

export const jobExperienceData = [
    {
        key: 1,
        title: "M3 Works",
        subTitle: "Istanbul",
        date: "2018",
        des: "I worked as an SPV in an organization company, so I improved my communication with people."
    },
    {
        key: 2,
        title: "Eddra",
        subTitle: "Istanbul",
        date: "2019",
        des: "I worked as an SPV in an organization company, so I improved my communication with people."
    },
    {
        key: 3,
        title: "Freelance",
        subTitle: "Istanbul",
        date: "2020",
        des: "As a freelancer, I developed websites and mobile applications suitable for customers."
    },
]

export const webSkillsData = [
    {
        key: 1,
        text: "HTML 5 - CSS 3",
        percentage: "90%",
    },
    {
        key: 2,
        text: "Javascript",
        percentage: "90%"
    },
    {
        key: 3,
        text: "React",
        percentage: "80%"
    },
    {
        key: 4,
        text: "Tailwindcss",
        percentage: "50%"
    },
]

export const mobileSkillsData = [
    {
        key: 1,
        text: "Dart",
        percentage: "100%",
    },
    {
        key: 2,
        text: "Flutter",
        percentage: "90%",
    },
    {
        key: 3,
        text: "Firebase",
        percentage: "70%",
    },
    {
        key: 4,
        text: "Canva",
        percentage: "80%",
    },
]

export const webCertificatesData = [
    {
        key: 1,
        title: "Web Developer",
        subTitle: "Komek",
        date: "2020",
        des: "I took database and SQL, web application development courses at Komek Education Center."
    },
    {
        key: 2,
        title: "Full-Stack Developer",
        subTitle: "Udemy",
        date: "2021",
        des: "I took html, css, javascript and react courses from the Udemy education platform."
    },
    {
        key: 2,
        title: "Full-Stack Developer",
        subTitle: "BilgeIş - Btk",
        date: "2021",
        des: "I took html, css, javascript and react courses from BilgeIş and Btk academy training platform."
    },
]

export const mobileCertificatesData = [
    {
        key: 1,
        title: "Mobile Developer",
        subTitle: "ITO",
        date: "2022",
        des: "I took the 320-hour face-to-face Flutter mobile application development training of the Istanbul Chamber of Commerce."
    },
    {
        key: 2,
        title: "Project Development with Firebase",
        subTitle: "Btk Academy",
        date: "2023",
        des: "I received training on developing dynamic applications with Firebase."
    },
    {
        key: 3,
        title: "Flutter Training",
        subTitle: "Udemy",
        date: "2023",
        des: "I received training on developing dynamic applications with Flutter and Firebase."
    },
]