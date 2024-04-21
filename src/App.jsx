import { useState, useEffect } from 'react'
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
      <div className='content'>
        <div className='row'>
          <table>
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
                  <td>{item.icon}</td>
                  <td>{item.power_level}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
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
