"use client"
import Link from "next/link";
import AccordionItem from "../AccordionItem";

export default function JobSection() {

    const accordionData = [
        {
            title: "Scrum Master",
            description:
                "A Scrum Master helps the software development team to deliver the product as scheduled in high-quality with scrum methodology.",
            descriptionLi: [
                "Manage each project’s scope and timeline",
                "Help product owner to make the product backlogs ready",
                "Coach team how to follow agile scrum",
                "Facilitate daily scrum, sprint planning, demo, retrospective",
                "Remove impediments for the scrum team",
                "Collaborate with other teams and clients",
            ],
            qualifications: [
                "Extensive knowledge of agile methodology (Scrum, Kanban, XP)",
                "Experience in Scrum Management",
                "Stakeholder Management, Negotiation & Communication",
                "Familiar with tools (Wrike, Trello, Confluence)",
            ],
        },
        {
            title: "VP Human Capital Strategy",
            description:
                "Bertanggung jawab atas strategi pengembangan SDM, talent management, dan budaya kerja.",
        },
        {
            title: "VP Pengadaan, Umum dan Manajemen Aset",
            description:
                "Bertanggung jawab atas strategi pengembangan SDM, talent management, dan budaya kerja.",
        },
        {
            title: "VP Tektnologi Informasi",
            description:
                "Bertanggung jawab atas strategi pengembangan SDM, talent management, dan budaya kerja.",
        },
        {
            title: "VP Manajemen Risiko",
            description:
                "Bertanggung jawab atas strategi pengembangan SDM, talent management, dan budaya kerja.",
        },
    ];

    return (
        <div
            id="job-opportunities"
            className="font-montserrat text-black flex flex-col w-full h-auto p-4 md:p-16 2xl:p-24 gap-12 2xl:gap-16 bg-gradient-to-b from-[#FFFFFF] to-[#BF9F5F]"
        >
            <div className="w-full h-auto flex flex-col justify-center items-center gap-12 px-4 2xl:px-6 py-12 2xl:py-16 bg-white shadow-md">
                <div className="flex flex-col items-center text-center gap-3 2xl:gap-5">
                    <h3 className="font-bold text-[#BF9F5F] text-xl md:text-3xl 2xl:text-5xl">Job Opportunities</h3>
                    <p className="text-xs md:text-base 2xl:text-lg">BKI believe putting the best people in accordance with the interests and abilities are key in regulating human resources.
                        To that end, we provide opportunities for qualified employees to continue to develop according to their interest and ability to move forward with us.</p>
                </div>

                <div className="w-full h-auto flex flex-col bg-white border border-gray-300">
                    <h3 className="font-bold text-[#0A436A] text-xl md:text-3xl 2xl:text-5xl 2xl:py-6 2xl:px-4 py-4 px-2">Head Office - Jakarta</h3>
                    {accordionData.map((item, index) => (
                        <AccordionItem key={index} title={item.title}>
                            <div>
                                <h4 className="font-semibold mb-2 text-lg md:text-2xl 2xl:text-4xl">Deskripsi:</h4>
                                <p className="mb-2">
                                    {item.description}
                                </p>

                                {item.descriptionLi && item.descriptionLi.length > 0 &&
                                    (<ul className="list-disc list-inside mb-4">
                                        {item.descriptionLi.map((di, dx) => (
                                            <li key={dx}>{di}</li>
                                        ))}
                                    </ul>)}

                                {item.qualifications && item.qualifications.length > 0 && (<>
                                    <h4 className="font-semibold mb-2 text-lg md:text-2xl 2xl:text-4xl">Kualifikasi:</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        {item.qualifications.map((di, dx) => (
                                            <li key={dx}>{di}</li>
                                        ))}
                                    </ul>
                                </>)}

                                <div className="flex justify-end">
                                    <Link href="/apply" className="px-4 py-2 bg-[#0A436A] text-white rounded-sm shadow hover:bg-[#08324f] transition
                                    text-lg md:text-2xl 2xl:text-4xl">
                                        Apply
                                    </Link>
                                </div>
                            </div>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </div>
    )
}