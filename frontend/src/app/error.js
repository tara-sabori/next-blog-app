'use client'
const Error = ({error,reset}) => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center'>
            <p className='text-sm text-red-500 font-semibold'>
                {error?.message}
            </p>
            <button onClick={reset}>try again</button>
        </div>
    );
}

export default Error;
