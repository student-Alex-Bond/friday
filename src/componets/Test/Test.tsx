import React from 'react';
import SuperInputText from "../SuperComponent/c1-SuperInputText/SuperInputText";
import SuperButton from "../SuperComponent/c2-SuperButton/SuperButton";
import SuperCheckbox from "../SuperComponent/c3-SuperCheckbox/SuperCheckbox";
import SuperRadio from "../SuperComponent/c6-SuperRadio/SuperRadio";

const Test = () => {
    return (
        <div>
            <SuperInputText></SuperInputText>
            <SuperButton>Button</SuperButton>
            <SuperCheckbox/>
            <SuperRadio options={['1','2','3']}/>


        </div>
    );
};

export {Test};