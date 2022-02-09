import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles=makeStyles((theme)=>({
    media:{
     height:200,
     padding:theme.spacing(5),
     [theme.breakpoints.down('sm')]:{
         height:150
     }
    },
    card:{
        marginBottom:theme.spacing(5)
    }
})) 
const Post = () => {
    const classes=useStyles()
    return <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}  title="my post"
            image="https://static1.magazine.ribambel.com/articles/0/22/30/@/30613-decouvrez-en-famille-les-animaux-qui-ne-v2_article_medium-5.jpg"></CardMedia>
        <CardContent>
            <Typography variant="h5" gutterBottom>First post</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Accusantium sint aut ipsa alias
             asperiores ratione omnis, animi explicabo rerum saepe unde, est nihil perspiciatis,
              vero quidem debitis iste ex consequuntur?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Accusantium sint aut ipsa alias
             asperiores ratione omnis, animi explicabo rerum saepe unde, est nihil perspiciatis,
              vero quidem debitis iste ex consequuntur?
             </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary' variant="contained">Share</Button>
            <Button size='small' color='primary' variant="contained">Learn more</Button>
        </CardActions>
    </Card>
}
 
export default Post;