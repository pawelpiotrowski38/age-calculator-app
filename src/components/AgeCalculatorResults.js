import { useEffect, useState } from "react";

export default function AgeCalculatorResults({ isResult, result }) {
    const [currentYearValue, setCurrentYearValue] = useState(0);
    const [currentMonthValue, setCurrentMonthValue] = useState(0);
    const [currentDayValue, setCurrentDayValue] = useState(0);
    const animationTime = 500;

    useEffect(() => {
        let startTimestamp;
        
        if (isResult) {
            const animate = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const elapsed = timestamp - startTimestamp;
            
                if (elapsed < animationTime) {
                    const progress = elapsed / animationTime;
                    const newYearValue = (result.years * (elapsed / animationTime)).toFixed(0);
                    const newMonthValue = (result.months * progress).toFixed(0);
                    const newDayValue = (result.days * progress).toFixed(0);
                    setCurrentYearValue(newYearValue);
                    setCurrentMonthValue(newMonthValue);
                    setCurrentDayValue(newDayValue);
                    requestAnimationFrame(animate);
                } else {
                    setCurrentYearValue(result.years);
                    setCurrentMonthValue(result.months);
                    setCurrentDayValue(result.days);
                }
            };
        
            requestAnimationFrame(animate);
        }
    }, [result, isResult]);

    return (
        <div className='age-calculator__results'>
            <div className='age-calculator__result'>
                {isResult ? (
                    <span className="age-calculator__result-value">{currentYearValue}</span>
                ) : (
                    <div className="age-calculator__result-none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.years === 1 ? 'year' : 'years'}
            </div>
            <div className='age-calculator__result'>
                {isResult ? (
                    <span className="age-calculator__result-value">{currentMonthValue}</span>
                ) : (
                    <div className="age-calculator__result-none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.months === 1 ? 'month' : 'months'}
            </div>
            <div className='age-calculator__result'>
                {isResult ? (
                    <span className="age-calculator__result-value">{currentDayValue}</span>
                ) : (
                    <div className="age-calculator__result-none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.days === 1 ? 'day' : 'days'}
            </div>
        </div>
    )
}