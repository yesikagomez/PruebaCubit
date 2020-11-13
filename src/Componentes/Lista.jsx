import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles'
import {Table,TableContainer,TableHead, TableBody,TableRow, TableCell, Modal, Button, TextField} from '@material-ui/core';

function Lista () {
    const [datos, setData] = useState([]);

console.log(datos);
         const  peticionGet=async()=>{
            await axios.get(`https://reqres.in/api/users?page=2`)
            .then(response=>{
                setData(response.data.data);
          })
        }
    useEffect (async()=>{
        await peticionGet();
    },[])

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre Completo</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {datos.map(consola => (
                            <TableRow key={consola.id}>
                            <TableCell>{consola.first_name} {consola.last_name}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    )
}

export default Lista;