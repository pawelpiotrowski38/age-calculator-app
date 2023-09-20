import { useEffect, useState } from "react";
import '../styles/AgeCalculatorResults.css';

export default function AgeCalculatorResults({ isResult, result }) {
    const [currentYearValue, setCurrentYearValue] = useState(0);
    const [currentMonthValue, setCurrentMonthValue] = useState(0);
    const [currentDayValue, setCurrentDayValue] = useState(0);
    const animationTime = 500;

    useEffect(() => {
        let startTimestamp;
        
        if (isResult) {
            const animate = (timestamp) => {
                if (!startTimestamp) {
                    startTimestamp = timestamp
                }
                const elapsedTime = timestamp - startTimestamp;
            
                if (elapsedTime < animationTime) {
                    const progress = elapsedTime / animationTime;
                    setCurrentYearValue((result.years * progress).toFixed(0));
                    setCurrentMonthValue((result.months * progress).toFixed(0));
                    setCurrentDayValue((result.days * progress).toFixed(0));

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
        <div className='age-calculator-results'>
            <div className='age-calculator-results__result'>
                {isResult ? (
                    <span className="age-calculator-results__result--value">{currentYearValue}</span>
                ) : (
                    <div className="age-calculator-results__result--none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.years === 1 ? 'year' : 'years'}
            </div>
            <div className='age-calculator-results__result'>
                {isResult ? (
                    <span className="age-calculator-results__result--value">{currentMonthValue}</span>
                ) : (
                    <div className="age-calculator-results__result--none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.months === 1 ? 'month' : 'months'}
            </div>
            <div className='age-calculator-results__result'>
                {isResult ? (
                    <span className="age-calculator-results__result--value">{currentDayValue}</span>
                ) : (
                    <div className="age-calculator-results__result--none">
                        <span>-</span>
                        <span>-</span>
                    </div>
                )}
                {result.days === 1 ? 'day' : 'days'}
            </div>
        </div>
    )
}