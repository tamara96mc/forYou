import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';


const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const Navegacion = () => {

    const usuario = useSelector(state => state.usuario);


    return ( 
        <Nav>
            <Link href="/">
                <a>Inicio</a>
            </Link>
            {usuario && ( 
                <Link href="/nuevo-producto">
                    <a>Nuevo producto</a>
                </Link>
            )}
            
        </Nav>
     );
}
 
export default Navegacion;