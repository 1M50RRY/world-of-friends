import React from 'react'
import { Switch, Button, TextInput } from 'react-materialize'

export const SwitchElement = (props) => {
    return (
        <div class="input-field">
            <Switch 
                offLabel={props.offLabel} 
                onLabel={props.onLabel} 
                style={props.style}
            />
        </div>
    );
}

export const TextInputElement = (props) => {
    return (
        <div class="input-field col offset-s3 s8">
            <TextInput
                m={props.m}
                icon={props.icon}
                label={props.label}
                email={props.email}
                validate={props.validate}
                error={props.error}
                success={props.success}
                password={props.password}

            />
        </div>
    );
}

export const ButtonElement = (props) => {
    return (
        <div class="input-field col offset-s3 s6">
            <Button
                m={props.m}
                node={props.node}
                waves={props.waves}
                large={props.large}
                style={props.style}
                onClick={props.onClick}
            >
                {props.text}
            </Button>
        </div>
    );
}
