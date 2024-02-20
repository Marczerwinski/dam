import {useEffect, useState} from "react";

interface TestConfig {
    config?: {
        background: string;
    }
}

export const Test = ({config}: TestConfig) => {
    const [state, setState] = useState(0);
    useEffect(() => {
        console.log('Test component mounted');
    }, []);
    return (
        <div style={{background: config?.background}}>
        <p>TEST</p>
            <button onClick={() => setState((prev) => prev+1)}>{state}</button>
        </div>
    )
}

export default Test;
