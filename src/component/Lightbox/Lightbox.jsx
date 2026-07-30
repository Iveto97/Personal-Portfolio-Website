import { useEffect, useRef, useState } from "react";
import "./Lightbox.css";

export default function Lightbox({ data, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openLightbox() {
    setIsOpen(true);
  }

  function closeLightbox() {
    setIsOpen(false);
  }

  function handlePrevious() {
    setCurrentIndex(prev => prev === 0 ? data.length - 1 : prev - 1 );
  }

  function handleNext() {
    setCurrentIndex(prev => prev === data.length - 1 ? 0 : prev + 1);
  }

  function showImage(index) {
    setCurrentIndex(index);
    setIsOpen(true);
  }

  useEffect(() => {
    if (!isOpen) return;

    isOpen 
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "auto";

      function handleKeyDown(e) {
        if(e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") handlePrevious();
        if(e.key === "ArrowRight") handleNext();
      }

        window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }
  }, [isOpen, currentIndex])

  return (
    <div>
      <div className="gallery">
        {data.map((image, index) => (
          <div className="column" key={index}>
            <img
              src={image}
              alt={title}
              className="gallery-item"
              onClick={() => showImage(index)}
            />
          </div>
        ))}
      </div>
      {isOpen ? (
        <div className="lightbox" id="lightbox" onClick={closeLightbox}>
          <button
            id="close-btn"
            className="close-btn"
            aria-label="Close lightbox"
            onClick={() => closeLightbox()}
          >
            &times;
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-slide">
              <div className="number-text">
                {currentIndex + 1} / {data.length}
              </div>
              <img
                id="lightbox-image"
                src={data[currentIndex]}
                className="lightbox-image"
              />
            </div>

            <button
              className="prev"
              aria-label="Previous image"
              onClick={() => handlePrevious()}
            >
              &#10094;
            </button>
            <button
              className="next"
              aria-label="Next image"
              onClick={() => handleNext()}
            >
              &#10095;
            </button>

            <div className="caption-container">
              <p id="caption">{title}</p>
            </div>

            <div className="demo-images">
              {data.map((image, index) => (
                <div className="column" key={index}>
                  <img
                    src={image}
                    alt={title}
                    className="demo"
                    onClick={() => showImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
