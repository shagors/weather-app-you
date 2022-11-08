import React from 'react';
import ChooseStateComponents from './ChooseState';

const HomeComponents = () => {
  return (
    <>
        <div className='homeWrap'>
            <div className='weatherSection'>
                left components
                <div className='rightSide'>
                    <ChooseStateComponents></ChooseStateComponents>
                    2. Weekinfo <br/>
                    3. Humidity
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeComponents;