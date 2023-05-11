// import PropTypes from 'prop-types';
import { Header } from './styled';

const Searchbar = () => {
  return (
    <Header>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};

export default Searchbar;
