import { print, CoreModule, Module, ON_REQUEST_HANDLER } from '@gapi/core';
import { onRequest } from '~/app.request';
import { ENVIRONMENT } from '~/environment';
import { Neo4JModule } from '@rxdi/neo4j';
import { GraphQLCustomDirective } from '@gapi/core';
import { DirectiveLocation } from 'graphql';
import { VoyagerModule } from '@gapi/voyager';
import schema from './app.graphql';

export const ToUpperCaseDirective = new GraphQLCustomDirective<string>({
  name: 'toUpperCase',
  description: 'change the case of a string to uppercase',
  locations: [DirectiveLocation.FIELD],
  resolve: async (resolve) => {
    const value = (await resolve());
    return value.toUpperCase()
  },
});

@Module({
  imports: [
    CoreModule.forRoot({
      graphql: {
        openBrowser: false,
        directives: [ToUpperCaseDirective]
      },
      server: {
        hapi: {
          port: ENVIRONMENT.PORT,
          routes: {
            cors: {
              origin: ['*'],
              additionalHeaders: [
                'Host',
                'User-Agent',
                'Accept',
                'Accept-Language',
                'Accept-Encoding',
                'Access-Control-Request-Method',
                'Access-Control-Allow-Origin',
                'Access-Control-Request-Headers',
                'Origin',
                'Connection',
                'Pragma',
                'Cache-Control',
              ],
            },
          },
        },
      }
    }),
    Neo4JModule.forRoot({
      username: ENVIRONMENT.NEO4J_USERNAME,
      password: ENVIRONMENT.NEO4J_PASSWORD,
      address: ENVIRONMENT.NEO4J_URI,
      schema: Promise.resolve(print(schema)),
    }),
    VoyagerModule.forRoot(),
  ],
  providers: [
    {
      provide: ON_REQUEST_HANDLER,
      useFactory: () => onRequest,
    },
  ],

})
export class AppModule { }


