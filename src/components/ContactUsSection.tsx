import Image from "next/image";
import Link from "next/link";

export default function ContactUsSection() {
    return (
        <section className="2xl:p-24 p-16 flex flex-col justify-center items-center bg-white">
            <div
                className="relative w-full xl:p-12 md:p-10 p-8 flex 2xl:flex-row flex-col justify-center items-center bg-gradient-to-b from-[#0A436A] to-black min-h-[50vh]">
                <Image src={'/bki-white-bg.png'} alt={"Logo BKI Putih"} width={780} height={500}
                       className="object-contain absolute bottom-0 left-0 opacity-20"/>
                <div className="flex w-full 2xl:w-[unset] 2xl:min-h-[40vh] flex-col justify-between gap-4">
                    <div className="flex flex-col 2xl:gap-3.5 md:gap-3 gap-2.5">
                        <p className="2xl:text-4xl md:text-3xl text-2xl font-bold text-white">
                            Our experts are here to help.
                        </p>
                        <p className="2xl:text-xl md:text-lg font-semibold text-white max-w-1/2">
                            Fill out the form to contact us or create your myBKI account and start using our TICCS
                            services
                        </p>
                    </div>
                    <div
                        className="relative flex flex-col 2xl:gap-5 md:gap-4 gap-3.5 2xl:py-4 md:py-3 py-2.5 2xl:px-5 md:px-4 px-3.5 border border-white self-start">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl z-0"/>
                        <div className="flex justify-between items-center z-1">
                            <div className="flex items-center 2xl:gap-2 md:gap-1.5 gap-1">
                                <div
                                    className="rounded-full border border-white flex justify-center items-center p-1.5">
                                    <Image src={'/icons/phone.png'} alt={"Phone Icon"} width={22} height={22}
                                           className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                                </div>
                                <p className="text-white 2xl:text-xl md:text-lg font-semibold">
                                    +62 21-350 5665
                                </p>
                            </div>
                            <div className="flex items-center 2xl:gap-2 md:gap-1.5 gap-1">
                                <div
                                    className="rounded-full border border-white flex justify-center items-center p-1.5">
                                    <Image src={'/icons/email.png'} alt={"Email Icon"} width={22} height={22}
                                           className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                                </div>
                                <p className="text-white 2xl:text-xl md:text-lg font-semibold">
                                    BKI@mail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center 2xl:gap-2 md:gap-1.5 gap-1 z-1">
                            <div
                                className="rounded-full border border-white flex justify-center items-center p-1.5">
                                <Image src={'/icons/location.png'} alt={"Location Icon"} width={22} height={22}
                                       className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                            </div>
                            <p className="text-white 2xl:text-xl md:text-lg font-semibold">
                                Jl. Ir. H. Juanda No. 28 Jakarta Pusat 10120
                            </p>
                        </div>
                        <div className="flex items-center 2xl:gap-6 md:gap-5 gap-4 z-1">
                            <Link href={'https://www.instagram.com/bki_1964/'} target={'_blank'}
                                  className="rounded-full flex justify-center items-center p-1.5 bg-white/60 transition-all duration-500 ease-in-out hover:shadow-[0_0_7px_0_#ffffff] hover:shadow-white/80">
                                <Image src={'/icons/instagram.png'} alt={"Instagram Icon"} width={22} height={22}
                                       className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                            </Link>
                            <Link href={'https://www.tiktok.com/@bkiacademy'} target={'_blank'}
                                  className="rounded-full flex justify-center items-center p-1.5 bg-white/60 transition-all duration-500 ease-in-out hover:shadow-[0_0_7px_0_#ffffff] hover:shadow-white/80">
                                <Image src={'/icons/tiktok.png'} alt={"Tiktok Icon"} width={22} height={22}
                                       className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                            </Link>
                            <Link href={'https://www.facebook.com/BKI1964/?locale=id_ID'} target={'_blank'}
                                  className="rounded-full flex justify-center items-center p-1.5 bg-white/60 transition-all duration-500 ease-in-out hover:shadow-[0_0_7px_0_#ffffff] hover:shadow-white/80">
                                <Image src={'/icons/facebook.png'} alt={"Facebook Icon"} width={22} height={22}
                                       className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                            </Link>
                            <Link href={'https://www.youtube.com/BKI1964'} target={'_blank'}
                                  className="rounded-full flex justify-center items-center p-1.5 bg-white/60 transition-all duration-500 ease-in-out hover:shadow-[0_0_7px_0_#ffffff] hover:shadow-white/80">
                                <Image src={'/icons/youtube.png'} alt={"Youtube Icon"} width={22} height={22}
                                       className="object-contain 2xl:w-5 md:w-4 w-3 2xl:h-5 md:h-4 h-3"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 2xl:pt-0 pt-8 flex flex-col 2xl:gap-7 md:gap-6 gap-5 w-full h-full">
                    <div className="flex flex-col 2xl:gap-6 md:gap-5 gap-4">
                        {/* Full Name */}
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 border-b border-slate-200/60 py-4 outline-none focus:border-white transition-colors"
                        />

                        {/* Email */}
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 border-b border-slate-200/60 py-4 outline-none focus:border-white transition-colors"
                        />

                        {/* Phone Number */}
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 border-b border-slate-200/60 py-4 outline-none focus:border-white transition-colors"
                        />

                        {/* Message */}
                        <textarea
                            id="message"
                            rows={6}
                            placeholder="Message"
                            className="w-full resize-y bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 border-b border-slate-200/60 py-4 outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <button
                        type="button"
                        className="relative mt-2 w-full px-6 py-4 text-center text-2xl border border-white/50 font-medium text-white tracking-wide cursor-pointer group"
                    >
                        <div
                            className="absolute inset-0 bg-white/10 group-hover:border-white group-hover:bg-white/20 blur-xs transition-colors"/>
                        Contact <span aria-hidden>→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}