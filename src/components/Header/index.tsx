import React from 'react';
import { useSelector } from 'react-redux'
import { Container, Categories, Border } from './styles';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { CategoriesItemType, CategoriesState } from '../../store/ducks/categories/types';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const categories = useSelector((state: CategoriesState) => state.categories.arrayCategories)

  return (
    <>
      <Container>
        <div className="content">
          <img src="http://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" alt="Logo"/>
          <div className="input">
            <input type="text" placeholder="Busque pela marca, estilo ou sabor"/>
            <div className="search"><AiOutlineSearch/></div>
          </div>
          <div className="rightSide">
            Login<AiOutlineUser />
            <Link to="/cart">Carrinho<AiOutlineShoppingCart /></Link>
            
          </div>
        </div>
      </Container>
      <Categories>
        <ul>
      {
        categories?.map((i: CategoriesItemType) =>(
              <li key={i.category}>{i}</li>
        ))
      }
        </ul>
      </Categories>
      <Border/>
    </>
  );
};

export default Header;
