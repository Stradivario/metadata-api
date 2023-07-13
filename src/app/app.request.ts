import { Boom, Container, GRAPHQL_PLUGIN_CONFIG } from '@gapi/core';
import { User } from '~/app.context';
import { isDevelopment } from '~/environment';

export const onRequest = (next, request) => {
  const config = Container.get(GRAPHQL_PLUGIN_CONFIG);
  /* REMOVE THIS AT SOME POINT */
  if (
    isDevelopment() &&
    request.headers.authorization &&
    request.headers.authorization !== 'undefined'
  ) {
    try {
      // config.graphqlOptions.context = await auth.validateToken(
      //   request.headers.authorization,
      // );
      return next();
    } catch (e) {
      console.log('API_STATUS: ', e);
      return Boom.unauthorized(e);
    }
  }
  let user: User;

  try {
    user = JSON.parse(request.headers.user);
  } catch (e) {
    console.log('No federated user present');
  }
  if (user) {
    try {
      config.graphqlOptions.context = {
        ...config.graphqlOptions.context,
        user,
      };
    } catch (e) {
      console.log('API_STATUS: ', e);
      return Boom.unauthorized(e);
    }
  } else {
    config.graphqlOptions.context = {
      user: null
    };
  }
  return next();
};