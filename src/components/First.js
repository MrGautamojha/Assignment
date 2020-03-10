import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    justifyContent:'space-between',
    marginLeft:50,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  root: {
    maxWidth: 345,
   marginLeft:'80%',
   width:250,height:'100%'
  },
  media: {
    height:70,width:'20%',marginLeft:'25%'
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(7),
  },
  title1: {
    display: 'none',
    justifyContent:'space-between',
    marginLeft:200,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  media1: {
    height: 150,
  paddingTop: '56.25%',
  },

  
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
 
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  let imgUrl=require("../img/main-bg.jpg");

  
  return (
    <div className={classes.grow}  style={{backgroundImage: `url(${imgUrl})`}} >
      <AppBar style={{backgroundColor:'black',height:150}} position="static">
     
        <Toolbar style={{marginTop:70}}>
        <Avatar alt="image" src={require('../img/logo.png')} className={classes.large} />
         
          <Typography className={classes.title1} variant="h6" noWrap>
            Home
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            About Us
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            PortFolio
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Blog
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Contact
          </Typography>
         
          <div className={classes.grow} />
          <div className={classes.grow}>
          <Button variant="contained" color="secondary">
          Get In Touch
</Button>
</div>
          
         
        </Toolbar>
      </AppBar>
     <div  >
         
    
     <Typography style={{color:'white',fontWeight:'bold',fontSize:50,marginLeft:'35%',marginTop:'10%'}}>
     Stable, Strong, Safe
</Typography>
<Typography style={{marginLeft:'40%',color:'white'}}>
Proin vel ex vitae urna faucibus tristique.
</Typography>
<Button  style={{marginLeft:'45%',marginTop:25,color:'white',borderColor:'white'}}variant="outlined">Learn More</Button>

         </div>
         <div>


             <Typography style={{color:'white',fontWeight:'bold',fontSize:30,marginLeft:'30%',marginTop:'20%'}}>
             Welcome To PS Building Contractors LTD
             </Typography>
             <div>
             <Typography style={{padding:'15%',marginTop:'-12%',color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
    
             </div>
                 </div>
                <div  style={{ display:'flex',
    flexWrap:'wrap',}}>
                <div style={{flexDirection:'row'}}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../img/service1.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          LOREM IPSUM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
                    </div>
                <div style={{flexDirection:'row'}}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../img/service2.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          LOREM IPSUM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
                    </div>
                    <div style={{flexDirection:'row'}}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../img/service3.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          LOREM IPSUM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
                    </div>
                <div style={{flexDirection:'row'}}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../img/service4.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          LOREM IPSUM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
                    </div>
                    </div>
                    <div>
                        <Typography style={{marginLeft:'47%',fontSize:35,fontWeight:'bold', marginTop:'10%',marginBottom:15,color:'white'}}>Projects</Typography>
                        </div>
                        <div style={{ display:'flex',
    flexWrap:'wrap',marginLeft:25
   }}>
                            <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/1.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/2.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/3.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/4.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                             

                            </div>
                            <div style={{ display:'flex',
    flexWrap:'wrap',marginLeft:25
   }}>
                            <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/5.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/5.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/7.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                                <div>
                            <Card className={classes.root}>
                            <CardMedia
        className={classes.media1}
        image={require('../img/8.jpg')}
        title="Paella dish"
      />


                            </Card>

                                </div>
                             

                            </div>
                            <Button  style={{marginLeft:'45%',marginTop:25,color:'white',borderColor:'white'}}variant="outlined">View More</Button>
      
     
    </div>
    
  );
}
