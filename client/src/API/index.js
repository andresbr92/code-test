import axios from 'axios';
export const getDeviceDetail = async (id) => {
  try {
    const detail = await axios.get(`http://localhost:3031/device/${id}`);
    return detail.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDeviceList = async () => {
  try {
    const devices = await axios.get('http://localhost:3031/device/list');
    return devices.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const createDevice = async (device) => {
  try {
    const newDevice = await axios.post('http://localhost:3031/device/create', device);
    return newDevice.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteDevice = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3031/device/delete/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateDevice = async (id, device) => {
  try {
    const res = await axios.put(`http://localhost:3031/device/edit/${id}`, device);
    return res;
  } catch (error) {
    console.log(error);
  }
};
