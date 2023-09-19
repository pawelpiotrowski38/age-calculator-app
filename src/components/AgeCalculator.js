import { useState } from 'react';
import '../styles.css';
import AgeCalculatorForm from './AgeCalculatorForm';
import AgeCalculatorResults from './AgeCalculatorResults';

export default function AgeCalculator() {
    const [isResult, setIsResult] = useState(false);

    return (
        <section className="age-calculator">
            <AgeCalculatorForm />
            <AgeCalculatorResults isResult={isResult} />
        </section>
    )
}