import { Heart, Code, Coffee } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-main text-white border-t border-gray-800">
            {/* Main Footer */}
            <div className="px-6 sm:px-20 lg:px-40 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span className="gradient-text">Portfolio</span>
                        </h3>
                        <p className="text-white max-w-xs">
                            Passionate about developing innovative software and analyzing data into actionable insights.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold gradient-text">Quick Links</h4>
                        <ul className="space-y-2 text-white">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#education" className="hover:text-white transition-colors">
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-white transition-colors">
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a href="#experience" className="hover:text-white transition-colors">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-white transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#certification" className="hover:text-white transition-colors">
                                    Certifications
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 px-6 sm:px-20 lg:px-40 py-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-gray-400 text-sm">
                    {/* Copyright */}
                    <div className="flex items-center gap-1 text-white">
                        <span>© {currentYear} All rights reserved.</span>
                        <Heart size={14} className="text-red-500 animate-pulse" />
                    </div>

                    {/* Separator */}
                    <span className="hidden md:inline text-white">|</span>

                    {/* Made with */}
                    <div className="flex items-center gap-2 text-white">
                        <Code size={14} className="text-indigo-400" />
                        <span>Made with</span>
                        <Coffee size={14} className="text-yellow-500" />
                        <span>by</span>
                        <span className="text-white font-medium">Regitha Zizilia</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}