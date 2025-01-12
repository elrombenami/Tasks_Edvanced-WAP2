import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './ListGroup.tsx'
import {useState} from 'react'


function App() {
  const[index1 , setIndex1] = useState(-1);
  const items1 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const items2 = ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

  return(
    <div>
      <h1>My First Component</h1>
      <ListGroup title= "My Items" items={items1} onItemselectd={
        (index) => {
          setIndex1(index)
          console.log('Item selected ' + index)
        }
      }/>
      {index1 != -1 && <p>item {index1} Was Selectd</p>}
      <ListGroup title= "My Second Items" items={items2}onItemselectd={
        (index) => {
          console.log('Item selected ' + index)
        }
      }/>
      {
      index1 == 0 &&
      <div className= "alert alert-primary" role="alert"> A simple primary alert-check it out! </div>
      }
    </div>
  )
}

function App2() {
  return (
  <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }}>
    <div style={{
      backgroundColor: 'red',
      height: '100%',
      width: '0',
      flex: '1',
      position: 'relative',
      top : '0',
    }}>
  </div>
  <div style={{
      backgroundColor: 'blue',
      height: '100%',
      width: '0',
      flex: '1'
    }}>
  </div>
  <div style={{
      backgroundColor: 'green',
      height: '100%',
      width: '0',
      flex: '1'
    }}>
  </div>
  </div>
  )
}


export default App2