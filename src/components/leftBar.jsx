import { Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, List, Person, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";

const useStyles=makeStyles((theme)=>({
    container:{
        height:'100vh',
        paddingTop:theme.spacing(5),
        backgroundColor:theme.palette.primary.main,
        [theme.breakpoints.up('sm')]:{
           backgroundColor:'white',
            color:"gray",
            border:'1px solid #ece7e7'
        },
        position:'sticky',top:0
    },
    item:{
        display:'flex',
        color:'white',
        alignItems:'center',
        marginBottom:theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer'
        }
    },
    icon:{
      color:'white',
      paddingRight:theme.spacing(1),
      [theme.breakpoints.up('sm')]:{
       fontSize:'18px',
       color:'#555'
    }
    }
    ,
    text:{
        color:'#555',
        [theme.breakpoints.down('sm')]:{
           display:'none'
        }
    }
})) 
const Lifttbar = () => {
    const classes=useStyles()
    return <Container className={classes.container} >
        <div className={classes.item}>
        <Home  className={classes.icon}/>
        <Typography className={classes.text}>Home page</Typography>
        </div>
        <div className={classes.item}>
        <Person  className={classes.icon}/>
        <Typography className={classes.text}>Informations</Typography>
        </div>
        <div className={classes.item}>
        <List  className={classes.icon}/>
        <Typography className={classes.text}>tasks</Typography>
        </div>
        <div className={classes.item}>
        <PlayCircleOutline  className={classes.icon}/>
        <Typography className={classes.text}>Play circle</Typography>
        </div>
        <div className={classes.item}>
        <TabletMac  className={classes.icon}/>
        <Typography className={classes.text}>Table</Typography>
        </div>
        <div className={classes.item}>
        <Bookmark  className={classes.icon}/>
        <Typography className={classes.text}>Book</Typography>
        </div>
        <div className={classes.item}>
        <Storefront  className={classes.icon}/>
        <Typography className={classes.text}>Store</Typography>
        </div>
        <div className={classes.item}>
        <Settings  className={classes.icon}/>
        <Typography className={classes.text}>Setting</Typography>
        </div>
        <div className={classes.item}>
        <ExitToApp  className={classes.icon}/>
        <Typography className={classes.text}>Exit</Typography>
        </div>
    </Container>
}
 
export default Lifttbar;