import '../styles.css';

export default function AgeCalculator() {
    return (
        <section className="age-calculator">
            <div className='age-calculator__form'>
                <div className='age-calculator__form-items'>
                    <div className='age-calculator__form-item'>
                        <label className='age-calculator__form-label'>
                            DAY
                        </label>
                        <input className='age-calculator__form-input' />
                    </div>
                    <div className='age-calculator__form-item'>
                        <label className='age-calculator__form-label'>
                            MONTH
                        </label>
                        <input className='age-calculator__form-input' />
                    </div>
                    <div className='age-calculator__form-item'>
                        <label className='age-calculator__form-label'>
                            YEAR
                        </label>
                        <input className='age-calculator__form-input' />
                    </div>
                </div>
                <button className='button'></button>
            </div>
            <div className='age-calculator__results'>
                <p className='age-calculator__result'>
                    <span>38</span> years
                </p>
                <p className='age-calculator__result'>
                    <span>3</span> months
                </p>
                <p className='age-calculator__result'>
                    <span>26</span> days
                </p>
            </div>
        </section>
    )
}