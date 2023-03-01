import React, { useState } from 'react';
import MapChart from './MapChart';
import MapDialog from './MapDialog';

const AreaSelector = (props) => {
   
    const [STName, setSTName] = useState("")
    const [show, setShow] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <MapDialog show={show} StateName={STName} closeModal={handleClose} />
           
            <div style={{ backgroundColor: 'black' }}>
                <MapChart setTooltipContent={props.setContent} setStateName={setSTName} setShowDistrict={setShow} />
                {/* {isShown && <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)} className="text-primary fs-1">{content}</div>} */}
                
            </div>
           
        </React.Fragment>
    );
}

export default AreaSelector;