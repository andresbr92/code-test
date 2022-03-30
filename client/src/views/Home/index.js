import React, { useEffect, useState } from 'react';
import CircularIndeterminate from '../../UI/Loading';
import { Grid } from '@mui/material';
import DeviceCard from '../../UI/DeviceCard';
import { getDeviceList } from '../../API';
import {

  makeStyles

} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  home: {
    display: 'flex',
    margin: theme.spacing(2),
    justifyContent: 'center',
    paddingTop: '40px'

  }
}));

const Home = () => {
  const [devices, setDevices] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData () {
      const devices = await getDeviceList();
      setDevices(devices);
    }
    fetchData();
  }, []);

  if (!devices.length) return <CircularIndeterminate />;

  return (
    <Grid container className={classes.home} spacing={3}>
      {devices.map(device => {
        return (
          <Grid key={device._id} item xl={3}>
            <DeviceCard key={device.id} device={device} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Home;
