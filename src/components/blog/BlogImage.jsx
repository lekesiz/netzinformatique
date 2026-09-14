const variant = (src, width, extension) => src.replace(/\.webp$/i, `-${width}.${extension}`)

const BlogImage = ({ src, alt = '', priority = false, className = '' }) => (
  <picture>
    <source
      type="image/avif"
      srcSet={`${variant(src, 600, 'avif')} 600w, ${variant(src, 1200, 'avif')} 1200w`}
      sizes="(min-width: 1024px) 896px, 100vw"
    />
    <source
      type="image/webp"
      srcSet={`${variant(src, 600, 'webp')} 600w, ${variant(src, 1200, 'webp')} 1200w`}
      sizes="(min-width: 1024px) 896px, 100vw"
    />
    <img
      src={src}
      alt={alt}
      width="1200"
      height="800"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
    />
  </picture>
)

export default BlogImage
