import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Container, Categories, Border } from './styles';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { CategoriesItemType, CategoriesState } from '../../store/ducks/categories/types';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const categories = useSelector((state: CategoriesState) => state.categories.arrayCategories)

  const deleteItem = () => { localStorage.removeItem('accessToken') }

  return (
    <>
      <Container>
        <div className="content">
          <img src="http://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" alt="Logo"/>
          {
            localStorage.getItem('accessToken') &&
            <>
              <div className="search">
                <input type="text" placeholder="Busque pela marca, estilo ou sabor"/>
                <AiOutlineSearch className="search-icon"/>
              </div>
              <div className="rightSide">
                <Link to="/" onClick={deleteItem}>Login<AiOutlineUser /></Link>
                <Link to="/cart">Carrinho<AiOutlineShoppingCart /></Link>
              </div>
            </>
            }
          
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
