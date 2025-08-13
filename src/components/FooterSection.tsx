import styles from './FooterSection.module.css';

const aboutUs = [
    {
        title: "Company Profile",
        href: "#",
        children: [
            { title: "History", href: "#" },
            { title: "Vision, Mission & Culture", href: "#" },
            { title: "BOC", href: "#" },
            { title: "BOD", href: "#" },
            { title: "Technical Committee", href: "#" },
            { title: "Organization Structure", href: "#" },
        ]
    },
    {
        title: "Achievement",
        href: "#",
        children: [
            { title: "Cooperation", href: "#" },
            { title: "Award & Recognition", href: "#" },
        ]
    },
    {
        title: "Opportunity",
        href: "#",
        children: [
            { title: "Procurement", href: "#" },
            { title: "Assets Auction", href: "#" },
            { title: "Career Auction", href: "#" },
        ]
    },
    {
        title: "Documentation",
        href: "#",
        children: [
            { title: "Photo", href: "#" },
            { title: "Podcast", href: "#" },
        ]
    },
    {
        title: "ESGRC",
        href: "#",
        children: [
            { title: "Environment", href: "#" },
            { title: "Corporate Social Responsibility", href: "#" },
            {
                title: "Good Corporate Governance",
                href: "#",
                children: [
                    { title: "Code of Conduct", href: "#" },
                    { title: "Principal & Policy", href: "#" },
                    { title: "Implementation", href: "#" },
                    { title: "Internal Audit Unit", href: "#" },
                    { title: "Gratification Control", href: "#" },
                    { title: "Whistle Blowing System", href: "#" },
                    { title: "Risk Management Policy", href: "#" },
                    { title: "Communication Policy", href: "#" }
                ]
            },
        ]
    }
]

