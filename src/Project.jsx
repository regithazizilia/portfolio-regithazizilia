import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import ImageSlider from './ImageSlider.jsx'
import bcupcake from './assets/thumbnails/bc1.png'
import beautyhealth from './assets/thumbnails/bh1.png'
import hotel from './assets/thumbnails/h1.png'
import igd from './assets/thumbnails/igd3.png'
import kp from './assets/thumbnails/kp1.png'
import mikti from './assets/thumbnails/mikti1.png'
import makanan from './assets/thumbnails/mn1.png'
import obat from './assets/thumbnails/obat2.png'
import ow from './assets/thumbnails/ow1.jpg'
import sadmin from './assets/thumbnails/sa1.png'

import bcupcake2 from './assets/modal/bc2.png'
import bcupcake3 from './assets/modal/bc3.png'
import bcupcake4 from './assets/modal/bc4.png'
import bcupcake5 from './assets/modal/bc5.png'
import bcupcake6 from './assets/modal/bc6.png'
import bcupcake7 from './assets/modal/bc7.png'

import beautyhealth2 from './assets/modal/bh2.png'
import beautyhealth3 from './assets/modal/bh3.png'
import beautyhealth4 from './assets/modal/bh4.png'
import beautyhealth5 from './assets/modal/bh5.png'
import beautyhealth6 from './assets/modal/bh6.png'

import hotel2 from './assets/modal/h2.png'
import hotel3 from './assets/modal/h3.png'
import hotel4 from './assets/modal/h4.png'
import hotel5 from './assets/modal/h5.png'


import igd4 from './assets/modal/igd4.png'
import igd5 from './assets/modal/igd5.png'
import igd6 from './assets/modal/igd6.png'
import igd7 from './assets/modal/igd7.png'
import igd8 from './assets/modal/igd8.png'
import igd9 from './assets/modal/igd9.png'
import igd10 from './assets/modal/igd10.png'
import igd11 from './assets/modal/igd11.png'

import kp2 from './assets/modal/kp2.png'
import kp3 from './assets/modal/kp3.png'
import kp4 from './assets/modal/kp4.png'
import kp5 from './assets/modal/kp5.png'
import kp6 from './assets/modal/kp6.png'
import kp7 from './assets/modal/kp7.png'
import kp8 from './assets/modal/kp8.png'
import kp9 from './assets/modal/kp9.png'
import kp10 from './assets/modal/kp10.png'
import kp11 from './assets/modal/kp11.png'
import kp12 from './assets/modal/kp12.png'
import kp13 from './assets/modal/kp13.png'

import mikti2 from './assets/modal/mikti2.png'
import mikti3 from './assets/modal/mikti3.png'
import mikti4 from './assets/modal/mikti4.png'
import mikti5 from './assets/modal/mikti5.png'
import mikti6 from './assets/modal/mikti6.png'

import mn2 from './assets/modal/mn2.png'
import mn3 from './assets/modal/mn3.png'
import mn4 from './assets/modal/mn4.jpg'
import mn5 from './assets/modal/mn5.png'
import mn6 from './assets/modal/mn6.png'
import mn7 from './assets/modal/mn7.png'

import obat2 from './assets/modal/obat1.png'
import obat3 from './assets/modal/obat3.png'
import obat4 from './assets/modal/obat4.png'
import obat5 from './assets/modal/obat5.png'
import obat6 from './assets/modal/obat6.png'
import obat7 from './assets/modal/obat7.png'
import obat8 from './assets/modal/obat8.png'
import obat9 from './assets/modal/obat9.png'
import obat10 from './assets/modal/obat10.png'
import obat11 from './assets/modal/obat11.png'
import obat12 from './assets/modal/obat12.png'

import ow2 from './assets/modal/ow2.jpg'
import ow3 from './assets/modal/ow3.jpg'
import ow4 from './assets/modal/ow4.jpg'

import s2 from './assets/modal/sa2.png'
import s3 from './assets/modal/sa3.png'
import s4 from './assets/modal/sa4.png'
import s5 from './assets/modal/sa5.png'
import s6 from './assets/modal/sa6.png'
import s7 from './assets/modal/sa7.png'
import s8 from './assets/modal/sa8.png'
import s9 from './assets/modal/sa9.png'
import s10 from './assets/modal/sa10.png'
import s11 from './assets/modal/sa11.png'
import s12 from './assets/modal/sa12.png'
import s13 from './assets/modal/sa13.png'
import s14 from './assets/modal/sa14.png'
import s15 from './assets/modal/sa15.png'
import s16 from './assets/modal/sa16.png'


