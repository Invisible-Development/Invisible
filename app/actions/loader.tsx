import React from 'react'

export default function Loader() {
  return (
      <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-purple-900 rounded-full animate-loader1"></div>
          <div className="w-8 h-8 bg-purple-900 rounded-full animate-loader2"></div>
          <div className="w-8 h-8 bg-purple-900 rounded-full animate-loader3"></div>
      </div>
  )
}
