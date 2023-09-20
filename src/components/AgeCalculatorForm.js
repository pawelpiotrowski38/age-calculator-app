import { useState } from "react"
import AgeCalculatorFormItem from "./AgeCalculatorFormItem";
import '../styles/AgeCalculatorForm.css';

export default function AgeCalculatorForm({ setResult, setIsResult }) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [dayError, setDayError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [yearError, setYearError] = useState("");

    const validateFields = function() {
        const dayValidation = validateDay();
        const monthValidation = validateMonth();
        const yearValidation = validateYear();

        setDayError(dayValidation);
        setMonthError(monthValidation);
        setYearError(yearValidation);

        return !dayValidation && !monthValidation && !yearValidation;
    }

    const validateDate = function() {
        const pastDateValidation = validatePastDate();
        const wrongDayValidation = validateWrongDay();

        setYearError(pastDateValidation);
        setDayError(wrongDayValidation);

        return !pastDateValidation && !wrongDayValidation;
    }

    const validateDay = function() {
        if (day.length === 0) {
            return "This field is required";
        }

        const convertedDay = Number(day);
        if (!convertedDay || convertedDay < 1 || convertedDay > 31) {
            return "Must be a valid day";
        }

        return ""
    }

    const validateMonth = function() {
        if (month.length === 0) {
            return "This field is required";
        }

        const convertedMonth = Number(month);
        if (!convertedMonth || convertedMonth < 1 || convertedMonth > 12) {
            return "Must be a valid month";
        }
        
        return ""
    }

    const validateYear = function() {
        if (year.length === 0) {
            return "This field is required";
        }

        const convertedYear = Number(year);
        if (!convertedYear) {
            return "Must be a valid year";
        }

        const currentYear = new Date().getFullYear()
        if (convertedYear > currentYear) {
            return "Must be in the past";
        }
        
        return ""
    }

    const validatePastDate = function() {
        const currentDate = new Date();
        const enteredDate = new Date(year, month - 1, day);

        if (enteredDate > currentDate) {
            return "Must be in the past";
        }

        return "";
    }

    const validateWrongDay = function() {
        const maxDaysInMonth = new Date(year, month, 0).getDate();
        if (day > maxDaysInMonth) {
            return "Must be a valid day";
        }

        return "";
    }

    const handleSubmit = function(event) {
        event.preventDefault();

        if (!validateFields() || !validateDate()) {
            setIsResult(false);
            return;
        }

        const currentDate = new Date();

        let yearsDiff = currentDate.getFullYear() - year;
        let monthsDiff = currentDate.getMonth() - (month-1);
        let daysDiff = currentDate.getDate() - day;

        if (daysDiff < 0) {
            const prevMonthDays = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();

            daysDiff += prevMonthDays;
            monthsDiff--;
        }
        
        if (monthsDiff < 0) {
            monthsDiff += 12;
            yearsDiff--;
        }

        setResult(prevResult => ({
            ...prevResult,
            years: yearsDiff,
            months: monthsDiff,
            days: daysDiff
        }));
        setIsResult(true);
    }

    return (
        <form className='age-calculator-form' onSubmit={handleSubmit}>
            <div className='age-calculator-form__items'>
                <AgeCalculatorFormItem id='day' value={day} setValue={setDay} error={dayError} placeholder='DD' />
                <AgeCalculatorFormItem id='month' value={month} setValue={setMonth} error={monthError} placeholder='MM' />
                <AgeCalculatorFormItem id='year' value={year} setValue={setYear} error={yearError} placeholder='YYYY' />
            </div>
            {(dayError || monthError || yearError) && (
                <div className="age-calculator-form__items">
                    <p className="age-calculator-form__error">{dayError}</p>
                    <p className="age-calculator-form__error">{monthError}</p>
                    <p className="age-calculator-form__error">{yearError}</p>
                </div>
            ) }
            <div className='age-calculator-form__button-container'>
                <span className='age-calculator-form__button-container-span'></span>
                <button className='age-calculator-form__button'>
                    <img src='/images/icon-arrow.svg' alt="calculate" />
                </button>
            </div>
        </form>
    )
}