import React from 'react';
import type { Technology } from '../types/Technology';
interface TechnologyCardProps {
technology : Technology;
onAdd : (technology : Technology)=> void;
isAdded : boolean;
}
const TechnologyCard = ({technology, onAdd , isAdded} :TechnologyCardProps) => {
    return (
        <div>
            Loading....
        </div>
    );
};

export default TechnologyCard;