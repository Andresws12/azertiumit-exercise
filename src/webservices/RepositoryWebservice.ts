import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { RepositoryResponse } from './models/repository';

const baseUrl: string = apiPrefix('');

export const getRepositories: (
    params: string
) => Promise<RepositoryResponse> = async params => {
    const response = await axios.get<RepositoryResponse>(
        `${baseUrl}${params}`,
        jsonHeaders
    );
    return response.data;
};
