import Link from "next/link";
import {classes} from "@/utils/string";
import {Fragment} from "react";

interface RouteItem {
    text: string;
    href?: string;
}

interface Props {
    routes: RouteItem[];
    backgroundClass: string;
    title: string;
    description?: string;
    innerComponent?: React.ReactNode;
}

export default function Hero(props: Props) {
    const {routes, backgroundClass, title, description, innerComponent} = props;
    return (
        <section
            className={classes("w-full relative overflow-hidden", innerComponent ? "h-[60vh]" : "h-[50vh]")}>
            <div className={classes('absolute inset-0 bg-cover blur-xs bg-center', backgroundClass)}/>
            <div
                className={classes('absolute top-0 inset-0 bg-gradient-to-b from-[#0A436A06] to-[#0A436A00]', innerComponent ? "h-[60vh]" : "h-[50vh]")}/>
            <div
                className={classes('absolute top-0 inset-0 bg-gradient-to-t from-[#0A436A] to-[#0A436A00]', innerComponent ? "h-[60vh]" : "h-[50vh]")}/>
            <div
                className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white">
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
                <p className="mt-4 text-2xl md:text-4xl 2xl:text-[64px] font-semibold">
                    {title}
                </p>
                {description && (
                    <p className="mt-4 text-md md:text-lg 2xl:text-[32px] max-w-3/5">
                        {description}
                    </p>
                )}
            </div>

            {innerComponent}
        </section>
    )
}