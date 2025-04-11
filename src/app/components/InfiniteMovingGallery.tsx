import { useState, useEffect, useRef } from 'react';

function InfiniteMovingGallery() {
  const images = [
    {
      src: '/hero-1.svg',
      alt: 'Hero Image 1',
      className: 'w-64 h-64 rounded-xl overflow-hidden',
    },
    {
      src: '/hero-1.svg',
      alt: 'Hero Image 2',
      className: 'w-64 h-64 rounded-xl overflow-hidden',
    },
    {
      src: '/hero-1.svg',
      alt: 'Hero Image 3',
      className: 'w-64 h-64 rounded-xl overflow-hidden',
    },
    {
      src: '/hero-1.svg',
      alt: 'Hero Image 4',
      className: 'w-64 h-64 rounded-xl overflow-hidden',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [cloneCount, setCloneCount] = useState(2); // Number of complete sets we'll render

  useEffect(() => {
    // Calculate the width of a single item including its gap
    const calculateItemWidth = () => {
      if (innerRef.current && innerRef.current.children.length > 0) {
        const firstItem = innerRef.current.children[0] as HTMLElement;
        // Width + gap (24px = gap-6)
        const singleItemWidth = firstItem.offsetWidth + 24;
        setItemWidth(singleItemWidth);
      }
    };

    calculateItemWidth();
    window.addEventListener('resize', calculateItemWidth);

    return () => {
      window.removeEventListener('resize', calculateItemWidth);
    };
  }, []);

  useEffect(() => {
    if (itemWidth === 0) return;

    let animationFrame: number;
    const fullSetWidth = itemWidth * images.length;

    const animate = () => {
      setScrollX(prev => {
        // Move left continuously
        const next = prev - 1;

        // When we've scrolled the width of one complete set, reset position
        // This creates the illusion of infinite scrolling
        if (next <= -fullSetWidth) {
          return 0;
        }
        return next;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [itemWidth, images.length]);

  const renderImage = (image: { src: string; alt: string; className: string; }, index: number, setKey: string | number) => {
    const zigzagPosition = index % 2 === 0 ? 'mt-0' : 'mt-16';
    return (
      <div
        key={`${setKey}-${index}`}
        className={`flex-none ${image.className} ${zigzagPosition} transition-all duration-300 hover:scale-105`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  // Create multiple sets of images to ensure we always have enough items
  // to maintain the infinite scroll illusion
  const repeatedImages = Array(cloneCount).fill(images).flat();

  return (
    <div className="relative w-full h-[400px] py-8 overflow-x-hidden">
      <div ref={containerRef} className="relative w-full h-full">
        <div
          ref={innerRef}
          className="flex absolute gap-6"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {repeatedImages.map((image, index) =>
            renderImage(
              image,
              index % images.length,
              Math.floor(index / images.length)
            )
          )}

          {/* Add the first few items again at the end to create a seamless loop */}
          {images.map((image, index) => renderImage(image, index, 'extra-set'))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteMovingGallery;
