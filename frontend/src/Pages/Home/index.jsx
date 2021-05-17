import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { fetchHomeProducts } from '../../Requests/Products';
import { setProductSearch } from '../../Store/Reducers/products';

import Section from '../../Components/Base/Section';
import SearchProducts from '../../Components/Module/SearchProducts';
import ProductsRow from '../../Components/Module/ProductsRow';

import { Container, HeadContent, BodyContent } from './style';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const { loading, data, error } = useQuery(fetchHomeProducts);

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setProductSearch(search));
    history.push('/products');
  }

  return (
    <Container>
      <HeadContent>
        <form className='container' onSubmit={handleSubmit}>
          <SearchProducts value={search} onChange={handleOnChange} />
        </form>
      </HeadContent>
      {!error ? (
        <BodyContent className='container'>
          <Section title='Most Visited'>
            {!loading && <ProductsRow items={data.mostVisitedProducts} />}
          </Section>
          <Section title='Last Visited'>
            {!loading && <ProductsRow items={data.lastVisitedProducts} />}
          </Section>
        </BodyContent>
      ) : (
        <Section title='No data to load!' />
      )}
    </Container>
  );
}

export default Home;
