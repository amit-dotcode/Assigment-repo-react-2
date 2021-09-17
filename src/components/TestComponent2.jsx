import React, { useState } from 'react';

const TestComponent2 = () => {

    const [val, setVal] = useState('');
    const [reverseVal, setReverseVal] = useState(``);

    const handleChange = (e) => {

        let targVal = e.target.value;
        setVal(targVal);
        let combine = targVal.split(" ").reverse().join(" ");
        console.log("first ", combine);
        let combine2 = combine.split("").reverse().join("");
        setReverseVal(combine2);
    }



    return (
        <>
            <div className="user_input user2">
                <h4>Task - 2</h4>

                <input type="text" value={val} onChange={handleChange} />
                <span> you Enter - {reverseVal}</span>


            </div>
        </>
    )
}

export default TestComponent2
