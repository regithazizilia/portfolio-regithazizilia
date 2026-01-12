import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import intern1 from "./assets/images/intern.jpg";
import intern2 from "./assets/images/intern2.jpg";
import intern3 from "./assets/images/intern3.jpg";
import intern4 from "./assets/images/intern4.jpg";

import org from "./assets/images/org.JPG";
import org2 from "./assets/images/org2.jpg";
import org3 from "./assets/images/org3.JPG";
import org4 from "./assets/images/org4.JPG";
import org5 from "./assets/images/org5.JPG";

import lab from "./assets/images/lab1.jpg";
import lab2 from "./assets/images/lab2.jpg";
import lab5 from "./assets/images/lab5.jpg";
import lab6 from "./assets/images/lab6.jpg";
import lab7 from "./assets/images/lab7.jpg";
import lab8 from "./assets/images/lab8.jpg";
import lab9 from "./assets/images/lab9.jpg";
import lab10 from "./assets/images/lab10.jpg";

import si from "./assets/images/si1.jpg";
import si2 from "./assets/images/si2.jpg";
import si3 from "./assets/images/si3.jpg";
import si4 from "./assets/images/si4.jpg";


export default function Experience() {
    const { ref, inView } = useInView({
        threshold: 0.2,

    })

    const [activeTab, setActiveTab] = useState('internship')

    return (

        <section
            ref={ref}
            id="experience"
            className="scroll-mt-24 px-6 sm:px-20 lg:px-40 py-24 bg-main text-white"
        >
            {/* ANIMATION WRAPPER */}
            <div
                className={`transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                        EXPERIENCES
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-10 mb-12">
                    <TabButton
                        label="Internship"
                        active={activeTab === 'internship'}
                        onClick={() => setActiveTab('internship')}
                    />
                    <TabButton
                        label="Organization"
                        active={activeTab === 'organization'}
                        onClick={() => setActiveTab('organization')}
                    />
                    <TabButton
                        label="Assistant Lab"
                        active={activeTab === 'assistantLab'}
                        onClick={() => setActiveTab('assistantLab')}
                    />
                    <TabButton
                        label="Studi Independent"
                        active={activeTab === 'independent'}
                        onClick={() => setActiveTab('independent')}
                    />
                </div>

                {/* Content */}
                <div className="w-full">
                    {activeTab === 'internship' && <Internship />}
                    {activeTab === 'organization' && <Organization />}
                    {activeTab === 'assistantLab' && <AssistantLab />}
                    {activeTab === 'independent' && <Independent />}
                </div>
            </div>
        </section>

    )
}


/* ================= TAB BUTTON ================= */

function TabButton({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`relative pb-2 text-sm sm:text-base font-semibold transition
        ${active ? 'text-white' : 'text-gray-400 hover:text-white'}
      `}
        >
            {label}
            {active && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 rounded-full" />
            )}
        </button>
    )
}

function Internship() {
    const photoIntern = [intern1, intern2, intern3, intern4];
    return (
        <ExperienceCard
            title="Software Development Internship"
            place="Badan Perencanaan Pembangunan Daerah (BAPPEDA) Provinsi Jawa Barat"
            period="Jul 2024 – Aug 2024"
            photos={photoIntern}
        >
            <ul className="list-disc list-inside space-y-2 leading-relaxed text-sm sm:text-base text-justify text-white ">

                <li>Developed a web-based management system for daily reporting and employee performance evaluation using Laravel 11, Vue.js, Tailwind CSS and MySQL</li>
                <li>Designed the application architecture and created system design documentation</li>
                <li>Tested the application to ensure functionality and quality compliance with requirements</li>
                <li>Collaborated with the team in developing and improving the system based on user feedback and business requirements</li>
            </ul>
        </ExperienceCard>
    )
}

function Organization() {
    const photoOrg = [org, org2, org3, org4, org5];
    return (
        <ExperienceCard
            title="Badan Semi Otonom (BSO) Alelopati"
            place="Sains and Informatics Faculty"
            period="2021 – 2025"
            photos={photoOrg}
        >
            <div className="relative pl-6 border-l border-gray-700space-y-10">

                {/* ITEM 1 */}
                <TimelineItem
                    title="Media"
                    period="Aug 2023 – Sept 2025"
                    desc={[
                        "Managed the organization's social media",
                        "Managed the organization's social media policies",
                        "Maintained activity documentation archives"
                    ]}
                />

                {/* ITEM 2 */}
                <TimelineItem
                    title="Secretary"
                    period="Jun 2022 – Aug 2023"
                    desc={[
                        "Provided organization's technical services",
                        "Managed organization's data and files",
                        "Prepared reports for each activity"
                    ]}
                />
            </div>
        </ExperienceCard>
    )
}

function AssistantLab() {
    const photoLab = [lab, lab2, lab5, lab6, lab7, lab8, lab9, lab10];
    return (
        <ExperienceCard
            title="Laboratory Assistant"
            place="Informatics Engineering Department"
            photos={photoLab}
        >
            <div className="relative pl-6 border-l border-white/20 space-y-4">

                {/* ITEM 1 */}
                <TimelineItem
                    title="Teaching Assistant for Computer Education Practicum, Department of Law"
                    period="Aug 2025"
                    desc={[

                    ]}

                />
                {/* ITEM 2 */}
                <TimelineItem
                    title="Laboratory Assistant for Software Development Project Practicum"
                    period="Mar 2025 – Jun 2025"
                    desc={[

                    ]}
                />


                {/* ITEM 3 */}
                <TimelineItem
                    title="Laboratory Assistant for Software Testing Practicum"
                    period="Mar 2025 – Jun 2025"
                    desc={[

                    ]}
                />


                {/* ITEM 4 */}
                <TimelineItem
                    title="Laboratory Assistant for  Project Management Practicum"
                    period="Oct 2024 – Jan 2025"
                    desc={[

                    ]}
                />

                {/* ITEM 5 */}
                <TimelineItem
                    title="Laboratory Assistant for Object-Oriented Programming Practicum"
                    period="Oct 2024 – Jan 2025"
                    desc={[

                    ]}
                />
                {/* ITEM 6 */}
                <TimelineItem
                    title="Laboratory Assistant for Object-Oriented Programming Practicum"
                    period="Oct 2023 – Jan 2024"
                    desc={[

                    ]}
                />

            </div>
        </ExperienceCard>
    )
}



function Independent() {
    const photoSI = [si2, si, si3, si4];
    return (
        <ExperienceCard
            title="Data Analyst with Artificial Intelligence (AI) Expertise"
            place="MSIB – MIKTI"
            period="Sept 2024 - Dec 2024"
            photos={photoSI}
        >
            <ul className="list-disc list-inside space-y-2 text-justify text-white ">
                <li>Learned the basics of data analysis, including statistics, Python, EDA, data
                    cleansing, visualization, machine learning, customer segmentation,
                    behavior analysis, and regression
                </li>
                <li>Honed problem-solving skills through case studies and completed a team
                    capstone project covering data collection, cleaning, distribution, model
                    development, and evaluation using Python to generate solutions and
                    predictions</li>
            </ul>
        </ExperienceCard>
    )
}


function ExperienceCard({ title, place, period, children, photos = [] }) {
    const [current, setCurrent] = useState(0)

    const prev = () =>
        setCurrent((current - 1 + photos.length) % photos.length)

    const next = () =>
        setCurrent((current + 1) % photos.length)

    return (
        <div className="w-full bg-grid rounded-2xl p-8 shadow-lg">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* LEFT - HEADER + TEXT */}
                <div>
                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-white">
                            {title}
                        </h3>
                        <p className="text-pink-50 text-sm">
                            {place}
                        </p>
                        <span className="text-pink-100 text-sm font-medium">
                            {period}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="text-pink-300 leading-relaxed">
                        {children}
                    </div>
                </div>

                {/* RIGHT - SLIDER (NAIK SAMPAI ATAS) */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-gray-700 bg-black">

                    {/* BLUR BACKGROUND */}
                    <img
                        src={photos[current]}
                        alt="blur background"
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
                    />

                    {/* MAIN IMAGE */}
                    <img
                        src={photos[current]}
                        alt="experience"
                        className="relative z-10 w-full h-full object-contain transition-all duration-500"
                    />

                    {/* LEFT ARROW */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                        ‹
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                        ›
                    </button>

                </div>


            </div>
        </div>
    )
}

function TimelineItem({ title, period, desc }) {
    return (
        <div className="relative">

            {/* DOT */}
            <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-pink-300" />

            {/* CONTENT */}
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="text-sm text-pink-100 mb-2">{period}</p>

            <ul className="list-disc list-inside text-white space-y-1">
                {desc.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

        </div>
    )
}



