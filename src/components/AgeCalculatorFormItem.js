export default function AgeCalculatorFormItem({ id, value, setValue, error, placeholder }) {
    return (
        <div className='age-calculator__form-item'>
            <label
                className={`age-calculator__form-label ${error ? 'age-calculator__form-label--error' : ''}`}
                htmlFor={id}
            >
                {id.toUpperCase()}
            </label>
            <input
                className={`age-calculator__form-input ${error ? 'age-calculator__form-input--error' : ''}`}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}