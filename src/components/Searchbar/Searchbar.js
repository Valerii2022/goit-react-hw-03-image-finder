// import PropTypes from 'prop-types';
import { Header, Form, SearchFormBtn, SearchFormInput } from './styled';

const Searchbar = () => {
  return (
    <Header>
      <Form>
        <SearchFormBtn type="submit">
          <span>Search</span>
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
