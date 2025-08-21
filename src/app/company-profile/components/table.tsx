"use client";
import { useState, Fragment } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const committees = [
  { name: "Budhi Halim", position: "Chairman of Technical Comittee" },
  { name: "Ka. Divisi Riset & Pengembangan", position: "Secretary of Technical Comittee" },
  {
    name: "Sub Committee: Structure",
    subMember: [
      { name: "Tjahjono Roesdianto", position: "Coordinator" },
      { name: "Iqbal Fikri", position: "Member" },
      { name: "Sunaryoko", position: "Member" },
      { name: "I Ketut Aria Pria Utama", position: "Member" },
      { name: "Masruri", position: "Member" },
      { name: "Gading Sitepu", position: "Member" },
      { name: "Aries sulisetyono", position: "Member" },
      { name: "Rahmatullah", position: "Member" }
    ]
  },
  {
    name: "Sub Committee: Machinery and Electrical",
    subMember: [
      { name: "R.O. Saut Gurning, Ph.D", position: "Coordinator" },
      { name: "Agus Widjaja", position: "Member" },
      { name: "Agus Salim", position: "Member" },
      { name: "Hari Prastowo", position: "Member" },
      { name: "Haryanti Rivai, Ph.D", position: "Member" },
      { name: "Sunaryo", position: "Member" },
      { name: "Indra Ranu", position: "Member" },
      { name: "Nyoman Sudiana", position: "Member" }
    ]
  },
  {
    name: "Sub Committee: Industrial Services",
    subMember: [
      { name: "Asmari Herry Prayitno", position: "Coordinator" },
      { name: "Romy Lesmana", position: "Member" },
      { name: "Muhammad Azhar", position: "Member" },
      { name: "Wawas Swathatafrijiah", position: "Member" },
      { name: "Bambang Suharno", position: "Member" }
    ]
  },
  {
    name: "Sub Committee: Survey and Offshore",
    subMember: [
      { name: "Prof. Soegiono", position: "Coordinator" },
      { name: "Sugeng Yulianto", position: "Member" },
      { name: "Mohammad Hasan", position: "Member" },
      { name: "Eko Budi Djatmiko", position: "Member" },
      { name: "Gadis Purwanti", position: "Member" },
      { name: "Widihardja Tanudjaja", position: "Member" },
      { name: "Murdjito", position: "Member" },
      { name: "Wasis Dwi Ariawqn", position: "Member" },
      { name: "Yamin Jinca", position: "Member" }
    ]
  }
];

export default function CommitteTable() {
  const [openRows, setOpenRows] = useState<number[]>([2]);

  const toggleRow = (idx: number) => {
    setOpenRows((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="overflow-x-auto text-white">
      <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-3 text-left md:text-xl">Name</th>
            <th className="p-3 text-left md:text-xl">Position</th>
            {/* <th className="p-3 text-center w-12">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {committees.map((item, idx) => (
            <Fragment key={idx}>
              <tr key={idx} className={`border-t border-gray-600 text-white ${item.subMember ? "cursor-pointer" : ""}`} onClick={() => item.subMember && toggleRow(idx)}>
                <td className="p-3 font-medium text-sm md:text-lg">{item.name}</td>
                <td className="p-3 md:text-lg text-sm">{item.position || "-"}</td>
                <td className="p-3 text-center">
                  {item.subMember ? (
                    <button
                      onClick={() => toggleRow(idx)}
                      className="p-1 rounded hover:bg-gray-800 transition"
                    >
                      {openRows.includes(idx) ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>

              {item.subMember && (
                <tr className="border-t border-gray-700">
                  <td colSpan={3} className="p-0">
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openRows.includes(idx) ? "max-h-96 p-4" : "max-h-0 p-0"
                      }`}
                    >
                      <table className="w-full text-sm ml-4">
                        <tbody>
                          {item.subMember.map((sub, subIdx) => (
                            <tr
                              key={subIdx}
                              className="border-b border-gray-200"
                            >
                              <td className="p-2 w-1/2 text-sm md:text-base">{sub.name}</td>
                              <td className="p-2 text-sm md:text-base">{sub.position}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
