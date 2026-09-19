import type { Technology } from '../types/Technology';
import { RxCross2 } from 'react-icons/rx';

interface YourStackProps{
    stack : Technology[];
    onRemove : (id: string) => void;
    onRemoveAll : ()=> void;
}
const YourStack = ({stack, onRemove, onRemoveAll} : YourStackProps) => {
    return (
        <div className='card bg-base-100 border border-gray-200 shadow-sm'>
            <div className='card-body p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='font-bold text-black'>Your Stack</h2>
                        <p className='text-xs text-gray-400 mt-1'>{stack.length} Technology Selected </p>
                    </div>
                    {stack.length > 0 && (
                        <button onClick={onRemoveAll} className='btn btn-xs btn-outline btn-error'>Remove All</button>
                    )}

                </div>

                {stack.length === 0 ? (
                    <div className='border border-dashed border-gray-200 rounded-lg py-8 px-4 text-center mt-3'>
                        <p>Your stack is empty.</p>
                    </div>
                ) : ( 
                <div className='space-y-2 mt-3'>

                    {stack.map((technology)=> (
                        <div
                        key={technology.id}
                        className='flex items-center gap-3 border border-gray-100 rounded-lg p-2'
                        >
                            <img src= {technology.icon} alt= {technology.name} className='w-8 h-8 object-contain' />
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-sm font-semibold'>
                                    {technology.name}
                                </h3>
                                <p className='text-[10px] text-gray-400'>
                                    {technology.category}
                                </p>
                            </div>

                            <button
                            onClick={()=>onRemove(technology.id)}
                            className='btn btn-xs btn-circle btn-ghost text-red-500'
                            >
                                <RxCross2 />
                            </button>

                        </div>
                        
                    )
                    )}

                </div> )}
                

            </div>

        </div>
    );
};

export default YourStack;