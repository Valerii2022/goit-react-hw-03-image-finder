import PropTypes from 'prop-types';
import { Gallery, GalleryItem, ItemImg } from './styled';

const ImageGallery = ({ cards }) => {
  return (
    <Gallery>
      {cards.map(({ id, webformatURL }) => {
        return (
          <GalleryItem key={id}>
            <ItemImg src={webformatURL} alt="" />
          </GalleryItem>
        );
      })}
    </Gallery>
  );
};

ImageGallery.protoType = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
