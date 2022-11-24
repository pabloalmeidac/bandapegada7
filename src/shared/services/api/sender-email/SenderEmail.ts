import axios from 'axios';

export const SenderEmail = async () => {
  const email = process.env.REACT_APP_EMAIL;
  const url = `https://graph.instagram.com/me/media?access_token=`;

  const { data } = await axios.get(url);
  return data;
};