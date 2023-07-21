import fetch from 'node-fetch'
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export function query<T, K = Record<string, any>>(query: string, variables?: K): Observable<T> {
  return from(fetch('http://localhost:9000/graphql', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ query, variables })
  })).pipe(
    switchMap((res) => res.json()),
    map((res) => res['data'])
  )
}