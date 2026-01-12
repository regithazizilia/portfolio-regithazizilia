import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ImageSlider({ images }) {
    const [current, setCurrent] = useState(0)

    if (!images || images.length === 0) return null

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const next = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* CONTAINER DENGAN BACKGROUND GRID */}
            <div className="relative w-full h-full bg-pink-100
                           rounded-xl overflow-hidden border border-pink-900
                           flex items-center justify-center ">
                
                

                
                {/* IMAGE CONTAINER - menjaga aspect ratio */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={images[current]}
                        alt={`Project image ${current + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl
                                 transition-all duration-300 ease-in-out"
                        style={{
                            maxHeight: 'calc(100vh - 300px)'
                        }}
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.src = `https://via.placeholder.com/800x600/1f2937/9ca3af?text=Image+${current + 1}+Not+Found`
                        }}
                    />
                </div>

                {/* PREV BUTTON */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2
                                       bg-black/70 backdrop-blur-sm text-white
                                       p-3 rounded-full
                                       hover:bg-black/90 transition-all duration-200
                                       hover:scale-110 active:scale-95
                                       shadow-xl border border-white/20"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* NEXT BUTTON */}
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2
                                       bg-black/70 backdrop-blur-sm text-white
                                       p-3 rounded-full
                                       hover:bg-black/90 transition-all duration-200
                                       hover:scale-110 active:scale-95
                                       shadow-xl border border-white/20"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            {/* THUMBNAIL NAVIGATION */}
            {images.length > 1 && (
                <div className="flex justify-center items-center gap-3 mt-6">
                    {/* CURRENT IMAGE COUNTER */}
                    <div className="text-sm text-gray-400 font-medium px-4 py-2 
                                   bg-gray-800/50 backdrop-blur-sm rounded-full">
                        {current + 1} / {images.length}
                    </div>

                    {/* THUMBNAILS */}
                    <div className="flex gap-2 overflow-x-auto py-2 px-4 max-w-full">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden 
                                          border-2 transition-all duration-200
                                          ${index === current 
                                            ? 'border-indigo-500 ring-2 ring-indigo-500/50 ring-offset-2 ring-offset-gray-900 scale-110' 
                                            : 'border-gray-700 hover:border-gray-500'
                                          }`}
                            >
                                <img
                                    src={img} 
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = `https://via.placeholder.com/64/374151/9ca3af?text=${index + 1}`
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* NAVIGATION DOTS (Mobile friendly) */}
                    <div className="hidden sm:flex gap-1.5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2 h-2 rounded-full transition-all
                                          ${index === current 
                                            ? 'bg-white scale-125' 
                                            : 'bg-gray-600 hover:bg-gray-400'
                                          }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* FALLBACK FOR EMPTY IMAGES */}
            {(!images || images.length === 0) && (
                <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 
                               flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-gray-400">No images available</p>
                </div>
            )}
        </div>
    )
}