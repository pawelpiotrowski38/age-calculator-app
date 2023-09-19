import '../styles.css';

export default function AgeCalculator() {
    return (
        <section className="age-calculator">
            <form className='age-calculator__form'>
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
            <div className='age-calculator__results'>
                <p className='age-calculator__result'>
                    <span>--</span>years
                </p>
                <p className='age-calculator__result'>
                    <span>--</span>months
                </p>
                <p className='age-calculator__result'>
                    <span>--</span>days
                </p>
            </div>
        </section>
    )
}