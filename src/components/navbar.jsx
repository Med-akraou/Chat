import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";


 const useStyles=makeStyles((theme)=>({
    logoLg:{
      display:"none",
      [theme.breakpoints.up("sm")]:{display:"block"}
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{display:"none"}
    },
    search:{
        display:"flex",
        alignContent:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          borderRadius:theme.shape.borderRadius,
          width:'100%',
          [theme.breakpoints.down("sm")]:{display:(props)=>props.open? "flex":"none"}
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    input:{
    color:"white",marginLeft:theme.spacing(1)
    },
    icons:{
        display:(props)=>props.open? "none":"flex",
        alignItems:'center', 
    },
    badge:{
        marginLeft:theme.spacing(2) 
    },
    clc:{
        marginLeft:theme.spacing(2) ,
    },
    searchButton:{
        marginLeft:theme.spacing(2),
        display:'none',
        [theme.breakpoints.down("sm")]:{display:"block"}
    },
    cancel:{
        display:(props)=>props.open?'flex':'none'
    },nav:{
        top:0
    }
    

}))
const Navbar = () => {
    
    const [open,setOpen]= useState(false)
    const classes= useStyles({open})
    return <AppBar position="sticky" className={classes.nav}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6"  className={classes.logoLg}>
                lama
            </Typography>
            <Typography variant="h6"  className={classes.logoSm}>
                heading
            </Typography>
            <Typography variant="h6"  >
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="search..." className={classes.input}/>
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
                </div>
            
            </Typography>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail />
                 </Badge>
                 <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications/>
                 </Badge>

                 <Avatar alt="Remy Sharp" className={classes.clc} src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
                 
            </div>
        </Toolbar>
    </AppBar>
}
 
export default Navbar;