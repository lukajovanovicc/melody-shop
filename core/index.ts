'use server';

import { Success as FetchSuccess, Failure as FetchFailure } from '@/core/types';
import { cookies as _cookies } from 'next/headers';

const buildDefaultHeaders = (accessToken?: string) => ({
  'Content-Type': 'application/json',
  ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
});

const buildResponse = async (response: Response) => {
  if (response.status >= 400) {
    return {
      ok: false,
      status: response.status,
      result: await response.json(),
    };
  }

  return {
    ok: true,
    status: response.status,
    result: await response.json(),
  };
};

const fetchService = async <S, F = any>(
  url: string,
  body?: RequestInit
): Promise<FetchSuccess<S> | FetchFailure<F>> => {
  const cookies = await _cookies();
  const accessToken = cookies.get('accessToken')?.value;
  const fetchBody = {
    ...body,
    headers: {
      ...buildDefaultHeaders(accessToken),
      ...body?.headers,
    },
  };

  try {
    const response = await fetch(url, fetchBody);

    if (response.status === 401) {
      const refreshToken = cookies.get('refreshToken')?.value;

      if (refreshToken) {
        const response = await fetch(url, {
          ...fetchBody,
          headers: {
            ...buildDefaultHeaders(refreshToken),
            ...body?.headers,
          },
        });

        if (response.status !== 200) {
          return { ok: false, status: 401, result: null };
        }
      }

      const repeatFetchBody = {
        ...body,
        headers: {
          ...buildDefaultHeaders(refreshToken),
          ...body?.headers,
        },
      };

      return buildResponse(await fetch(url, repeatFetchBody));
    }

    return buildResponse(response);
  } catch (err) {
    console.log(err);
    return { ok: false, status: 500, result: null };
  }
};

export default fetchService;
