import axios from 'axios';

const KEY = 'AIzaSyANnzdpjL0LK8-bsc0EHyou-1Y8P_XbD74';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: { part: 'snippet', maxResults: 5, key: KEY, type: 'video' },
});
