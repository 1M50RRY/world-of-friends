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

export const FileUploadElement = ({text, name, onChange, s, m, offS, offM,}) => {
    return (
        <div class={`file-field input-field col offset-m${offM} offset-s${offS} s${s} m${m}`}>
            <div class="btn">
                <span><Icon>cloud_upload</Icon> {text}</span>
                <input name={name} required onChange={onChange} type="file" style={{width: "1500px"}}/>
            </div>
            <div class="file-path-wrapper">
                <input class={"file-path validate s" + s + " m" + m} type="text" />
            </div>
        </div>
    );
}


export const TextInputElement = (
    {m, s, offS, offM, icon, name, label, email, validate, error, success, password, onChange}
    ) => 
{
    return (
        <div class={`input-field col offset-m${offM} offset-s${offS} s${s} m${m}`}>
            <TextInput
                m={m}
                s={s}
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

export const ButtonElement = ({m, s, offS, offM, node, waves, large, style, onClick, icon, name, text}) => {
    return (
        <div class={`input-field col offset-m${offM} offset-s${offS} s${s} m${m}`}>
            <Button
                m={m}
                s={s}
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
