import React, { useState, useEffect } from 'react'


function App() {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    // useEffect(()=>{
    //   console.log('render')
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type');
        }

    }, [type]) //call it when type has been changed, if there is no second parameter it will renders it everytime button is clicked

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        console.log('component did mount');
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])


    return (
        <div>
            <h1>Resource: {type}</h1>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>ToDo</button>
            <button onClick={() => setType('posts')}>Posts</button>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
