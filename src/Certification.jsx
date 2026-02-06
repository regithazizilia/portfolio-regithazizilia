import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import certified1 from './assets/images/cer1.png'
import certified2 from './assets/images/cer2.png'
import certified3 from './assets/images/cer3.png'
import certified4 from './assets/images/cer4.png'
import certified5 from './assets/images/cer5.png'
import certified6 from './assets/images/cer6.png'
import certified7 from './assets/images/cer7.png'
import certified8 from './assets/images/cer8.png'

const certificateImages = [
    certified8,
      certified3,
  certified4,
    certified2,



  certified5,
  certified6,
  certified7,
    certified1,

]

export default function Certification() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openImage = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? certificateImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(certificateImages[newIndex])
  }

  const nextImage = () => {
    const newIndex = currentIndex === certificateImages.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(certificateImages[newIndex])
  }

  return (
    <section
      id="certification"
      ref={ref}
      className="scroll-mt-32 px-6 sm:px-20 lg:px-40 py-24 bg-main text-white"
    >
      {/* Header */}
      <div
        className={`transition-all duration-1000 ease-out transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">CERTIFICATIONS</h2>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* Size in every monitor */}
          {certificateImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-200 rounded-xl overflow-hidden cursor-pointer 
                         hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
              onClick={() => openImage(image, index)}
            >
              {/* Image Container */}
              <div className="aspect-[12/8] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-500 "
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            flex items-end p-4">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Maximize2 size={16} />
                  <span>Click to view</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-red-400 
                     bg-black/50 backdrop-blur-sm p-2 rounded-full z-10
                     hover:scale-110 transition-transform"
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          {certificateImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-black/50 backdrop-blur-sm text-white p-3 rounded-full 
                         hover:bg-black/70 hover:scale-110 transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                         bg-black/50 backdrop-blur-sm text-white p-3 rounded-full 
                         hover:bg-black/70 hover:scale-110 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="w-full max-w-4xl max-h-[85vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}