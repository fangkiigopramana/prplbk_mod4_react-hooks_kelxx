import React, { useState, useEffect } from "react";
import logo from "../../assets/react.svg";
import "./satu.css";

export default function Counter() {
    const [showImage, setShowImage] = useState(false);
    const [arr, setArr] = useState([]);
    const [RandNum, setRandNum] = useState();
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // fungsi tambah
    //dijalankan 1 kali 
    useEffect(() => {
        let num = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        setRandNum(num);
        setArr(num.toString().split(''));
    }, []);


    useEffect(() => {
        if (count1 == arr[0] && count2 == arr[1] && count3 == arr[2]) {
            alert(`Kamu benar !!! Angka ${RandNum}`)
        } else {
            console.log('Belum sama')
        }
    }, [count1, count2, count3, arr, showImage]);

    return (
        <>
            <div className="Main">
                <h3>Challenge 1 | Tebak Angka</h3>
                <p style={{margin: '0'}}> Aku terdiri dari {arr.length} digit angka</p>
                <p style={{margin: '0'}}> Jika ditambah 10, aku {RandNum + 10}</p>
                <p style={{margin: '0'}}> Jika dikurangi 10, aku {RandNum - 10}</p>
                <p style={{margin: '0'}}> Angka berapakah aku ?</p>
                <br />
                <div className="flex flex-row items-center">
                    <div className="mr-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount1(count1 + 1)}>+</button>
                    </div>
                    <p className="text">{count1}</p>
                    <div className="ml-2">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount1(count1 - 1)}>-</button>
                    </div>
                </div>
                <br />
                <div className="flex flex-row items-center">
                    <div className="mr-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount2(count2 + 1)}>+</button>
                    </div>
                    <p className="text">{count2}</p>
                    <div className="ml-2">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount2(count2 - 1)}>-</button>
                    </div>
                </div>
                <br />

                <div className="flex flex-row items-center">
                    <div className="mr-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount3(count3 + 1)}>+</button>
                    </div>
                    <p className="text">{count3}</p>
                    <div className="ml-2">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount3(count3 - 1)}>-</button>
                    </div>
                </div>
            </div>
        </>
    );
}