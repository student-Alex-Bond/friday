import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        let currentValue = event.currentTarget.value

        //console.log(event.currentTarget.value)
        if (onChangeOption) {
            onChangeOption(currentValue)
        }
        // onChange, onChangeOption
    }

// map options with key
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label  key={name + '-' + i}>
            <input
                style={{width: '20px', margin: '5px'}}
                type={'radio'}
                onChange={onChangeCallback}
                value={o}
                checked={value === o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
