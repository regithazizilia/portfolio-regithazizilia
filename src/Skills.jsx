import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import ReactIcon from './assets/images/react.png'
import PythonIcon from './assets/images/python.png'
import JavaIcon from './assets/images/java.png'
import VueIcon from './assets/images/vue.png'
import CIIcon from './assets/images/ci.png'
import bootstrapIcon from './assets/images/bootstrap.png'
import phpIcon from './assets/images/php.png'
import netbeansIcon from './assets/images/netbeans.png'
import sctreeIcon from './assets/images/sctree.png'
import figmaIcon from './assets/images/figma.png'
import vscIcon from './assets/images/vsc.png'
import jiraIcon from './assets/images/jira.png'
import mspointIcon from './assets/images/mspoint.png'
import mswordIcon from './assets/images/msword.png'
import msexcelIcon from './assets/images/msexcel.png'
import tailwindIcon from './assets/images/tailwind.png'
import laravelIcon from './assets/images/laravel.png'
import githubIcon from './assets/images/github.png'
import eclipseIcon from './assets/images/eclips.png'  
import powerBIIcon from './assets/images/powerbi.png'
import jsIcon from './assets/images/javascript.png'
import htmlIcon from './assets/images/html.png'
import cssIcon from './assets/images/css.png'
import mysqlIcon from './assets/images/mysql.png'

export default function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    })

    const skillCategories = {
        programming: [
            { name: 'Python', img: PythonIcon },
            { name: 'Java', img: JavaIcon },
            { name: 'PHP', img: phpIcon },
        ],
        frontend: [
            { name: 'React.js', img: ReactIcon },
            { name: 'Vue.js', img: VueIcon },
            { name: 'Bootstrap', img: bootstrapIcon },
            { name: 'Tailwind CSS', img: tailwindIcon },
            { name: 'HTML', img: htmlIcon },
            { name: 'CSS', img: cssIcon },
            { name: 'JavaScript', img: jsIcon },
        ],
        frameworks: [
            { name: 'Laravel', img: laravelIcon },
            { name: 'CodeIgniter', img: CIIcon },
        ],
        database: [
            { name: 'MySQL', img: mysqlIcon }
        ],
        tools: [
            { name: 'GitHub', img: githubIcon },
            { name: 'Source Tree', img: sctreeIcon },
            { name: 'VS Code', img: vscIcon },
            { name: 'NetBeans', img: netbeansIcon },
            { name: 'Eclipse', img: eclipseIcon },
        ],
        design: [
            { name: 'Figma', img: figmaIcon },
        ],
        office: [
            { name: 'MS PowerPoint', img: mspointIcon },
            { name: 'MS Word', img: mswordIcon },
            { name: 'MS Excel', img: msexcelIcon },
            { name: 'Power BI', img: powerBIIcon },

        ],
        collaboration: [
            { name: 'Jira', img: jiraIcon },
        ],
    }

    const softSkills = [
        'Effective Communication',
        'Teamwork',
        'Attention to Detail',
        'Time Management',
        'Leadership',
        'Respecting Differences of Opinion'
    ]

    const languageSkills = [
        'English - Intermediate',
        'Indonesian'
    ]


    const SkillCategoryCard = ({ title, skills, isSlider = false }) => {
        const [index, setIndex] = useState(0)
        const itemsPerView = 5

        const maxIndex = Math.max(skills.length - itemsPerView, 0)

        const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex))
        const prev = () => setIndex((prev) => Math.max(prev - 1, 0))

        return (
            <div className="bg-grid rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>

                    {isSlider && (
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                disabled={index === 0}
                                className="p-1 rounded bg-rose-300 disabled:opacity-40"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                disabled={index === maxIndex}
                                className="p-1 rounded bg-rose-300 disabled:opacity-40"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex gap-3 transition-transform duration-300"
                        style={{ transform: `translateX(-${index * 96}px)` }}
                    >
                        {/* kotak setelah gambar */}
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex flex-col items-center justify-center gap-1 bg-grid2 rounded-lg"
                            >
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />
                                <span className="text-[11px] text-center font-medium">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // SkillCard untuk soft skills dan language skills 
    const SkillCard = ({ title, children }) => (
        <div className="w-full  bg-grid rounded-xl p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <div>{children}</div>
        </div>
    )

    // HardSkillItem untuk technical skills 
    const HardSkillItem = ({ skill }) => (
        <div className="flex flex-col items-center gap-2 p-4 bg-grid rounded-lg shadow-md">
            <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain" />
            <span className="text-white font-medium">{skill.name}</span>
        </div>
    )

    return (
        <section
            id="skills"
            ref={ref}
            className="flex flex-col items-center px-10 py-24 bg-main text-white"
        >
            <div
                className={`w-full transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                <h1 className="text-5xl font-bold text-center mb-12 gradient-text">SKILLS</h1>
                <h2 className=" text-md font-semibold mb-12 text-center"> I have a range of technical and non-technical skills that allow me to contribute effectively to accomplishing tasks and achieving organizational goals. </h2>

                {/* SOFT SKILLS */}
                <div className="flex ">
                    <SkillCard title="Soft Skills">
                        <div className="flex flex-wrap  gap-4">
                            {softSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-grid2 px-5 py-2 rounded-full font-medium text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </SkillCard>
                </div>

                {/* LANGUAGE SKILLS */}
                <div className="flex  w-full">
                    <SkillCard title="Language Skills">
                        <div className="flex flex-wrap gap-4">
                            {languageSkills.map((lang) => (
                                <span
                                    key={lang}
                                    className="bg-grid2 px-4 py-2 rounded-full font-medium text-sm"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </SkillCard>
                </div>

                {/* TECHNICAL SKILLS SECTION */}
                <div className="mt-2">


                    {/* Technical Skills dalam Grid 2 kolom */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Left Column */}
                        <div className="space-y-8">
                            <SkillCategoryCard
                                title="Programming Languages"
                                skills={skillCategories.programming}
                                
                            />
                            <SkillCategoryCard
                                title="Development Tools"
                                skills={skillCategories.tools}
                                
                            />


                            <SkillCategoryCard
                                title="Backend Frameworks"
                                skills={skillCategories.frameworks}
                                
                            />

                            <SkillCategoryCard
                                title="Database"
                                skills={skillCategories.database}
                                
                            />

                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <SkillCategoryCard
                                title="Frontend Development"
                                skills={skillCategories.frontend}
                                isSlider
                            />


                            <SkillCategoryCard
                                title="Design & UI/UX"
                                skills={skillCategories.design}
                                
                            />


                            <SkillCategoryCard
                                title="Collaboration Tools"
                                skills={skillCategories.collaboration}
                                
                            />


                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}