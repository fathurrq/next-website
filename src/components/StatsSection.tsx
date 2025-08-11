"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "./Card"
import { ChevronLeft, ChevronRight, Anchor, Users, Building, Target, Shield, Award } from "lucide-react"

const  StatSection = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const sections = [
    {
      id: "vision-mission",
      title: "Vision & Mission",
      subtitle: "Strategic Framework 2016-2021",
      content: {
        vision: "To become a world-class classification society and independent assurance provider",
        mission:
          "To provide the best possible added value to customers of the classification and statutory services through international standard handling, operation, and rules research, in terms of quality, safety and social responsibility as well as responsibility towards the marine environment (classification). To maximize the resources of BKI towards its full potential to become the market leader in the independent marine assurance business (non-classification).",
      },
    },
    {
      id: "motto",
      title: "Company Motto",
      subtitle: "RELIABLE - Our Foundation",
      content: {
        items: [
          "Quality of services provided by the Company is really high quality, carried out efficiently and on time",
          "Every employee of the company has a reliable qualification in each field task / profession",
          "BKI designations trademarks / trade mark meaningful superior products",
        ],
      },
    },
    {
      id: "philosophy",
      title: "Corporate Philosophy",
      subtitle: "RELIABLE Paradigm Implementation",
      content: {
        description:
          "As a basis in managing the company, especially in carrying out the mission and duties, the Company adopted the philosophy that was developed through a paradigm RELIABLE:",
        items: [
          "Ensuring quality and services based on a strong commitment to safety concerns",
          "Improving the quality of human resources in a consistent and sustainable enterprise",
          "Responsiveness and concern for the development of science and technology, especially with regard to the safety of the ship",
        ],
      },
    },
  ]

  const stats = [
    { number: "2", label: "Strategic Business Units", icon: Target, color: "bg-[#26476c]" },
    { number: "36", label: "Branch Offices", icon: Building, color: "bg-slate-700" },
    { number: "5120", label: "Registered Clients", icon: Users, color: "bg-[#26476c]" },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length)
    }, 8000) // Slower, more professional timing

    return () => clearInterval(interval)
  }, [isAutoPlaying, sections.length])

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setIsAutoPlaying(false)
    }
    if (isRightSwipe && currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setIsAutoPlaying(false)
    }
  }

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
    setIsAutoPlaying(false)
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
    setIsAutoPlaying(false)
  }

  const goToSection = (index: number) => {
    setCurrentSection(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="h-screen w-full bg-gradient-to-b from-slate-50 to-gray-100 py-16 px-4">
      {/* Formal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #26476c 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #26476c 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center">

        <div className="space-y-16">

          {/* Statistics Cards - Formal Design */}
          <div className="w-full">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-[#26476c] mb-4">Organizational Overview</h3>
              <div className="w-24 h-1 bg-[#26476c] mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key metrics demonstrating our operational capacity and nationwide presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card
                    key={index}
                    className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="flex flex-col items-center gap-6">
                        <div className={`${stat.color} p-6 rounded-lg shadow-md`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="text-5xl md:text-6xl font-bold text-[#26476c] mb-2">{stat.number}</div>
                          <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Formal Footer */}
          <div className="text-center py-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-2 h-2 bg-[#26476c] rounded-full"></div>
              <p className="text-gray-600 font-medium">Serving the Maritime Industry with Excellence</p>
              <div className="w-2 h-2 bg-[#26476c] rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500">
              Committed to maintaining the highest standards of maritime safety and environmental protection
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default StatSection