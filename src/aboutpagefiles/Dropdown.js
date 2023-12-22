import React, { useState, useRef, useEffect } from 'react';
import './Aboutpage.css';

const CustomDropdown = ({ labelText, expandedContent }) => {
    const labelStyle = {
        fontSize: '33px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: '600',
    };

    const [expanded, setExpanded] = useState(false);
    const [clickInside, setClickInside] = useState(false);

    const toggleDropdown = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the dropdown and not on the dropdown button
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !clickInside) {
                setExpanded(false);
            }

            // Reset the clickInside state for the next interaction
            setClickInside(false);
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [clickInside]);

    return (
        <div className={`dropdown-container custom-dropdown ${expanded ? 'expanded' : ''}`} ref={dropdownRef}>
            <div className="label-arrow-container" onClick={() => {toggleDropdown(); setClickInside(true);}}>
                <div className="label" style={labelStyle}>
                    {labelText}
                </div>
                <img
                    className="custom-arrow-icon"
                    src={process.env.PUBLIC_URL + '/down-arrow.png'}
                    alt="Down Arrow"
                />
            </div>
            {expanded && (
                <div className="expanded-content">
                    {expandedContent}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;