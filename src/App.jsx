import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

function App() {
  const [data, setData] = useState(null)

    useEffect(() => {
      fetch('http://localhost:8000/api/spells/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    }, [])


  return (
    <div className='container'>
      <div className='header'>
        <h1 className='center'>Spells</h1>
        <h2>CRUD</h2>
        <hr className='spacer' />
      </div>
      <div className='content'>
        <div className='row'>
          <table className="table-bordered mytable rounded p-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Icon</th>
                <th>Power Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td><img src={`data:image/png;base64, ${item.icon}`} alt="Icon"/></td>
                  <td>{item.power_level}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  )
}

export default App
