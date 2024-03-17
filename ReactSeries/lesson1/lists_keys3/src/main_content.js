import { useState } from "react";
import ProductList from './props/ProductList';
import Cart from "./props/Cart";
import UserForm from "./ctrldComponents/ctrld";
import Comment from './ctrldComponents/commentInputs';

const Main_content = () => {
    const items = ['Apple','Banana','Orange'];
    function showItems() {
        return items.map((item,index) => (
            <li key={index}>{item}</li>
        ));
    }

    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Doe' }
    ];

    function showUsers() {
        return users.map(user => (
            <li key={user.id}>{user.name}</li>
        ));
    }

    const formData = [
        { id: 'name', label: 'Name', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'password', label: 'Password', type: 'password' }
    ];

    function showFormData() {
        return formData.map(field => (
            <div key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                    id={field.id}
                    type={field.type}
                />
            </div>
        ));
    }

    const _playersData = [
        {id:1, name:"De brunye", team:"Man City"},
        {id:2, name:"Ronaldo", team:"Real Madrid"},
        {id:3, name:"Messi", team:"Barcelona"},
        {id:4, name:"Neymar", team:"PSG"},
        {id:5, name:"Mbappe", team:"PSG"}
    ]

    const [players, setPlayers] = useState(_playersData);

    // ========
     /* 
    We define an array of products, each containing an id, name, and price.
    We pass the products array as a prop to the ProductList component.
    */
    /* 
    Props and Prop Drilling in ReactJS:
Usage:

Props (short for properties) are a way of passing data from parent components to child components in React.
They allow you to make your components reusable and configurable by passing data dynamically.
Prop drilling refers to the process of passing props down multiple levels of nested components.
    */

const products_list= [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 599 },
    { id: 3, name: 'Headphones', price: 99 },
    {id:4,name:"Camera", price:203}
  ];

    return (
        <main>
            <div class="div1">
                <h3>Items</h3>
                <ul>{showItems()}</ul>
            </div>
            <div class="div2">
            <h3>Users</h3>
                <ul>{showUsers()}</ul>
            </div>
            <div class="div3">
                <h3>Data</h3>
                {showFormData()}
            </div>

            <div class="div1">
                <ul>
                    {players.map(player => (
                        <li key={player.id}>
                            {player.name} - {player.team}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>E-commerce</h3>
                <ProductList products={products_list}/>
                      
                <Cart products={products_list} />
                
            </div>

            <div>
                <h3>Controlled Components</h3>
                <UserForm />
            </div>

            <div className="comment_system">
                <Comment />
            </div>


        </main>
    );
}

export default Main_content;
