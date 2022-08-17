import axios from 'axios';

interface IFeedItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO'
  media_url: string;
  permalink: string;
}

export const getInstaFeed = async () => {
  const token = process.env.REACT_APP_INSTA_FEED_TOKEN;
  const fields = 'media_url, media_type, permalink';
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  const { data } = await axios.get(url);
  const response: IFeedItem[] = data.data;
  return response;
};