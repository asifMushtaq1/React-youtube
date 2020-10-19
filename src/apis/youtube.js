import axios from 'axios';

const KEY = 'AIzaSyBtOKLO9idzODx14jVYjH7vsRTJSzzH2E0';
export const baseParams = {
  part : 'snippet',
  maxResults : 10,
  key : KEY,
  q:'surfboards'
}
export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',
  params : baseParams
});