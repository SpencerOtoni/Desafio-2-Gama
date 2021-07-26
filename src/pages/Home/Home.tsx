import React from 'react';
import {Grid, Typography, Button, TextField, Box} from '@material-ui/core';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function Home() {
  const history = useHistory()

  return (
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
        <Box style={{width: '30%', padding: '15px 0', border:'1px solid #787A91', borderRadius: '1em', display: 'flex', justifyContent: 'space-around'}}>
          <Button 
            onClick={() => {history.push('/client')}}
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
  );
}
