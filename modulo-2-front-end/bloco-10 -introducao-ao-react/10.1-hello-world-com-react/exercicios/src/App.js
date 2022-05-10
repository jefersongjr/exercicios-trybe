const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['lavar o carro', 'correr', 'estudar react', 'dormir'];
  const functionTasks = tasks.map((li) => Task(li) );
  return (
    <ol> { functionTasks } </ol>
  );
}

export default App;
