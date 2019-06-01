import React from 'react'
import { Switch, Button, Icon, TextInput } from 'react-materialize'

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

export const FileUploadElement = (props) => {
    return (
        <div class="file-field input-field col offset-s3 s6">
            <div class="btn">
                <span><Icon>cloud_upload</Icon> {props.text}</span>
                <input type="file" style={{width: "1500px"}}/>
            </div>
            <div class="file-path-wrapper" style={{width: "395px"}}>
                <input class="file-path validate" type="text" />
            </div>
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
                icon={props.icon}
            >
                {props.text}
            </Button>
        </div>
    );
}
