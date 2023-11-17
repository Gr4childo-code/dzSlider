import { useEffect, useState } from 'react';
import Swipper from './components/Swipper/Swipper';
import axios from 'axios';

import './App.scss';

interface ISwipper {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

function App() {
  const [items, setItems] = useState<ISwipper[]>([]);
  const [status, setStatus] = useState<number | undefined>();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5').then(res => {
      setItems(res.data);
      setStatus(res.status);
    });
  }, []);

  return <div className='container'>{status !== 200 && status ? <p>LOADING.....</p> : <Swipper data={items} />}</div>;
}

export default App;
