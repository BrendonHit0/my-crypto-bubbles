

import { apiClient } from '../utils/request';

export const fetchCoinmarketcapList = async (count: number = 100) => {
  const response = await apiClient.get('/cryptocurrency/market-pairs/latest', {
    params: {
      start: 1,
        limit: count,
        convert: 'USD',
      },
    });
  return response.data;
};
