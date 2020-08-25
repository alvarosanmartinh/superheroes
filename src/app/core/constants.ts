import {environment} from '../../environments/environment';

export const apiConstants = {
  baseUrl: environment.superHeroApi,
  token: environment.apiToken,
  urlWithToken: environment.superHeroApi + '/' + environment.apiToken
};
