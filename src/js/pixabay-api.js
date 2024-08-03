import axios from 'axios';

const API_KEY = '45142135-0c3dcc8f867495c741718f1c0';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch images');
    }

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
