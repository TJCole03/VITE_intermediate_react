import { useState, useLayoutEffect, useRef } from 'react'

const LayoutEffectComponent = () => {
    //your hooks
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const el = useRef();

    //WHY DON'T WE USE useEffect???
        //an effect happens immediately after a render ends. an effect happens immediately after a render ends
        // an effect happens immeiately after a render ends
        //there is a "pause" in synchronicity (meaning milliseconds) between the render and the effect.

    useLayoutEffect(() => {
        setWidth(el.current.clientWidth)
        setHeight(el.current.clientHeight)
    })

    //this hook is useful for if you need to measure something that happens in the DOM
    //but it can only be measured after its been rendered

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