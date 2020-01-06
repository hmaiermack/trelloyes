import React from 'react';
import List from './list';
import STORE from './store';



function App(store) {
  console.log(store);
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {STORE.lists.map(list =>
          <List header={list.header} cards={list.cardIds.map(id => STORE.allCards[id])} key={list.id} />)}
      </div>
    </main>
  );
}

export default App;