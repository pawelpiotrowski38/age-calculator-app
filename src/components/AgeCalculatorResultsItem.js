import { useEffect, useState } from "react";
import '../styles/AgeCalculatorResultsItem.css';

export default function AgeCalculatorResultsItem({ isResult, result, text }) {
    const [currentValue, setCurrentValue] = useState(0);
    const animationTime = 400;

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
                    setCurrentValue((result * progress).toFixed(0));
                    requestAnimationFrame(animate);
                } else {
                    setCurrentValue(result);
                }
            };
        
            requestAnimationFrame(animate);
        }
    }, [result, isResult]);

    return (
        <div className='age-calculator-results-item'>
            {isResult ? (
                <span className="age-calculator-results-item__value">{currentValue}</span>
            ) : (
                <div className="age-calculator-results-item__none">
                    <span>-</span>
                    <span>-</span>
                </div>
            )}
            {result === 1 ? `${text}` : `${text}s`}
        </div>
    )
}