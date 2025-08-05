"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "./Card"
import { Calendar, Clock, User, ArrowRight, Filter, Search, Globe, Shield, Award, Anchor } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishDate: string
  readTime: string
  image?: string
  featured: boolean
  tags: string[]
}

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([])

  const categories = ["All", "Press Release", "Safety Update", "Industry News", "Regulatory", "Achievement"]

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "BKI Achieves ISO 9001:2015 Certification for Quality Management Excellence",
      excerpt:
        "Our commitment to quality management systems has been recognized with the prestigious ISO 9001:2015 certification, reinforcing our dedication to maritime safety standards.",
      content: "Full article content here...",
      category: "Achievement",
      author: "Corporate Communications",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      image: "/maritime-safety.png",
      featured: true,
      tags: ["ISO", "Quality", "Certification"],
    },
    {
      id: 2,
      title: "New Maritime Safety Regulations Effective March 2024",
      excerpt:
        "Important updates to international maritime safety regulations that will impact vessel classification and inspection procedures across all maritime operations.",
      content: "Full article content here...",
      category: "Regulatory",
      author: "Regulatory Affairs Department",
      publishDate: "2024-01-12",
      readTime: "8 min read",
      image: "/maritime-safety.png",
      featured: false,
      tags: ["Regulations", "Safety", "IMO"],
    },
    {
      id: 3,
      title: "Strategic Partnership with International Maritime Organization",
      excerpt:
        "BKI announces a landmark partnership with IMO to enhance global maritime safety standards and promote sustainable shipping practices worldwide.",
      content: "Full article content here...",
      category: "Press Release",
      author: "Executive Office",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      image: "/maritime-safety.png",
      featured: true,
      tags: ["Partnership", "IMO", "Global"],
    },
    {
      id: 4,
      title: "Enhanced Digital Inspection Platform Launched",
      excerpt:
        "Revolutionary digital platform streamlines vessel inspection processes, reducing inspection time by 40% while maintaining the highest safety standards.",
      content: "Full article content here...",
      category: "Industry News",
      author: "Technology Division",
      publishDate: "2024-01-08",
      readTime: "4 min read",
      image: "/placeholder-dul3c.png",
      featured: false,
      tags: ["Technology", "Digital", "Innovation"],
    },
    {
      id: 5,
      title: "Annual Maritime Safety Conference 2024 Announcement",
      excerpt:
        "Join industry leaders and maritime experts at our annual conference focusing on sustainable shipping and advanced safety technologies.",
      content: "Full article content here...",
      category: "Press Release",
      author: "Event Management",
      publishDate: "2024-01-05",
      readTime: "3 min read",
      image: "/maritime-conference.png",
      featured: false,
      tags: ["Conference", "Event", "Industry"],
    },
    {
      id: 6,
      title: "Critical Safety Alert: New Hull Inspection Requirements",
      excerpt:
        "Immediate implementation of enhanced hull inspection protocols following recent international maritime safety recommendations and industry best practices.",
      content: "Full article content here...",
      category: "Safety Update",
      author: "Safety Department",
      publishDate: "2024-01-03",
      readTime: "7 min read",
      image: "/ship-hull-inspection.png",
      featured: false,
      tags: ["Safety", "Hull", "Inspection"],
    },
  ]

  useEffect(() => {
    let filtered = newsData

    if (selectedCategory !== "All") {
      filtered = filtered.filter((news) => news.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredNews(filtered)
  }, [selectedCategory, searchTerm])

  const featuredNews = filteredNews.filter((news) => news.featured)
  const regularNews = filteredNews.filter((news) => !news.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Press Release":
        return Globe
      case "Safety Update":
        return Shield
      case "Achievement":
        return Award
      case "Regulatory":
        return Shield
      case "Industry News":
        return Anchor
      default:
        return Globe
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 py-16 px-4">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #26476c 1px, transparent 1px),
              linear-gradient(-45deg, #26476c 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Regular News Grid */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#26476c] mb-8 flex items-center gap-3">
              Latest Updates
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => {
                const CategoryIcon = getCategoryIcon(news.category)
                return (
                  <Card
                    key={news.id}
                    className="group overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={"/ship-hull-inspection.png"}
                        alt={news.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-[#26476c] px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <CategoryIcon className="w-3 h-3" />
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#26476c] mb-3 group-hover:text-[#1e3a5f] transition-colors duration-200 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">{news.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(news.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {news.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-1 text-[#26476c] font-medium text-sm hover:gap-2 transition-all duration-200">
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default NewsSection
