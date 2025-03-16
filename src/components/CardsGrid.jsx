import { useEffect, useState } from "react";
import "../styles/CardsGrid.css";

const CardsGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
