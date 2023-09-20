import { useState } from 'react';
import AgeCalculatorForm from './AgeCalculatorForm';
import AgeCalculatorResults from './AgeCalculatorResults';
import '../styles/AgeCalculator.css';

export default function AgeCalculator() {
    const [result, setResult] = useState({
        years: "",
        months: "",
        days: "",
    })
    const [isResult, setIsResult] = useState(false);

    return (
        <section className="age-calculator">
            <AgeCalculatorForm setResult={setResult} setIsResult={setIsResult}/>
            <AgeCalculatorResults isResult={isResult} result={result} />
        </section>
    )
}