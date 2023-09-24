import React, { useState, useEffect } from "react";
import "./dua.css";

export default function Index() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    //dijalankan 1 kali 
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${count}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [count]);

    //dijalankan terus setiap ada perubahan count 
    useEffect(() => {
        if (count > 0) {
            return alert(`component will update & count ${count}`);
        }
        return setCount(0)
    }, [count]);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    return (
        <>
        <div className="Main">
            <h3>Challenge 2 | Cari Berapa Orang</h3>
            <p>KELOMPOKXX</p>
            <ol>
                {
                    (count > 0) ? data.map((user, index) => (
                        <li key={index}>
                            {user.name.first} {user.name.last}
                        </li>
                    )) : "!!! Nggak ada orang !!!"
                }
            </ol>
            <div className="ViewButton2" style={{"marginBottom":"15px"}}>
                <button className="Button"
                    onClick={countUp}>
                    Up
                </button>
            </div>
            <div className="ViewButton1">
                <button className="Button"
                    onClick={countDown}>
                    Down
                </button>
            </div>
        </div>
        </>
    )
};