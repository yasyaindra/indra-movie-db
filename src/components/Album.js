import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMovies from './CardMovies'
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
     Made of Material UI, ReactJS
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album(props) {
  const classes = useStyles();
  const date = new Date();
  let everyMovies = props.data
  console.log(everyMovies)
  console.log(props)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Indra Movie Database
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Sebuah projek dari Yasya Indra untuk mencari data film film di dunia
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="https://www.linkedin.com/in/yasyaindra/" target="_blank">
                  <Button variant="contained" color="primary">
                    Siapa Itu Yasya Indra?
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Projek Lainnya
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center" 
          >
                  {everyMovies ? everyMovies.map(item => <Box m={3}><CardMovies title={item.Title} image={item.Poster}/></Box>) : <CircularProgress />}
           
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {date.getFullYear()}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Yasya Indra CreativeLabs
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}