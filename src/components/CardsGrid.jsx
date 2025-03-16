import { useEffect, useState } from "react";
import "../styles/CardsGrid.css";
import GameInfo from "./GameInfo";

const CardsGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [previousClickedImage, setPreviousClickedImage] = useState(null);
  const [clickedImages, setClickedImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos?client_id=lca2G29WVAEUJ88K50fWDR_0ztUtuD26dciFsVUTEbI&per_page=10",
      );
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  // Shuffle images to display in a different order
  const shuffleImages = (arr) => {
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Handle image click and check for scoring
  const handleImageClick = (image) => {
    if (clickedImages.includes(image.id)) {
      setScore(0);
      setPreviousClickedImage(null); // Reset previousClickedImage
      setClickedImages([]);
    }

    if (previousClickedImage && previousClickedImage.id === image.id) {
      setScore(score + 1); // Increment score if the same image is clicked again
      setPreviousClickedImage(null); // Reset previousClickedImage after scoring

      // Handle max score functionality
      maxScore < score && setMaxScore(score);

      // Add image ID to clickedImages array
      setClickedImages((prev) => [...prev, image.id]);
    } else {
      setPreviousClickedImage(image); // Set current image as previousClickedImage
    }
    setImages(shuffleImages(images)); // Shuffle images after first click
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GameInfo score={score} maxScore={maxScore}></GameInfo>
      <div className="cards-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsGrid;
