import './Button.css';

const Button = ({ on_db_click, on_click }) => {
    const handle_click = () => {
        on_click()

    };
    const handle_db_click = () => {
        on_db_click()

    };
    return <button onClick={handle_click} onDoubleClick={handle_db_click}>Click Me!</button>
};

export default Button;