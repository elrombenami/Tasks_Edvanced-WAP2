import {useState, FC} from 'react';

interface ListGroupProps {  
    title:string,
    items:string[]

}
const ListGroup: FC<ListGroupProps> = ({title,items})=> {
    const[selectedIndex, setSelectedIndex] = useState(0);
   /*const [items] = useState([
        'An item', 'A second item', 'A third item', 'A fourth item', 'A fifth item'])*/

    const [rendet, setRender] = useState(0)

    console.log('ListGroup render')

    const onClick = (index: number) => {
        console.log('click ' + index)
        setSelectedIndex (index)
    }

    const addItem = () => 
        {
        console.log('add item')
        items.push("newItem")
        setRender(rendet + 1)
        
         }

    return (
        <div>
            <h1>{title}</h1>
            {items.length === 0 ? <p>No items</p> :
            <ul className = "list-group">
            {items.map((item, index) => {
                return <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={index} 
                onClick ={() => {onClick(index) }}>
                {index} {item}
                 </li>
             })}
             </ul>
             }
             <button onClick = {() => {addItem()}}>Add item</button>
        </div>
    )
}

export default ListGroup; 