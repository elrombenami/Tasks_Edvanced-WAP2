function ListGroup() {
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'A fifth item']
    return (
        <ul className = "list-group">
            {items.map((item, index) => {
                return <li className="list-group-item">{index} {item}</li>
            })}
        </ul>
    )
}

export default ListGroup;