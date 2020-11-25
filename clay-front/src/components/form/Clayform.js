import React, {useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';


// import clayUI
import '@clayui/css/lib/css/atlas.css';

const Clayform = () => {
    const [active, setActive] = useState(false);
    const iconPath = '';
    return (
        <div >
            <div className='container'>
                <div className='sheet'>
                    <p>Clay form will be built in this comp (below)</p>
                </div>
            </div>
            <div className='sheet text-left'>
                <ClayForm>
                    <ClayForm.Group className='form-group-sm'>
                        <label htmlFor='basicInput'>Name</label>
                        <ClayInput placeholder='Name' type='text' />
                        <ClayForm.FeedbackGroup>
                            <ClayForm.FeedbackItem>
                                <ClayForm.FeedbackIndicator
                                    spritemap={iconPath}
                                    symbol='check-circle-full'
                                />
                                {'I\'m the feedback item'}
                            </ClayForm.FeedbackItem>
                        </ClayForm.FeedbackGroup>
                    </ClayForm.Group><ClayForm.Group className='form-group-sm'>
                        <label htmlFor='basicInput'>Description</label>
                        <textarea className='form-control' placeholder='Description' />
                    </ClayForm.Group>
                </ClayForm>
            </div>
        </div>
    );
};

export default Clayform;