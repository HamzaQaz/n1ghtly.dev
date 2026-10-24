import type { Image } from '~/content/projects'

/**
 * A framed screenshot. The image stays hidden until it has fully loaded (the boot script
 * marks it `data-loaded`), then fades in, so it never paints in strips.
 */
export function Shot({
  image,
  sizes,
  priority,
  sweep,
  className = '',
  imgClassName = '',
}: {
  image: Image
  sizes: string
  priority?: boolean
  sweep?: boolean
  className?: string
  imgClassName?: string
}) {
  return (
    <div className={`shot overflow-hidden ${sweep ? 'sweep' : ''} ${className}`}>
      <img
        src={image.src}
        srcSet={`${image.small} 1200w, ${image.src} ${image.width}w`}
        sizes={sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={`block w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
