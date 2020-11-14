import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const columns= [
  {title: 'ID', field:'id'},
  { title: 'Nombre', field: 'first_name' },
  { title: 'Apellido', field: 'last_name' }

 /* { title: 'Email', field: 'email' },
  { title: 'Foto', field: 'avatar' }*/
];
const baseUrl="https://reqres.in/api/users?page=2";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Lista() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modal, setModal]= useState(false);
  const [UsuarioSeleccionado, setUsuarioSeleccionado]=useState([])

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarUsuario=(usuario)=>{
    axios.get(`https://reqres.in/api/users/${usuario}`)
    .then(response=>{
        const datos = (response.data.data);
        console.log(datos.avatar)
        setUsuarioSeleccionado(datos);
        abrirCerrarModal();
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const abrirCerrarModal=()=>{
    setModal(!modal);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyMostar=(
    <div className={styles.modal}>
      <Avatar  src={UsuarioSeleccionado.avatar} />
      <TextField className={styles.inputMaterial} label="Name" name="name" value={UsuarioSeleccionado&&UsuarioSeleccionado.first_name}/>
      <br />
      <TextField className={styles.inputMaterial} label="Apellido" name="apellido" value={UsuarioSeleccionado&&UsuarioSeleccionado.last_name}/>          
        <br />
        <TextField className={styles.inputMaterial} label="Email" name="email" value={UsuarioSeleccionado&&UsuarioSeleccionado.email}/>
            <br />
            
            <br /><br />
      <div align="right">
        <Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
      </div>
    </div>
  )

  return (
    <div>
     <MaterialTable
          columns={columns}
          data={data}
          title="Lista Usuarios"  
          actions={[
            {
              icon: 'detailpanel',
              tooltip: 'Detalle Usuario',
              onClick: (event,rowData) => seleccionarUsuario(rowData.id)
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
        <Modal
        open={modal}
        onClose={abrirCerrarModal}>
          {bodyMostar}
        </Modal>
    </div>
  );
}

export default Lista;