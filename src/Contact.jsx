import { useInView } from 'react-intersection-observer'
import { Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    })

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://www.linkedin.com/in/regitha-zizilia-625390220/',
            text: 'regitha-zizilia',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        },
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/regithazizilia',
            text: 'regithazizilia',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        },
        {
            name: 'Instagram',
            icon: <Instagram size={24} />,
            url: 'https://www.instagram.com/rzzlaa',
            text: '@rzzlaa',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        },
        {
            name: 'Email',
            icon: <Mail size={24} />,
            url: 'mailto:regithazizilia@gmail.com',
            text: 'regithazizilia@gmail.com',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        },
        {
            name: 'Phone',
            icon: <Phone size={24} />,
            url: 'https://wa.me/6281320397855',
            text: '+62 813 2039 7855',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        },
        {
            name: 'Location',
            icon: <MapPin size={24} />,
            text: 'Cimahi, Jawa Barat',
            color: 'hover:bg-pink-300/10',
            bgColor: 'bg-pink-300/10'
        }
    ]

    return (
        <section
            id="contact"
            ref={ref}
            className="px-6 sm:px-20 lg:px-40 py-48 bg-main text-white"
        >
            <div
                className={`w-full transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                {/* Flex Container - Text kiri, Icons kanan */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    
                    {/* Left Side - Text */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
                            Let's Work
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                            Together. Get in Touch
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            Feel free to reach out if you'd like to collaborate, discuss opportunities, or have any questions.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-pink-200" />
                                <span>regithazizilia@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-pink-200" />
                                <span>+62 813 2039 7855</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-pink-200" />
                                <span>Cimahi, Jawa Barat</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Social Icons */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url || '#'}
                                    target={item.url ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 
                                              ${item.bgColor} ${item.color} hover:scale-105 hover:shadow-xl`}
                                >
                                    {/* Icon Circle */}
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4
                                                   ${item.bgColor} group-hover:bg-white/20 transition-colors`}>
                                        <div className="text-white group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Text */}
                                    <span className="font-medium text-sm text-center">{item.name}</span>
                                    {item.text && (
                                        <span className="text-xs text-gray-400 mt-1 text-center">{item.text}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}