// import PropTypes from 'prop-types';
import { Header, Form, SearchFormBtn, SearchFormInput } from './styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const Searchbar = () => {
  return (
    <Header>
      <Form>
        <SearchFormBtn type="submit">
          <SearchIcon width="30" height="30" />
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
