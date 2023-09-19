export default function AgeCalculatorResults({ isResult }) {
    return (
        <div className='age-calculator__results'>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>28</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                years
            </p>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>3</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                months
            </p>
            <p className='age-calculator__result'>
                {isResult ? (
                    <span>12</span>
                ) : (
                    <>
                        <span>-</span>
                        <span>-</span>
                    </>
                )}
                days
            </p>
        </div>
    )
}