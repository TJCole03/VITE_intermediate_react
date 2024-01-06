import { useState, useLayoutEffect, useRef } from 'react'

const LayoutEffectComponent = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const el = useRef();

    useLayoutEffect(() => {
        setWidth(el.current.clientWidth)
        setHeight(el.current.clientHeight)
    })

    return (
    <>
        <h2>textarea width: {width}</h2>
        <h2>textarea height: {height}</h2>
            <textarea 
                onClick={() => {
                    setWidth(0)
                }}
                ref={el}
            />
    </>
)

}

export default LayoutEffectComponent