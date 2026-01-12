import { useInView } from 'react-intersection-observer'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Pdf from './assets/documents/3411211080_Artikel.pdf'

const CustomStarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
)

const CustomPublicIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
)

const features = [
    {
        name: 'GPA: 3.78/4.00',
        icon: CustomStarIcon,
    },
    {
        name: 'Jurnal Sistem informasi (SISTEMASI)',
        description: 'KLASIFIKASI PENYAKIT KANKER PARU-PARU DENGAN ALGORITMA EXTREME GRADIENT BOOSTING (XGBOOST) DAN MUTUAL INFORMATION SEBAGAI METODE FEATURE SELECTION',
        icon: CustomPublicIcon,
    },
]

export default function Education() {
    const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 })
    const { ref: pdfRef, inView: pdfInView } = useInView({ threshold: 0.2 })

    return (
        <section id="education" className="flex flex-col lg:flex-row items-center px-40 py-24 bg-main text-white lg:justify-between">
            <div className="overflow-hidden bg-main py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                        {/* Text & Info */}
                        <div
                            ref={textRef}
                            className={`lg:pt-4 lg:pr-8 transition-all duration-700 ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}
                        >
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-bold gradient-text">EDUCATION</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    Jenderal Achmad Yani University
                                </p>
                                <p className="mt-6 text-lg/8 text-pink-100">
                                    Bachelor of Informatics Engineering | Data and Software Engineering
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <feature.icon aria-hidden="true" className="absolute top-0 left-0 size-5 text-fuchsia-50" />
                                            <dt className="font-semibold text-white">{feature.name}</dt>
                                            <dd className="mt-1 text-pink-50">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>

                                <div className="mt-8 flex gap-4">
                                    <span className="bg-grid text-white px-4 py-2 rounded-full font-medium text-sm">
                                        Publications Indexed in Sinta 3
                                    </span>
                                    <span className="bg-grid text-white px-4 py-2 rounded-full font-medium text-sm">
                                        2025
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* PDF Preview */}
                        <div
                            ref={pdfRef}
                            className={`w-full max-w-2xl mx-auto rounded-xl shadow-2xl overflow-hidden 
                border-2 border-pink-100 transition-all duration-700
                ${pdfInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <iframe
                                src={Pdf}
                                className="w-full h-full"
                                title="PDF Preview"
                                style={{
                                    border: 'none',
                                    borderRadius: '0 0 10px 10px'
                                }}
                            />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
