import '../styles/AgeCalculatorFormItem.css';

export default function AgeCalculatorFormItem({ id, value, setValue, error, placeholder }) {
    return (
        <div className='age-calculator-form-item'>
            <label
                className={`age-calculator-form-item__label ${error ? 'age-calculator-form-item__label--error' : ''}`}
                htmlFor={id}
            >
                {id.toUpperCase()}
            </label>
            <input
                className={`age-calculator-form-item__input ${error ? 'age-calculator-form-item__input--error' : ''}`}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}