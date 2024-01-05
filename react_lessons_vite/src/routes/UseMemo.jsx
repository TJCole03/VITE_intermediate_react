import { useEffect, useState, useMemo } from 'react'
import expensiveMathOperation from './expensiveMathOperation'

export default function Home() {
    const [count, setCount] = useState(35);
    const [left, setLeft] = useState(0);
    const value = useMemo(() => expensiveMathOperation(count), [count]);

    useEffect(() => {
        requestAnimationFrame(animate);
        function animate() {
            setLeft(left + 1);
        }
    }, [left])

    return (
        <div>
            <div style={{
                left: `${Math.sin(left * 0.05) * 100 + 100}px`
            }}
                className='ball'
            ></div>
            <h2>
                Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
                Count: {count} <button onClick={() => setCount(count - 1)}>Eyyy</button>
            </h2>
            <h2>Result of an expensive math operation: {value}</h2>
        </div>
    )
}