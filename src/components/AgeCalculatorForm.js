import { useState } from "react"

export default function AgeCalculatorForm() {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = function(event) {
        event.preventDefault();
    }

    return (
        <form className='age-calculator__form' onSubmit={handleSubmit}>
            <div className='age-calculator__form-items'>
                <div className='age-calculator__form-item'>
                    <label className='age-calculator__form-label' htmlFor='day'>
                        DAY
                    </label>
                    <input
                        className='age-calculator__form-input'
                        id='day'
                        name='day'
                        placeholder='DD'
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className='age-calculator__form-item'>
                    <label className='age-calculator__form-label' htmlFor='month'>
                        MONTH
                    </label>
                    <input
                        className='age-calculator__form-input'
                        id='month'
                        name='month'
                        placeholder='MM'
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                </div>
                <div className='age-calculator__form-item'>
                    <label className='age-calculator__form-label' htmlFor='year'>
                        YEAR
                    </label>
                    <input
                        className='age-calculator__form-input'
                        id='year'
                        name='year'
                        placeholder='YYYY'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
            </div>
            <div className='age-calculator__button-container'>
                <span className='age-calculator__button-container-span'></span>
                <button className='button'>
                    <img src='/images/icon-arrow.svg' alt="arrow" />
                </button>
            </div>
        </form>
    )
}