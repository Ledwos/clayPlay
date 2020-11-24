import React, {useState} from 'react';
import {ClayCheckbox, ClayRadio} from '@clayui/form';
import ClayButton from '@clayui/button';
import ClayDropDown, {ClayDropDownWithItems} from '@clayui/drop-down';

const Test = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div>
            <ClayDropDown.ItemList 
                active={expand}
                onActiveChange={setExpand}
                trigger={<ClayButton>{'Click Me'}</ClayButton>}
            >
                <ClayDropDown.Item href='#1'>Linkable</ClayDropDown.Item>
                <ClayDropDown.Item>
                    <ClayCheckbox label='Checkbox' onChange={() => {}} />
                </ClayDropDown.Item>
            </ClayDropDown.ItemList>
            <p>Below is the 'high-level' version</p>
            <ClayDropDownWithItems
                items={[
                    {
                        href: '#linkable',
                        label: 'linkable',
                    },
                    {
                        checked: true,
                        label: 'Checkbox',
                        type: 'checkbox',
                    },
                    {
                        label: 'Radio',
                        type: 'radio',
                        value: 'radio',
                    },
                ]}
                trigger={<ClayButton>{'Click Me'}</ClayButton>}
            />
        </div>
    );
};

export default Test;