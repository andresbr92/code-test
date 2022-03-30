import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

export default function RecipeReviewCard ({ device }) {
  const history = useHistory();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            A
          </Avatar>
        }
        title={device.name}
        subheader={device.createdAt}
      />
      <CardMedia
        component='img'
        height='194'
        image={device.imageFileName}
        alt={device._id}
      />
      <CardContent>
        <Button variant='outlined' onClick={() => history.push(`/device/detail/${device._id}`)}>
          Details
        </Button>
      </CardContent>

    </Card>
  );
}
