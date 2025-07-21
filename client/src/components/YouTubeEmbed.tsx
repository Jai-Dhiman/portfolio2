import React, { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div className={`aspect-w-16 aspect-h-9 w-full ${className}`}>
        <iframe
          className="w-full h-full rounded-lg shadow-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={`aspect-w-16 aspect-h-9 w-full ${className}`}>
      <div 
        className="youtube-embed-container w-full h-full"
        onClick={handleClick}
      >
        <img
          className="youtube-thumbnail"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;