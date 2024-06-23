import React from "react";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  // ... (other photo objects)
];

const PhotoGallery = () => {
  const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: unsplashLink(photo.id, width, height),
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: unsplashLink(photo.id, breakpoint, height),
          width: breakpoint,
          height,
        };
      }),
    };
  });

  return (
    <div>
      {/* Render your photo gallery JSX here using the 'photos' array */}
    </div>
  );
};

export default PhotoGallery;