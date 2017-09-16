const utils = {
  makeFullApiUrl: (apiConfig, pathSegments = '') => {
    return `${apiConfig.protocol}://`
           + `${apiConfig.host}:`
           + `${apiConfig.port}/`
           + `${apiConfig.path}/`
           + `${pathSegments}`;
  }
};

export const noPressApiConfig = {
  protocol: 'http',
  port: '8080',
  host: '0.0.0.0',
  path: 'api'
};


export default utils;
