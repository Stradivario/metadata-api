import { Bootstrap, Container, HAPI_SERVER } from '@gapi/core';
import { Server } from 'hapi';
import { format } from 'url';
import { AppModule } from './app/app.module';
import { Context } from './context';

const Main = Bootstrap(AppModule).toPromise();

export default async function handler(context: Context) {
  const request = context.request;
  const headers = {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
  };
  await Main;
  const url = format({
    pathname: request.path + 'graphql',
    query: request.query,
  } as never);
  const options = {
    method: request.method,
    url,
    payload: request.body,
    headers: request.headers,
    validate: false,
  };
  let res = {
    statusCode: 502,
    result: null,
  };
  console.log('Request Options: ', options);
  try {
    res = await Container.get<Server>(HAPI_SERVER).inject(options);
  } catch (e) {
    console.error('ERROR', JSON.stringify(e));
  }

  return {
    status: res.statusCode,
    body: res.result,
    headers,
  };
}

