function Message(){
  const name = "Gulraiz"
  // const name = "" this is an empty/false condition, will print hello world
  if (name)
    return <h1>Hello {name}!</h1>;
  return <h1>Hello World!</h1>;
}

export default Message;