export default function FooterSection() {
    return (
        <footer className={`${styles.background} py-10`}>
            <div className="container mx-auto px-6">
                {/* Menu Section */}
                <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/20 pb-8">
                    {/* Contact Info */}
                    <div className="w-full text-white/75">
                        <p className="text-xs md:text-sm mb-4 leading-relaxed">
                            Jl. Yos Sudarso 38-40, Tanjung Priok, Jakarta - 14320
                        </p>

                        <div className="space-y-4">
                            <div>
                                <a
                                    href="mailto:ho@bki.co.id"
                                    className="text-xs md:text-sm hover:text-white/50 transition-colors duration-200"
                                >
                                    ho@bki.co.id
                                </a>
                                <p className="text-xs md:text-sm font-light">
                                    (Corporate Secretary, Corporate Communication)
                                </p>
                            </div>

                            <div>
                                <a
                                    href="mailto:cs@bki.co.id"
                                    className="text-xs md:text-sm hover:text-white/50 transition-colors duration-200"
                                >
                                    cs@bki.co.id
                                </a>
                                <p className="text-xs md:text-sm font-light">
                                    (Customer Communication)
                                </p>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-1 text-xs md:text-sm font-light">
                            <li>+62 21 430 10 17</li>
                            <li>+62 21 430 17 03</li>
                            <li>+62 21 4393 70 21</li>
                            <li>+62 21 435 32 91</li>
                            <li>+62 21 436 19 03/04</li>
                            <li>+62 21 436 18 99</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="w-full">
                        <h3 className="font-semibold text-xs md:text-sm mb-4">Services</h3>
                        <ul className="space-y-2 text-xs md:text-sm font-light">
                            {[
                                { label: "Classification", href: "#" },
                                { label: "Statutory", href: "#" },
                                { label: "Marine Services", href: "#" },
                                { label: "Energy & Industry", href: "#" },
                                { label: "BKI Academy", href: "#" },
                            ].map((item) => (
                                <li key={item.label} className="py-1">
                                    <a
                                        href={item.href}
                                        className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Research */}
                    <div className="w-full">
                        <h3 className="font-semibold text-xs md:text-sm mb-4">Research</h3>
                        <ul className="space-y-2 text-xs md:text-sm font-light">
                            {[
                                { label: "Research & Development", href: "#" },
                                { label: "Technical Journal", href: "#" },
                            ].map((item) => (
                                <li key={item.label} className="py-1">
                                    <a
                                        href={item.href}
                                        className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Publication */}
                    <div className="w-full">
                        <h3 className="font-semibold text-xs md:text-sm mb-4">Publication</h3>
                        <ul className="space-y-2 text-xs md:text-sm font-light">
                            {[
                                { label: "News", href: "#" },
                                { label: "Event", href: "#" },
                                { label: "Article", href: "#" },
                                { label: "Annual Report", href: "#" },
                            ].map((item) => (
                                <li key={item.label} className="py-1">
                                    <a
                                        href={item.href}
                                        className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="w-full">
                        <h3 className="font-semibold text-xs md:text-sm mb-4">About Us</h3>
                        <ul className="space-y-2 text-xs md:text-sm font-light">
                            {aboutUs.map((menu, idx) => (
                                <li key={idx} className={menu.children ? "group" : ""}>
                                    {/* Parent link */}
                                    <a
                                        href={menu.href}
                                        className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                                    >
                                        {menu.title}
                                    </a>
                                    {/* Render submenu kalau ada children */}
                                    {menu.children && (
                                        <ul
                                            className="pl-4 mt-2 space-y-2 max-h-0 opacity-0 overflow-hidden transition-all duration-1000
                           group-hover:max-h-screen group-hover:opacity-100 group-focus-within:max-h-screen group-focus-within:opacity-100"
                                        >
                                            {menu.children.map((child, childIdx) => (
                                                <li key={childIdx} className={child.children ? "group/sub" : ""}>
                                                    <a
                                                        href={child.href}
                                                        className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                                                    >
                                                        {child.title}
                                                    </a>
                                                    {/* Render sub-submenu kalau ada children */}
                                                    {child.children && (
                                                        <ul
                                                            className="pl-4 mt-2 space-y-2 max-h-0 opacity-0 overflow-hidden transition-all duration-1000
                group-hover/sub:max-h-screen group-hover/sub:opacity-100"
                                                        >
                                                            {child.children.map((child2, child2Idx) => (
                                                                <li key={child2Idx}>
                                                                    <a
                                                                        href={child2.href}
                                                                        className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                                                                    >
                                                                        {child2.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">bki</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs md:text-sm text-center font-light">
                        © Copyright 2024, All Rights Reserved by BKI
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {/* Twitter */}
                        <a href="#" className="hover:opacity-80 border border-white rounded-full p-2 flex items-center justify-center" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557a9.9 9.9 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.726 0-4.932 2.21-4.932 4.932 0 .387.044.763.127 1.124-4.1-.206-7.73-2.173-10.156-5.162a4.93 4.93 0 0 0-.666 2.479c0 1.71.87 3.215 2.19 4.099a4.902 4.902 0 0 1-2.235-.616c-.054 1.997 1.404 3.873 3.488 4.29a4.93 4.93 0 0 1-2.224.084c.63 1.963 2.45 3.39 4.604 3.43A9.868 9.868 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 22c9.056 0 14.009-7.512 14.009-14.009 0-.213-.004-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            className="hover:opacity-80 bg-blue-600 rounded-full p-2 flex items-center justify-center"
                            aria-label="Facebook"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 
                                        1.325 24h11.495v-9.294H9.691V11.07h3.129V8.414c0-3.1 1.894-4.788 
                                        4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.506 0-1.798.716-
                                        1.798 1.766v2.316h3.595l-.468 3.636h-3.127V24h6.127C23.403 24 24 
                                        23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="hover:opacity-80 border border-white rounded-full p-2 flex items-center justify-center" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.4 3.635 1.366 2.669 2.332 2.4 3.505 2.342 4.782 2.284 6.062 2.27 6.471 2.27 12s.014 5.938.072 7.218c.058 1.277.327 2.45 1.293 3.416.966.966 2.139 1.235 3.416 1.293C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.327 3.416-1.293.966-.966 1.235-2.139 1.293-3.416.058-1.28.072-1.689.072-7.218s-.014-5.938-.072-7.218c-.058-1.277-.327-2.45-1.293-3.416C19.398.4 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a3.999 3.999 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="#" className="hover:opacity-80 border border-white rounded-full p-2 flex items-center justify-center" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
