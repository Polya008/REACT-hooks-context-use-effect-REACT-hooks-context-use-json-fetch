import React from 'react';
import useJsonFetch from '../utils';

export default function Component({url}) {
    const [data, loading, error] = useJsonFetch(url, {});
    console.log(data, loading, error)
  return (
    <div>
      {data&& !loading ? <div>{data.status}</div>:null}
      {loading ? <div>...Loading</div>:null}
      {error ? <dv>{error}</dv>:null}
    </div>
  );
}