export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.2 })
    const [activeProject, setActiveProject] = useState(null)


    // bcupcake
    const bcupcakeImages = [
        bcupcake,
        bcupcake2, bcupcake3, bcupcake4,
        bcupcake5, bcupcake6, bcupcake7,
    ]

    // beauty & health
    const beautyHealthImages = [
        beautyhealth,
        beautyhealth2, beautyhealth3,
        beautyhealth4, beautyhealth5, beautyhealth6,
    ]

    // hotel
    const hotelImages = [
        hotel,
        hotel2, hotel3, hotel4, hotel5,
    ]

    // igd
    const igdImages = [
        
        igd, igd4, igd5, igd6,
        igd7, igd8, igd9, igd10, igd11,
    ]

    // kp
    const kpImages = [
        kp,
        kp2, kp3, kp4, kp5, kp6, kp7,
        kp8, kp9, kp10, kp11, kp12, kp13,
    ]

    // mikti
    const miktiImages = [
        mikti,
        mikti2, mikti3, mikti4, mikti5, mikti6,
    ]

    // makanan
    const makananImages = [
        makanan,
        mn2, mn3, mn4, mn5, mn6, mn7,
    ]

    // obat
    const obatImages = [
        obat2,
        obat, obat3, obat4, obat5, obat6, obat7,
        obat8, obat9, obat10, obat11, obat12,
    ]

    // ow
    const owImages = [
        ow3,
        ow2, ow4, ow,
    ]

    // sadmin
    const sadminImages = [
        sadmin,
        s2, s3, s5, s6, s7, s8,
        s9, s10, s11, s12, s13, s14, s15, s16,
    ]

    // ===== DATA STATIS =====
    const projects = [
        {
            id: 1,
            name: 'Sistem LKH dan Penilaian Kinerja',
            category: 'Web Development',
            desc: `LEMBAR KERJA HARIAN DAN MANAJEMEN PENILAIAN ANGKA KREDIT PEGAWAI NON-ASN BAPPEDA PROVINSI JAWA BARAT`,
            tech: 'Vue.js, Tailwind, Laravel, MySQL',
            thumbnail: kp,
            github_url: 'https://github.com/regithazizilia/simapak2',
            image_path: kpImages,
        },
        {
            id: 2,
            name: 'Sistem Management IGD',
            category: 'Web Development',
            desc: `A web-based system with CRUD functionality to manage doctor, nurse, patient, and bed information, designed to support emergency room operations by tracking staff assignments, patient status, and bed availability efficiently.`,
            tech: 'CI, MySQL, PHP, Javascript',
            thumbnail: igd,
            github_url: 'https://github.com/regithazizilia/manajemenigd.git',
            image_path: igdImages
        },
        {
            id: 3,
            name: 'Bittersweet & Cupcake',
            category: 'Web Development',
            desc: `A web-based e-commerce system for dessert products that focuses on user interface design and ordering simulation, allowing users to view product details and prices, add items to a shopping cart, see order summaries including total price, and specify delivery addresses`,
            tech: 'HTML, CSS, JavaScript',
            thumbnail: bcupcake,
            github_url: 'https://github.com/regithazizilia/BittersweetCupcake.git',
            image_path: bcupcakeImages,
        },
        {
            id: 4,
            name: 'Makanan Nusantara',
            category: 'Web Development',
            desc: `A website that presents several displays of information about Indonesian food.`,
            tech: 'HTML, CSS, JavaScript',
            thumbnail: makanan,
            github_url: 'https://github.com/regithazizilia/makanannusantara.git',
            image_path: makananImages,
        },
        {
            id: 5,
            name: 'PHARMACARE',
            category: 'Web Development (Product Owner)',
            desc: `Product Owner for a pharmaceutical inventory management system project. Served as a bridge between developers and stakeholders to ensure the system met user requirements and provided optimal business value.`,
            tech: 'PHP, MySQL, JavScript, CSS',
            thumbnail: obat,
            image_path: obatImages,
        },
        {
            id: 6,
            name: 'Hotel Management System',
            category: 'Web Development (Scrum Master)',
            desc: `Served as Scrum Master in a software development project for the “Hotel Reservation” application. Leading daily scrums, as well as monitoring and coordinating to ensure smooth communication between team members and overcoming any obstacles that arise.`,
            tech: 'PHP, MySQL, JavScript, CSS',
            thumbnail: hotel,
            image_path: hotelImages,
        },
        {
            id: 7,
            name: 'Capstone Project MSIB 7',
            category: 'Sentiment Analysis',
            desc: `Developed a sentiment analysis model that processed and analyzed reviews to provide insights into audience perceptions using Random Forest and SVM methods.`,
            tech: 'Google Colab, Python',
            thumbnail: mikti,
            colab_url: 'https://drive.google.com/file/d/1CjcOOPaxlIj1rlV08YqVk4mbFME24Tz6/view',
            image_path: miktiImages,
        },
        {
            id: 8,
            name: 'Other World',
            category: 'Desktop Development',
            desc: `A simple game about the adventures of a prince fighting monsters.`,
            tech: 'Eclipse, Java',
            thumbnail: ow,
            github_url: 'https://github.com/regithazizilia/OtherWorldGame.git',
            image_path: owImages,
        },
        {
            id: 9,
            name: 'Sistem Administrasi Tugas Akhir',
            category: 'Desktop Development',
            desc: `Facilitates the processing of final project administrative tasks, including the selection of supervision schedules, eligibility for seminar submission, seminar grading, and supervisor assignment.`,
            tech: 'Netbeans, Java, MySQL',
            thumbnail: sadmin,
            github_url: 'https://github.com/regithazizilia/TubesIMPL.git',
            image_path: sadminImages,
        },
        {
            id: 10,
            name: 'Beauty Health',
            category: 'Desktop Development',
            desc: `An application that provides information about various types of skin problems and recommendations for skincare products that are equipped with product price calculations.`,
            tech: 'Netbeans, Java',
            thumbnail: beautyhealth,
            github_url: 'https://github.com/regithazizilia/BeautyHealth.git',
            image_path: beautyHealthImages,
        },

    ]

    return (
        <section
            id="projects"
            ref={ref}
            className="scroll-mt-32 px-6 sm:px-20 lg:px-40 py-24 bg-main text-white"
        >
            <div
                className={`transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                    PROJECTS
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="relative cursor-pointer group"
                            onClick={() => setActiveProject(project)}
                        >
                            {/* BORDER ANIMATION */}
                            <div className="absolute -inset-0.5 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 animate-spin-slow"></div>
                                <div className="absolute inset-[2px] bg-gradient-to-r from-pink-200 to-pink-200 rounded-2xl animate-spin-slow-reverse"></div>
                            </div>

                            {/* CARD */}
                            <div className="relative bg-grid rounded-2xl overflow-hidden m-0.5">
                                <img
                                    src={project.thumbnail}
                                    alt={project.name}
                                    className="w-full h-44 object-cover"
                                />


                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {project.name}
                                    </h3>
                                    <span className="text-xs bg-grid2 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== MODAL ===== */}
            {activeProject && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-grid rounded-xl w-full max-w-2xl relative">

                        <button
                            className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-400"
                            onClick={() => setActiveProject(null)}
                        >
                            ✕
                        </button>

                        <div className="p-4 sm:p-6">
                            <h3 className="text-xl font-bold mb-1">
                                {activeProject.name}
                            </h3>

                            <span className="inline-block text-xs bg-grid2 px-2 py-0.5 rounded-full mb-3">
                                {activeProject.category}
                            </span>

                            <p className="text-sm mb-3 whitespace-pre-line">
                                {activeProject.desc}
                            </p>

                            <p className="text-sm mb-3">
                                <span className="font-medium">Tech:</span>{' '}
                                {activeProject.tech}
                            </p>

                            {activeProject.github_url && (
                                <a
                                    href={activeProject.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-100 hover:underline text-sm mb-4 inline-block"
                                >
                                    View GitHub →
                                </a>
                            )}
                            {activeProject.colab_url && (
                                <a
                                    href={activeProject.colab_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-100 hover:underline text-sm mb-4 inline-block"
                                >
                                    View Google Drive →
                                </a>
                            )}

                            {/* SLIDER */}
                            {activeProject.image_path && (
                                <ImageSlider
                                    images={activeProject.image_path}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
