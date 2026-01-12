'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certification' },
    { name: 'Contact', href: '#contact' },
]

function HeroText() {
    const roles = ['System Analyst', 'Software Documentation', 'Data Analyst', 'Software Developer', 'Frontend Developer']
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <p className="mt-6 text-pretty font-medium gradient-text sm:text-4xl mb-3  ">
                    Hi! I am
                </p>
                <h1 className="text-balance  font-semibold tracking-tight text-white text-8xl mb-5">
                    Regitha Zizilia
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium gradient-text sm:text-2xl">
                    {roles[currentRole]}
                </p>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Highlight link sesuai scroll
    useEffect(() => {
        const handleScroll = () => {
            let current = ''
            const navHeight = 96

            navigation.forEach((item) => {
                const section = document.querySelector(item.href)
                if (section) {
                    const top = section.offsetTop - navHeight
                    const bottom = top + section.offsetHeight

                    if (window.scrollY >= top && window.scrollY < bottom) {
                        current = item.href
                    }
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-main">
            <header className="fixed inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-center p-6 lg:px-8 gap-x-6">
                    <div className="hidden lg:flex gap-x-6">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-sm/6 font-semibold px-3 py-1 rounded-md transition ${activeSection === item.href
                                        ? 'bg-navbar text-red-900'
                                        : 'text-white hover:bg-pink hover:text-pink-200'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden absolute right-6">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md font-semibold transition ${activeSection === item.href
                                            ? 'bg-white text-gray-900'
                                            : 'text-white hover:bg-white hover:text-gray-900'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <HeroText />
                {/* background blur shapes */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#FFE6D4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}
