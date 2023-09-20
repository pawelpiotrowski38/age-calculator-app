import AgeCalculatorResultsItem from "./AgeCalculatorResultsItem";
import '../styles/AgeCalculatorResults.css';

export default function AgeCalculatorResults({ isResult, result }) {
    return (
        <div className='age-calculator-results'>
            <AgeCalculatorResultsItem isResult={isResult} result={result.years} text='year' />
            <AgeCalculatorResultsItem isResult={isResult} result={result.months} text='month' />
            <AgeCalculatorResultsItem isResult={isResult} result={result.days} text='day' />
        </div>
    )
}