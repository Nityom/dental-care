import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ src, alt, className, width, height, ...props }) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      className={className}
      effect="blur"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default OptimizedImage;