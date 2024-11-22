import axios from 'axios';
import {
  COINGECKO_API_KEY,
  COINGECKO_API_URL,
  COINMARKETCAP_API_URL,
  USED_API,
  COINMARKETCAP_API_KEY,
} from '../constants/api-urls';
import { ApiType } from '../constants/api-types';

const apiProps = USED_API === ApiType.COINGECKO ? {
  baseURL: COINGECKO_API_URL,
  params: {
    x_cg_demo_api_key: COINGECKO_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
} : {
  baseURL: COINMARKETCAP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
  },
};

const apiClient = axios.create(apiProps);

export { apiClient };
