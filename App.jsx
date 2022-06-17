import * as React from 'react';
import './style.css';

export default function App() {
  const [tazz, setTazz] = React.useState([
    { id: 1, name: 'prakash' },
    { id: 2, name: 'tazzo' },
    { id: 4, name: 'Joa' },
    { id: 5, name: 'Quin' },
  ]);

  const handDel = (id) => {
    const news = tazz.filter((x) => x.id !== id);
    setTazz(news);
  };

  const renderList = tazz.map((x) => (
    <div key={x.id}>
      {x.name}
      <button onClick={() => handDel(x.id)}>Del</button>
    </div>
  ));
  return (
    <div>
      <h1>{renderList}!</h1>
    </div>
  );
}
