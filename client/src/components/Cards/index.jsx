import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function index({book}) {
  //This functions reformats the date returned from the book.published_at
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <Card sx={{ maxWidth: 345 }} id='Card' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={book.cover_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <p>by {book.author}</p>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
        <p>Publication Date: {formatDate(book.published_at)}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"><Link to={`/Home/${book.id}`}>Learn More</Link></Button>
      </CardActions>
    </Card>
  );
}

