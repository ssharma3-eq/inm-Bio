'use client'

import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
}

interface BlogCardProps {
  article: BlogPost
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1">
            <Tag className="w-4 h-4 text-primary" />
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">{article.title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">{article.excerpt}</p>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 mt-auto">
          <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {article.author}
            </span>
          </div>
          <button className="text-primary hover:text-green-700 font-semibold text-sm flex items-center gap-2 transition">
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
