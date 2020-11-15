import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>¿Que permite la implementación de un interceptor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para crear un interceptor, se tiene que generar un servicio usando el CLI de angular
            (se puede generar el interceptor donde se quiera en base a la estructura del proyecto).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>¿Cuándo implementar un guard?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Es una funcionalidad de angular, que se puede implementar cuando se necesita proteger las rutas, 
            ya que es una interfaz que oculta las rutas, que verifica si el usuario esta autorizado a ir a determinada ruta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>¿Qué es una prueba unitaria?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Es la prueba realizada para verificar el funcionamiento de una unidad de código.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
       <Typography className={classes.heading}>¿Qué es una prueba de componente?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Es una prueba que se realiza para verificar las funcionalidades y/o usabilidades de los componentes. 
            Ejemplo puede ser cualquier elemento que tenga entrada y deba generar alguna salida.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
        <Typography className={classes.heading}>¿Qué son los hooks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Los hooks son una nueva forma de usar características propias de React como el estado o el ciclo de vida 
            sin la necesidad de escribir una clase que es como se hacia hasta ahora.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}