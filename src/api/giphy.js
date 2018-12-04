import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.giphy.com',
  params: {
    api_key: 'lSPR2786F7qoH7PF3oR2Z0uyXSmDgBo7',
    limit: 10
  }
});


