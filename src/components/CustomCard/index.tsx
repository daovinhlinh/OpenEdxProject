import { Box, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

interface CustomCardProps {
  heading: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  page: string;
}

const useStyles = makeStyles(({
  link: {
    textDecoration: 'none',
  },
}));

export const CustomCard = (props: CustomCardProps) => {
  const classes = useStyles();
  const { heading, title, subtitle, buttonText, page } = props;

  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontSize: 50 }}>
          {title}
        </Typography>
        <Typography variant="body1">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        {buttonText && <Button size="small">
          <Link to={page} className={classes.link}>
            {buttonText}
          </Link>
        </Button>}
      </CardActions>
    </Card>
  )
}

