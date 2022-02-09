import { Button, Grid, makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { Person } from "@material-ui/icons";
import Add from "./components/Add";
import Feet from "./components/feet";
import Lifttbar from "./components/leftBar";
import Navbar from "./components/navbar";
import Righttbar from "./components/Rightbar";

const useStyles=makeStyles((theme)=>({
   app:{
       top:0,left:0,padding:0,right:0
    },
    right:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
})) 
const App = () => {
    const classes=useStyles()
    return <div className={classes.app}>
        <Navbar/>
        <Grid container>
         <Grid item sm={2} xs={2}>
             <Lifttbar/>
         </Grid>
         <Grid item sm={7} xs={10}>
             <Feet/>
         </Grid>
         <Grid item sm={3} className={classes.right}>
             <Righttbar/>
         </Grid>
        </Grid>
        <Add/>
    </div>;
}
 
export default App;