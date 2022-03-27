import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    //console.log(options)
    const mappedOptions: any= options ? options.map((option, id) =>(

            <option key={id}>
                {option}
            </option>

    )):[]; // map options with key

    const onChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => {
       let selectIndex = event.currentTarget.options.selectedIndex
            if (onChangeOption) {
                onChangeOption(options![selectIndex])

        }

    }

    return (
        <select
            style={{width: '70px', margin: '10px'}}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
