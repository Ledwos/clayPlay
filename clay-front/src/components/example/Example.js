import React, {useState} from 'react';
import Test from '../test/Test';
// import {ClayCheckbox, ClayRadio} from '@clayui/form';
// import ClayButton from '@clayui/button';
// import ClayDropDown from '@clayui/drop-down';


// import clayUI
import '@clayui/css/lib/css/atlas.css';

const Example = () => {
    return (
        <div>
            <div className='container'>
                <div className='sheet'>
                    <div className='sheet-header'>
                        <h3 className='sheet-title'>Sheet Title</h3>
                        <div className='sheet-text'> text with class 'sheet-text'</div>
                    </div>
                </div>
                <div className='sheet-section'>{<Test />}</div>
            </div>
        </div>
    );
};

export default Example;