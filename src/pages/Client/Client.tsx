import React from 'react';
import {Grid, Typography, Button, TextField, Box} from '@material-ui/core';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Preencha o campo')
})

export default function Home() {
  const history = useHistory()

  const {
    errors, 
    touched, 
    handleBlur, 
    handleChange, 
    handleSubmit, 
    values,
    //resetForm,
  } = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${values.name}/repos`)
        const repo: any = []

        data.map((repository : any) => {
          return repo.push(repository.name)
        })

        localStorage.setItem('repo', JSON.stringify(repo))
        toast.success('Sucesso')
        history.push('/repo')
      } catch (error) {
        toast.error('Error')
      }
    },
    validationSchema
  })

  return (
    <form onSubmit={handleSubmit}>
      <main  style={{display: 'flex', flexDirection: 'column'}}>
        <header>
        <Grid item  style={{marginTop: '20px'}} xs={12}>
          <Typography 
            align='center'
            variant="h4"
            component="h1">
            Gestão de Cadastros
          </Typography>
        </Grid>
        </header>
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
          <Box style={{width: '30%', padding: '15px 10px', border:'1px solid #787A91',
           borderRadius: '1em', display: 'flex', justifyContent: 'space-around' , 
           flexDirection: 'column'}}>
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
            
            
            
            
            
            <Button 
              onClick={() => {history.push('/repo')}}
              variant="contained" 
              color="primary"
            >
              Clientes
            </Button>

            <Button 
              onClick={() => {history.push('/test')}}
              variant="contained" 
              color="primary"
            >
              Produtos
            </Button>
          </Box>
        </section>
      </main>
    </form>
  );
}
