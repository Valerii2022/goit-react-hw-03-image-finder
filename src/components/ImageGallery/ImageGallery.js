import PropTypes from 'prop-types';
import { Gallery, GalleryItem, ItemImg } from './styled';

const ImageGallery = ({ cards }) => {
  return (
    <Gallery>
      {cards.map(({ id, name, url }) => {
        return (
          <GalleryItem key={id}>
            <ItemImg src={url} alt={name} />
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
