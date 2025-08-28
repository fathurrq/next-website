import PageTransition from "@/components/page-transition";
import {Fragment} from "react";
import Link from "next/link";

interface RouteItem {
    text: string;
    href?: string;
}

const routes: RouteItem[] = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Services',
        href: '/our-services'
    },
    {
        text: 'Classification',
        href: '/our-services/classification'
    },
    {
        text: 'Ship Register',
    },
]

export default function ShipRegisterPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            <section
                className="w-full relative overflow-hidden h-[80vh]">
                <div className="absolute inset-0 bg-cover blur-xs bg-center"/>
                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A436A] to-[#0A436A00] h-[15vh]"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30">
                    <div className="flex flex-row w-full justify-center items-center gap-2">
                        {routes.map((route, index) => (
                            <Fragment key={route.text + '-' + index}>
                                {index > 0 && (
                                    <span className="md:text-xl 2xl:text-3xl">
                                    /
                                </span>
                                )}
                                {route.href ? (
                                    <Link href={route.href} className="md:text-xl 2xl:text-3xl">
                                        {route.text}
                                    </Link>
                                ) : (
                                    <span className="md:text-xl 2xl:text-3xl text-[#ffffff75]">
                                    {route.text}
                                </span>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}