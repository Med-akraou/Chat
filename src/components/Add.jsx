import {Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const useStyles=makeStyles((theme)=>({
   
   fab: {
       position:"fixed",
       bottom:20,right:20
   },
   modal:{
       width:550,height:560,backgroundColor:'white',
       position:'absolute',
       top:0,left:0,right:0,bottom:0,margin:'auto',
       [theme.breakpoints.down('sm')]:{
        height:'100vh',width:'100vw'
       }
   },
   form:{
       padding:theme.spacing(2)
   },item:{
       marginBottom:theme.spacing(5)
   }
})) 
const Add = () => {
    const classes=useStyles()
    const [open,setOpen]=useState(false)
    const [openAlert,setOpenAlert]=useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
      const save=()=>{
          setOpenAlert(true)
          setOpen(false)
      }
    return <>
     <Tooltip title='add' area-aria-label="add" onClick={()=>setOpen(true)}>
      <Fab color='primary' className={classes.fab} >
      <AddIcon/>
      </Fab>
     </Tooltip>
     <Modal open={open} className={classes.mod}>
      <Container className={classes.modal}>
         <form className={classes.form} autoComplete="off">
          <div className={classes.item}>
          <TextField id="outlined-basic" label="Title"
           size="small" variant="outlined" style={{width:'100%'}}/>
          </div>
          <div className={classes.item}>
          <TextField id="outlined-basic" label="Description" multiline rows={4}
           size="small" variant="outlined" style={{width:'100%'}}/>
          </div>
          <div className={classes.item}>
           <TextField select label="visibility" value='public'>
               <MenuItem value="public">Public</MenuItem>
               <MenuItem value="private">Private</MenuItem>
               <MenuItem value="Unlisted">Unlisted</MenuItem>
           </TextField>
          </div>
          <div className={classes.item}>
          <FormLabel component="legend">choose one</FormLabel>
          <RadioGroup
    aria-label="gender"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
    <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
  </RadioGroup>
          </div>
          <div className={classes.item}>
             <Button variant="outlined" color='primary' style={{marginRight:20}} onClick={save}>Save</Button>
             <Button variant="outlined" color='secondary' onClick={()=>setOpen(false)}>Cancel</Button>
          </div>
         </form>
      </Container>
     </Modal>
     <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'left'}}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
  </Snackbar>
    </>
}
 
export default Add;