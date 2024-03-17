import {useState} from 'react';

const Main = () => {
    const players = () =>{
        const man_city = ['Ederson', 'Walker', 'Stones', 'Dias', 'Zinchenko',
         'Rodri', 'Gundogan', 'De Bruyne', 'Mahrez', 'Sterling', 'Foden']
        const integer = Math.floor(Math.random() * (man_city.length+1))
        return man_city[integer]
    }

    const handleClick = () =>{
        alert("Button Clicked")
    }
    const handleClick2 = (name) =>{
        alert(`Button Clicked by ${name}`)
    }

    /* useStates:
syntax:    const [state, setState] = useState(initialState);

state: The current state value.
setState: A function to update the state.
initialState: The initial state value.

    */
    const [count, setCount] = useState(0);
    const counter = () =>{
        setCount(count + 1);
    }


    const [user, setUser] = useState({ name: "", age:0});
    
    const userInfo = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }
    

    return (
        <main>
          <div class="div1">
            <h4>Manchester City Players</h4>
                <div>{players()}</div>
                <button id="click_btn" onClick={handleClick}>Click</button>
                <button id="click_btn" onClick={() => handleClick2(players())}>Click2</button>
          </div>

        <div class="div2">
            <h4>Counting</h4>
            <p>Count: {count}</p>
            <button id="click_btn" onClick={() => counter()}>Increment</button>
        </div>
        
        <div class="div3">
            <h4>User</h4>
        <input
            placeholder='name'
            name='name'
            type="text"
            value={user.name}
            onChange={(event) => userInfo(event) }
        />
        <input
            type="number"
            name='age'
            value={user.age}
            onChange={(event) => userInfo(event) }
        />

            <p>Username: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>

        </main>
    )
}
export default Main;