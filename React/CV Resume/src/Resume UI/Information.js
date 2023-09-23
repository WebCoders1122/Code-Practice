import './Information.css';

const Information = ({ heading, value }) => {
    return (
        <>
            <p>
                <span className='heading'>{heading}</span>
                <span className='mark'> : </span>
                <span className='value'>{value}</span>
            </p>
        </>
    )
};

export default Information;