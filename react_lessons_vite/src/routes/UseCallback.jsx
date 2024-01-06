import { useEffect, useState, useCallback } from 'react'
import UseRefComponent from './UseRef'

export default function Home() {
    const [left, setLeft] = useState(0);
    useEffect(() => {
        requestAnimationFrame(animate);
        function animate() {
            setLeft(left + 1)
        }
    }, [left])

//you can memoize a callback and pass that into a function
//must be wrapped in memo to functin properyl 
//using callback and memo together will give you the abulity to not have to 
//re render components every time theres a change in state
const aUsefulCallback = () => { }
const memoizedCallBack = useCallback(aUsefulCallback, [])

return (
    <div>
        <div
            style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
            className='ball'
        ></div>
        <UseRefComponent cb={memoizedCallBack} />
    </div>
)}