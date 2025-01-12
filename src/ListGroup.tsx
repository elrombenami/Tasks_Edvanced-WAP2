import {useState, FC} from 'react';
import ListGroupStyle from './ListGroup.module.css'

interface ListGroupProps {  
    title:string,
    items:string[],
    onItemselectd: (index: number) => void

}
const ListGroup: FC<ListGroupProps> = ({title,items,onItemselectd})=> {
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
         const onSelect = () => {
            onItemselectd(selectedIndex)
         }
    return (
        <div className= {ListGroupStyle.container}>
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
             <button className= {'btn byn-primary m-3'}onClick={() => {addItem()}}>Add item</button>
             <button className= {'btn byn-primary'}onClick={() => {onSelect()}}>Select</button>
        </div>
    )
}

export default ListGroup; 