import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
//import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip'; // Import the Chip component from Material-UI



  // The priority prop is displayed in the task card, allowing users to see the priority level of each task.
const Task = (props) => {
    
    return (
       <Grid
  key={props.id}
  size={{ xs: 12, md: 4 }}
>
  <Card
    sx={{
      backgroundColor: props.done ? 'lightgrey' : 'white',
      padding: '20px',
        border: '2px solid navy',  // Add a border to the card
      borderRadius: '10px',  // Rounded corners 
      boxShadow: 4
    }}
  >
    <CardHeader
      title={props.title}
    
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        textAlign: 'center',
        borderRadius: '3px',
        padding: '20px',
        textAlign: 'center'
      }}
    />

{/* divider creates a divider line and then use sx to syle
it with primary.main(blue) my:2 adds approx 16px margin
on top and bottom of divider line. */}
    <Divider  sx={{
    my: 2,
    borderColor: 'primary.main'
  }}/>

    <CardContent>
      <Box
    
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
          padding: '20px'
        }}
      >
//
        <Chip
  label={`Due: ${props.deadline}`}
  color="primary"
  sx={{
    fontWeight: 'bold',
    m: 1
  }}
/>
       {/* <Typography
          component="p"
          variant="subtitle2"
          color="text.primary"
        >
          Due: {props.deadline}
        </Typography> */}

      </Box>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.description}
      </Typography>
    </CardContent>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        padding: '20px'
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={props.markDone}
        sx={{ // Add border radius to the button
          borderRadius: '20px',
        }} 
      >
        Done 
    <DoneIcon sx={{ ml: 1 }} /> 
     
      </Button>

      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={props.deleteTask}
      >
        Delete
        <DeleteIcon />

      </Button>
    </CardActions>
  
  </Card>
</Grid>

    )
}
 {/*<p
        style={{
          backgroundColor:
            props.priority === "High"
              ? "red"
              : props.priority === "Medium"
              ? "goldenrod"
              : "green",
          padding: "0.2em",
          borderRadius: "0.4em",
        }}
      >
        {props.priority}
      </p> */}

export default Task;
