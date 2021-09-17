import React, { useState } from 'react';

const TestComponent = () => {

    const [val, setVal] = useState('');
    const [datalist, setDatalist] = useState([]);


    const handleChange = (e) => {

        setVal(e.target.value);

    }

    const submitData = (e) => {
        e.preventDefault();

        if (val === "") {

            alert("please Enter Some text");

        } else {
            let textVal = [...datalist, val]

            setDatalist(textVal);
            setVal("");
        }




    }

    return (
        <>
            <div className="user_input">
                <h4>Task - 1</h4>
                <form onSubmit={submitData}>
                    <input type="text" value={val} onChange={handleChange} />
                    <button >Submit</button>
                </form>
                <span>{datalist.length > 0 ? "You Enter : -" : " Please Enter Some Text..."}</span>
                {
                    datalist.map((elem, index) => {

                        return (

                            <li key={index}>
                                {elem}
                            </li>
                        )

                    })
                }

            </div>
        </>
    )
}

export default TestComponent
