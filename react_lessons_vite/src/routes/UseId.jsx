import { useId } from 'react'

function LabelInputPair() {
    const id = useId() //initializing hook 
    return (
        <div style={{ marginBottom: '50px' }}>
            <label htmlFor={id}>
                Click this label to hilight input {id}
            </label>
            <br />
            <input type="text" id={id} placeholder={`input id is ${id}`} />
        </div>
    )
}

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