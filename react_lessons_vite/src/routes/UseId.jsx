import { useId } from 'react'

function LabelInputPair() {
    const id = useId() //initializing hook 
    return (
        <div style={{ marginBottom: '50px' }}>
            <label htmlFor={id}> 
                {/* matching the htmlFor to the id of input (4 lines down) */}
                {/* if we have four different inputs, we can't 
            say id=1 */}
                Click this label to hilight input {id}
            </label>
            <br />
            <input type="text" id={id} placeholder={`input id is ${id}`} />
        </div>
    )
}

// using LabelInputPair 4 times
// need this to work on SSR; needs to be consistent across renders
// useId gives back unique identifier that is consistent with this a function 
// and can be used multiple times across various different renders
// when you need and id that PER THE INSTANTIATION of the componnet is consistent

export default function UseIdComponent() {
    return (
        <>
            <LabelInputPair />
            <LabelInputPair />
            <LabelInputPair />
            <LabelInputPair />
        </>
    )
}