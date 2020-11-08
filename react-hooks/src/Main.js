import React from 'react'
import {  useAlert } from './alert/AlertContext'

export default function Main() {

    // const toggle = useAlertToggle()
    const {show} = useAlert()
    return (
        <>
            <h1>Hello Context example</h1>
            <button className="btn btn-success" onClick={() => show('This text is from Main.js')}>Show alert</button>
        </>
    )

}