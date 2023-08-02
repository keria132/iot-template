import styled from "styled-components";
import React, { useState } from 'react';

const RelaysBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    gap: 1.5rem;

    h2{
        width: 100%;
        height: max-content;
    }

    h2:before{
        content: "";
        display: block;
        margin: 0 0 2% 0%;
        width: 30%;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        transition: 1s;
    }

    h2:hover::before{
        width: 60%;
    }

`

const DeviceBlock = styled.div`
    display: flex;
    flex-flow: column nowrap;
    //border: 1px solid #97d2fb;
    border-radius: 10px;
    padding: 0 1rem 1rem 1rem;
    //margin: 1rem 0 1rem 0;
    box-shadow: 0px 0px 2px 0px #97d2fb;
    width: 40%
`

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 5rem;
    height: 2.5rem;
    background: #A45A52;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`

const Button = styled.span`
    content: '';
    position: absolute;
    left: 3px;
    width: 2rem;
    height: 2rem;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + ${Label} span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`

const devices: boolean[] = [false, false, false]

const Switch = ({ id, isOn, handleToggle }: any) => {
    return (
        <>
            <Checkbox id={`react-switch-new ` + id} type="checkbox" checked={isOn} onChange={handleToggle}/>
            <Label htmlFor={`react-switch-new ` + id} style={isOn == true ? {backgroundColor: "lightgreen"} : {backgroundColor: "#A45A52"}}>
                <Button />
            </Label>
        </>
    )
}

function LightsPage(){
    const [values, setValues] = useState(devices);
    return(
        <RelaysBlock>
            <h2>Lights relays</h2>

            {devices.map((value: boolean, index: number) => {
                return(
                    <DeviceBlock key={index}>
                        <h3>Device name №{index}</h3>
                        <Switch id={index} isOn={values[index]} handleToggle={() => {
                            devices[index] = !devices[index];
                            setValues([...devices]);
                        }}/>
                    </DeviceBlock>
                )
            })}

        </RelaysBlock>
    )
}

export default LightsPage