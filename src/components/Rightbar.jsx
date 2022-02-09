import { Avatar, Container, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(5)
    },
    link:{
  paddingRight:theme.spacing(2)
    }
})) 
const Righttbar = () => {
    const classes=useStyles()
    return <Container className={classes.container}>
        <Typography variant="h6">Friends online</Typography>
        <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />
  <Avatar alt="Travis Howard" src="https://media.gettyimages.com/photos/new-york-city-smiling-businessman-picture-id697564509?s=612x612" />
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9hja6ZXhPAhRZzeEJJcO1gokoAj6LvB_UwUvPNUYIkfn4esMBp3MoTzzmRG0naNT-kg&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=170667a&w=0&h=49JgVRSxrT1C9_jMx_r4Ks2rHku1tE_s535LfgPjFzI=" />
  <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcsLQfkOWyChGk3GSDxTDr6GpWMrIQBu3XTDnmSME7qiwYBdh1MMqW4iW7ZXlVhd_u0A&usqp=CAU" />
</AvatarGroup>
<Typography variant="h6">Gallery</Typography>
  <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} style={{marginBottom:15}}>
  
    <ImageListItem >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoK3230eMsSkj647f-TKPsm5VfC_0Yt7dDXjPTUwVTdGNP4e0lrlEWZnEQMe1iwqQsRs&usqp=CAU"
        srcSet=""
        alt=""
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"
        srcSet="" alt="" loading="lazy"/>
    </ImageListItem>
    <ImageListItem >
      <img src="data:image/jpeg;base64,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"
        srcSet="" alt="" loading="lazy"/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
        srcSet="" alt="" loading="lazy"/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BPmwIB3M8p3wBGPZJ8Gz48rGJfj1f0Qd0Q&usqp=CAU"
        srcSet="" alt="" loading="lazy"/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
        srcSet="" alt="" loading="lazy"/>
    </ImageListItem>
  
</ImageList>
<Typography>Links</Typography>
<Link href="#" className={classes.link}>Sport</Link>
<Link href="#" className={classes.link}>Food</Link>
<Link href="#" className={classes.link}>Vaforite</Link>
<Link href="#" className={classes.link}>Movie</Link>
    </Container>
}
 
export default Righttbar;