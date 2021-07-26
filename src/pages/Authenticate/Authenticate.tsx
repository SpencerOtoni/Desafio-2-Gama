import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { Button, Grid, TextField, Typography } from '@material-ui/core'


const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Preencha o campo'),
  password: yup.string().min(3).required('Preencha o campo')
})

export default function Authenticate() {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    values
  } = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: async (values) => {
      const data = {
        name: values.name,
        password: values.password
      }
      console.log(data)
      try {
        await axios.post('http://localhost:3001/authenticate',data)
      } catch (error) {
        console.log(error)
      }
    },
    validationSchema
  })

  return(
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography 
              align='center'
              variant="h3"
              component="h1">
              Formulários de Cadastro.
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6}>
              <TextField
              id="name"
              name="name"
              label="Nome" 
              variant="outlined"
              value={values.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name && touched.name ? true : false}
              helperText={errors.name && touched.name ? 'Error' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
              id="password"
              name="password"
              label="Senha" 
              variant="outlined"
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password && touched.password ? true : false}
              helperText={errors.password && touched.password ? 'Error' : ''}
              />
            </Grid>
          </Grid>
          <Button 
              variant="contained" 
              color="primary"
              type='submit'
            >
              Enviar
            </Button>
          
      </Grid>

    </form>
  )
}