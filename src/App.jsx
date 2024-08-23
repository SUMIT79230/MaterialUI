import React from "react";
import { Typography , Button , AppBar , Card , CardActions , CardContent , CardMedia , CssBaseline , Grid , Toolbar,Container } from '@mui/material'; 
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';
import AccountCircle from '@mui/icons-material/AccountCircle';

const cards = [1,2,3,4,5,6,7,8,9,10];
const App = () =>
{
    const classes = useStyles();
    return (
        <div>
            <>
                <CssBaseline />
                <AppBar position = "relative">
                    <Toolbar  >
                        <PhotoCameraIcon className = {classes.icon} style = {{ marginLeft : '10px' }}/>
                        
                        <Typography variant="h6" style = {{marginLeft : '50px'}}>
                            Photo Album
                        </Typography> 
                        
                    </Toolbar>
                </AppBar>

                <main>
                    <div className = {classes.container}> 
                        <Container maxWidth = "sm">
                            <Typography variant = "h4" align = "center" color = "textPrimary" gutterBottom style={{marginTop : '30px'}}> Photo Album </Typography>
                            <Typography variant = "h6" align="center" color = "textSecondary" paragraph>"In every frame, there’s a story waiting to be told—a moment captured forever, holding the essence of joy, love, and adventure. This album isn’t just about pictures; it’s a reflection of our journey, filled with cherished memories that bring warmth to our hearts."</Typography>

                            <div className={classes.button}>
                                <Grid container spacing = {2}  justifyContent={"center"}>
                                    <Grid item>
                                        <Button variant="contained" color="primary"> 
                                            See My photos
                                        </Button>
                                    </Grid>
                                
                                    <Grid item>
                                        <Button variant="outlined" color = "primary"> 
                                            Exit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            
                        </Container>
                    </div>
                    <Container className = {classes.cardGrid} maxWidth = "md">
                        <Grid container spacing = {4}>

                            {
                                cards.map((card) => (

                                <Grid item key = {card}>
                                <card className = {classes.card}>

                                    <CardMedia 
                                        className = {classes.CardMedia}
                                        image = "https://picsum.photos/200/300/?blur"
                                        title = "Random Images">
                                    </CardMedia>

                                    <CardContent className = {classes.CardContent}>

                                        <Typography gutterBottom variant = "h5">
                                        Image Description
                                        </Typography>

                                        <Typography>
                                        "A visually engaging image featuring a central subject that captures attention against a well-defined background. The composition is balanced and thoughtfully arranged, with colors and elements that draw the viewer's eye toward the focal point. The overall tone of the image conveys a specific mood, enhanced by the interplay of light and shadow."
                                        </Typography>

                                    </CardContent>
                                    <CardActions>

                                        <Button size = "small" color = "primary">View</Button>
                                        <Button size = "small" color = "primary">Edit</Button>

                                    </CardActions>
                                </card>
                            </Grid>

                                ))
                            }
                            

                        </Grid>

                    </Container>
                </main>
            </>
        </div>
    );
}

export default App;