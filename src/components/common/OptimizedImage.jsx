import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Optimized Image Component
 *
 * Features:
 * - Lazy loading with Intersection Observer
 * - WebP format support with fallback
 * - Responsive images with srcset
 * - Blur placeholder while loading
 * - Error handling with fallback
 * - Loading animation
 *
 * @param {string} src - Image source
 * @param {string} alt - Alt text (required for accessibility)
 * @param {string} className - Additional CSS classes
 * @param {string} width - Image width
 * @param {string} height - Image height
 * @param {string} sizes - Responsive sizes attribute
 * @param {string} loading - Loading strategy ('lazy' | 'eager')
 * @param {string} objectFit - Object-fit CSS property
 * @param {string} fallback - Fallback image if load fails
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback on error
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  loading = 'lazy',
  objectFit = 'cover',
  fallback = '/images/placeholder.jpg',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(loading === 'eager')
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState(loading === 'eager' ? src : null)
  const imgRef = useRef(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || !imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            setImgSrc(src)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src, loading])

  // Handle image load
  const handleLoad = (e) => {
    setIsLoaded(true)
    if (onLoad) onLoad(e)
  }

  // Handle image error
  const handleError = (e) => {
    setHasError(true)
    setImgSrc(fallback)
    if (onError) onError(e)
  }

  // Generate WebP source with fallback
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  const hasWebP = src && /\.(jpg|jpeg|png)$/i.test(src)

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return ''
    const sizes = [320, 640, 768, 1024, 1280, 1536]
    return sizes
      .map(size => {
        const resizedSrc = baseSrc.replace(/(\.[^.]+)$/, `-${size}w$1`)
        return `${resizedSrc} ${size}w`
      })
      .join(', ')
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder while loading */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Main image with picture element for WebP support */}
      {isInView && imgSrc && (
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          {/* WebP source (modern browsers) */}
          {hasWebP && !hasError && (
            <source
              srcSet={generateSrcSet(webpSrc) || webpSrc}
              sizes={sizes}
              type="image/webp"
            />
          )}

          {/* Fallback image (all browsers) */}
          <img
            src={imgSrc}
            srcSet={generateSrcSet(imgSrc)}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-full"
            style={{ objectFit }}
            {...props}
          />
        </motion.picture>
      )}

      {/* Error state */}
      {hasError && fallback === imgSrc && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
          <svg
            className="w-12 h-12 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">Image not available</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage
