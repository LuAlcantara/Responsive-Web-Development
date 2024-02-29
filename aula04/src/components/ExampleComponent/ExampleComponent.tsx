import React, { useState } from "react";

const ExampleComponent: React.FC = () => {
    
    const[text,setText] = useState('');
    const[text2,setText2] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setText(event.target.value);
        setText2(event.target.value);
    }

    return (
        <>
            <div>
                <b>Texto:</b>
                <input type="text" onChange={handleChange}/>
                <p>Texto digitado: { text }</p>
                <input type="text" onChange={handleChange}/>
                <p>Texto digitado: { text2 }</p>
            </div>
        </>
    )
}
export default ExampleComponent;