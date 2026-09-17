import React from 'react';
import type { Technology } from '../types/Technology';

interface YourStackProps{
    stack : Technology[];
    onRemove : (id: string) => void;
    onRemoveAll : ()=> void;
}
const YourStack = ({stack, onRemove, onRemoveAll} : YourStackProps) => {
    return (
        <div>
            Loading........
        </div>
    );
};

export default YourStack;