import React, { useEffect, useState } from 'react';
import Form from '@rjsf/core';
import { Button, Grid } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import { createDevice, updateDevice, getDeviceDetail } from '../../API';
const schema = {
  title: 'New Device',
  type: 'object',
  required: ['name', 'description', 'price', 'manufacturer', 'color', 'screen', 'ram'],
  properties: {
    name: { type: 'string', title: 'Title' },
    manufacturer: { type: 'string', title: 'Manufacturer' },
    description: { type: 'string', title: 'Description' },
    color: { type: 'string', title: 'Color' },
    price: { type: 'number', title: 'Price' },
    imageFileName: { type: 'string', title: 'Image File Name' },
    screen: { type: 'string', title: 'Screen' },
    proccessor: { type: 'string', title: 'Proccessor' },
    ram: { type: 'number', title: 'Ram' }
  }
};

const NewDevice = () => {
  const history = useHistory();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (history.location.pathname.includes('/device/edit')) {
      setEditing(true);
      fetchData();
    }
    async function fetchData () {
      const deviceDetail = await getDeviceDetail(id);
      setFormData(deviceDetail);
    }
  }, [history.location.pathname]);

  const onSubmit = async ({ formData }) => {
    if (editing) {
      await updateDevice(id, formData);
      history.push(`/device/detail/${id}`);
    } else {
      await createDevice(formData);
      history.push('/');
    }
  };
  return (
    <div>
      <Grid style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }} container spacing={3}>
        <Form formData={formData || undefined} onSubmit={onSubmit} schema={schema}>
          <Grid style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }} item xs={12}>
            <Button type='submit' variant='outlined'>Submit</Button>
            <Button onClick={() => history.push('/')} variant='outlined'>Go Back</Button>
          </Grid>
        </Form>
      </Grid>
    </div>
  );
}
;
export default NewDevice;
