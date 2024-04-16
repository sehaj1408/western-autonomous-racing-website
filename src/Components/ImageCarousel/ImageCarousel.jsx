import styles from "./ImageCarousel.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import image1 from "../../Images/Website-Gallery-Images/image-1.jpg";
import image2 from "../../Images/Website-Gallery-Images/image-2.jpg";
import image3 from "../../Images/Website-Gallery-Images/image-3.jpg";
import image4 from "../../Images/Website-Gallery-Images/image-4.jpg";
import image5 from "../../Images/Website-Gallery-Images/image-5.jpg";
import image6 from "../../Images/Website-Gallery-Images/image-6.jpg";
import image7 from "../../Images/Website-Gallery-Images/image-7.jpg";

const ImageCarousel = () => {
  let images = [
    { original: image1, thumbnail: image1 },
    { original: image2, thumbnail: image2 },
    { original: image3, thumbnail: image3 },
    { original: image4, thumbnail: image4 },
    { original: image5, thumbnail: image5 },
    { original: image6, thumbnail: image6 },
    { original: image7, thumbnail: image7 }
  ];

  images = images.map((image, index) => {
    return {
      ...image,
      originalHeight: "450px",
      originalWidth: "450px",
      thumbnailHeight: "70px",
      originalAlt: `image${index + 1}`,
      thumbnailAlt: `image${index + 1}`,
      originalTitle: `Image ${index + 1}`,
      thumbnailTitle: `Image ${index + 1}`,
      thumbnailLabel: `Image ${index + 1}`,
    }
  })

  return (
    <div className={styles['carousel-container']}>
      <ImageGallery items={images} showFullscreenButton={false} showBullets={true} showIndex={true} slideDuration={700} />;
    </div>
  )
}

export default ImageCarousel;