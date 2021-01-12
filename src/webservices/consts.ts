export const API_PREFIX =
    'https://api.github.com/search/repositories?q=framework%2Blanguage%3Ajavascript';

export const apiPrefix = (url: string): any => API_PREFIX + url;

export const jsonHeaders = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
export const htmlHeaders = {
    headers: {
        Accept: 'text/html',
    },
};
