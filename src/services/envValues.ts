type envConfig = {
  apiUrl: string;
  oAuthDomain: string;
  oAuthClientId: string;
  oAuthAudience: string;
  oAuthConnection: string;
};

function getEnvValue(
  key:
    | 'API_URL'
    | 'OAUTH_DOMAIN'
    | 'OAUTH_CLIENTID'
    | 'OAUTH_AUDIENCE'
    | 'OAUTH_CONNECTION'
) {
  switch (key) {
    case 'API_URL':
      return window.VITE_API_URL === 'DOCKER_ENV_PT_API'
        ? import.meta.env.VITE_API_URL
        : window.VITE_API_URL;
    case 'OAUTH_DOMAIN':
      return window.VITE_OAUTH_DOMAIN === 'DOCKER_ENV_OAUTH_DOMAIN'
        ? import.meta.env.VITE_OAUTH_DOMAIN
        : window.VITE_OAUTH_DOMAIN;
    case 'OAUTH_CLIENTID':
      return window.VITE_OAUTH_CLIENTID === 'DOCKER_ENV_OAUTH_CLIENTID'
        ? import.meta.env.VITE_OAUTH_CLIENTID
        : window.VITE_OAUTH_CLIENTID;
    case 'OAUTH_AUDIENCE':
      return window.VITE_OAUTH_AUDIENCE === 'DOCKER_ENV_OAUTH_AUDIENCE'
        ? import.meta.env.VITE_OAUTH_AUDIENCE
        : window.VITE_OAUTH_AUDIENCE;
    case 'OAUTH_CONNECTION':
      return window.VITE_OAUTH_CONNECTION === 'DOCKER_ENV_OAUTH_CONNECTION'
        ? import.meta.env.VITE_OAUTH_CONNECTION
        : window.VITE_OAUTH_CONNECTION;
    default:
      throw new Error(`${key} is not a valid environment value key.`);
  }
}

const envConfiguration: envConfig = {
  apiUrl: getEnvValue('API_URL'),
  oAuthDomain: getEnvValue('OAUTH_DOMAIN'),
  oAuthClientId: getEnvValue('OAUTH_CLIENTID'),
  oAuthAudience: getEnvValue('OAUTH_AUDIENCE'),
  oAuthConnection: getEnvValue('OAUTH_CONNECTION'),
};

export default envConfiguration;
