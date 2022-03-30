import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { deleteDevice, getDeviceDetail } from '../../API';
import CircularIndeterminate from '../../UI/Loading';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));
const DeviceDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [deviceDetail, setDeviceDetail] = useState();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDelete = async () => {
    await deleteDevice(id);
    history.push('/');
  };

  useEffect(() => {
    async function fetchData (id) {
      const deviceDetail = await getDeviceDetail(id);
      setDeviceDetail(deviceDetail);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
    fetchData(id);
  }, [id]);
  if (loading) return <CircularIndeterminate />;

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>

      <Card sx={{ minWidth: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              A
            </Avatar>
        }
          action={
            <Button variant='outlined' onClick={() => history.push('/')}>
              Go Back
            </Button>
        }
          title={deviceDetail.name}
          subheader={deviceDetail.createdAt}
        />
        <CardMedia
          component='img'
          height='194'
          image={deviceDetail.imageFileName}
          alt={deviceDetail._id}
        />
        <CardContent />
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Charasteritics:</Typography>
            <Typography paragraph>
              Manufacturer: {deviceDetail.manufacturer}
            </Typography>
            <Typography paragraph>
              Description: {deviceDetail.description}
            </Typography>
            <Typography paragraph>
              Color: {deviceDetail.color}
            </Typography>
            <Typography paragraph>
              Screen: {deviceDetail.screen}
            </Typography>
            <Typography paragraph>
              Ram: {deviceDetail.ram}
            </Typography>
            <Typography paragraph>
              Price: {deviceDetail.price}
            </Typography>
            <Grid style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={() => handleDelete(id)} variant='outlined' startIcon={<DeleteIcon />} color='error'>
                Delete
              </Button>
              <Button
                onClick={() => {
                  history.push(`/device/edit/${id}`);
                }} variant='outlined' startIcon={<EditIcon />}
              >
                Edit
              </Button>

            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default DeviceDetail
;
