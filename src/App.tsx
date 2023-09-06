import  { useState } from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim() !== '') {
      setList([...list, value]);
      setValue('');
    }
  }

  function handleRemoveNameList(indexToRemove){
    const updatedList = list.filter((_,index)=> index !== indexToRemove)
    setList(updatedList)
  }
  
  return (
    <>
      <div>
        <h1>React Query</h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className='contentForm'>
            <label>
              <input
                type="text"
                className='input'
                placeholder='Digite seu nome'
                value={value}
                onChange={handleChange}
                />
            </label>

            <button className='send' type="submit">
              +
            </button>
          </div>
        </form>
      </div>

      <div>
        <ul className='list'>
          {list.map((name, index) => (
            <li className='element' key={index}>
              {name}
              <button onClick={()=>handleRemoveNameList(index)}  className='trash'>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
