import React from 'react'
import { Switch, Button, Icon, TextInput } from 'react-materialize'

export const SwitchElement = ({offLabel, onLabel, style, name, onChange}) => {
    return (
        <div class="input-field">
            <Switch 
                offLabel={offLabel} 
                onLabel={onLabel} 
                style={style}
                name={name}
                onChange={onChange}
            />
        </div>
    );
}

export const FileUploadElement = ({text, name, onChange}) => {
    return (
        <div class="file-field input-field col offset-s3 s6">
            <div class="btn">
                <span><Icon>cloud_upload</Icon> {text}</span>
                <input name={name} required onChange={onChange} type="file" style={{width: "1500px"}}/>
            </div>
            <div class="file-path-wrapper" style={{width: "395px"}}>
                <input class="file-path validate" type="text" />
            </div>
        </div>
    );
}


export const TextInputElement = (
    {m, icon, name, label, email, validate, error, success, password, onChange}
    ) => 
{
    return (
        <div class="input-field col offset-s3 s8">
            <TextInput
                m={m}
                icon={icon}
                label={label}
                email={email}
                validate={validate}
                error={error}
                success={success}
                password={password}
                name={name} 
                onChange={onChange}
                required
            />
        </div>
    );
}

export const ButtonElement = ({m, node, waves, large, style, onClick, icon, name, text}) => {
    return (
        <div class="input-field col offset-s3 s6">
            <Button
                m={m}
                node={node}
                waves={waves}
                large={large}
                style={style}
                onClick={onClick}
                icon={icon}
                name={name}
                required
            >
                {text}
            </Button>
        </div>
    );
}
