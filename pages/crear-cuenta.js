import React, { useState } from 'react';
import { css } from '@emotion/core';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

// Actions de Redux
import { crearNuevoUsuarioAction } from '../actions/userActions';


const CrearCuenta = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('El Nombre es Obligatorio'),
      email: Yup.string()
      .required('El Email es Obligatorio')
        .email('El email no es válido'),
      password: Yup.string()
        .required('El password no puede ir vacio')
        .min(6, 'El password debe contener al menos 6 caracteres')
    }),
     onSubmit:  usuario => {
      
       dispatch( crearNuevoUsuarioAction(usuario) );
    }
  });

  return (

    <Layout>

      <h1
        css={css`
              text-align: center;
              margin-top: 5rem;
            `}
      >Creaaar Cuentaaa</h1>
      <Formulario
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <Campo>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu Nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.nombre && formik.errors.nombre ? (
            <Error>{formik.errors.nombre} </Error>
          ) : null}
        </Campo>

        <Campo>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.eamil} </Error>
          ) : null}
        </Campo>

        <Campo>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password} </Error>
          ) : null}
        </Campo>

        <InputSubmit
          type="submit"
          value="Crear Cuenta"
        />
      </Formulario>

    </Layout>
  );
}

export default CrearCuenta