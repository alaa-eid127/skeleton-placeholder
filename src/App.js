import './App.css';
import Data from './Data';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';
import SkeletonCard from './components/SkeletonCard';
function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {

      setVideos(Data);
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <div className="App">
      <h2 className='application-header'>welcome to the most significant website</h2>
      {loading && <SkeletonCard loading={loading} />}
      {!loading && videos.map((list, index) => {
        return (
          <section key={index} >
            <h2 className='section-header'>{list.section}</h2>
            <CardList list={list} />
          </section>

        )

      })}

    </div>
  );
}

export default App;
