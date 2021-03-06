import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Boton from '../ui/Boton';

import { useSelector } from 'react-redux';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => {

    // Acceder al state del store
    const usuario = useSelector(state => state.usuario.usuario);

    let obj
    console.log('user -> ' , usuario)
    
    

    
    
   
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>


                    <Buscar />

                    <Navegacion />
                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {usuario ? (
                        <>
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            >Hola: {usuario} </p>
                            <Boton
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion()}
                            >Cerrar Sesi??n</Boton>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Boton
                                    bgColor="true"
                                >Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    )}
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;