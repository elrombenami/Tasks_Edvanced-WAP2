import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './ListGroup.tsx'

function App() {
  const items1 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const items2 = ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

  return(
    <div>
      <h1>My First Component</h1>
      <ListGroup title= "My Items" items={items1}/>
      <ListGroup title= "My Second Items" items={items2}/>

    </div>
  )
}

export default App