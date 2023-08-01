function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];
  const handleClick = (event: MouseEvent) => (console.log(event))
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No item Found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="item-list-group" key={item} onClick={handleClick }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
