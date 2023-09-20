export default function AgeCalculatorResults({ isResult, result }) {
    return (
        <div className='age-calculator__results'>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>{result.years}</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                {result.years === 1 ? 'year' : 'years'}
            </p>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>{result.months}</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                {result.months === 1 ? 'month' : 'months'}
            </p>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>{result.days}</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                {result.days === 1 ? 'day' : 'days'}
            </p>
        </div>
    )
}