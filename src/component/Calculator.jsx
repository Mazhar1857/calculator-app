import React, { useEffect, useState } from 'react';
import './calculator.css';
import { themeData } from './themeData';

const Calculator = ({ theme, setTheme, themeClr }) => {
    const [input, setInput] = useState('');

    const handleTheme = (e) => {
        const value = e.target.value
        setTheme(value);
    }

    const handleInput = (value) => {
        if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '0' || value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
            setInput((pre => {
                return pre + value;
            }))
        }

        if (value === 'Del') {
            setInput((pre) => {
                return pre.toString().slice(0, -1)
            })
        }

        if (value === 'Equal') {
            setInput(eval(input));
        }
        if (value === 'Reset') {
            setInput('');
        }

    }

    const handleKeyInput = (e) => {
        const value = e.key;
        const input = e.target.value;

        if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '0' || value === '+' || value === '-' || value === '*' || value === '/') {
            setInput((pre) => {
                return pre + value;
            })
        }

        if (value === 'Backspace') {
            setInput((pre) => {
                return pre.toString().slice(0, -1)
            })
        }

        if (value === 'Enter') {
            setInput(eval(input));
        }
    }



    return (
        <div className='calculator-component'
            style={{
                '--bg-body': themeClr['--bg-body'],
                '--clr': themeClr['--clr'],
                '--calc-body-bg': themeClr['--calc-body-bg'],
                '--btn-clr': themeClr['--btn-clr'],
                '--btn-border-clr': themeClr['--btn-border-clr'],
                '--btn-bg': themeClr['--btn-bg'],
                '--btn-bg-hover': themeClr['--btn-bg-hover'],
                '--slider-bg': themeClr['--slider-bg'],
                '--slider-thumb': themeClr['--slider-thumb'],
                '--input-clr': themeClr['--input-clr'],
                '--input-bg': themeClr['--input-bg'],
                '--reset-btn-clr': themeClr['--reset-btn-clr'],
                '--reset-btn-bg': themeClr['--reset-btn-bg'],
                '--reset-btn-border-clr': themeClr['--reset-btn-border-clr'],
                '--reset-btn-bg-hover': themeClr['--reset-btn-bg-hover'],
                '--equal-btn-clr': themeClr['--equal-btn-clr'],
                '--equal-btn-border-clr': themeClr['--equal-btn-border-clr'],
                '--equal-btn-bg': themeClr['--equal-btn-bg'],
                '--equal-btn-hover': themeClr['--equal-btn-hover']
            }}>

            <div className='calc-title' >
                <h1>calc</h1>
                <div className='calc-theme'>
                    <div>THEME</div>
                    <div className='calc-theme-toggle-btn'>
                        <div><div>1</div><div>2</div><div>3</div>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={2}
                            value={theme}
                            onChange={handleTheme}

                        />
                    </div>
                </div>
            </div>
            <div className='input-field'><input type="text" value={input} onChange={handleInput} onKeyDown={handleKeyInput} /></div>
            <div className='calc-input-btn'>
                <button onClick={() => { handleInput('7') }}>7</button>
                <button onClick={() => { handleInput('8') }} >8</button>
                <button onClick={() => { handleInput('9') }} >9</button>
                <button onClick={() => { handleInput('Del') }} className='dell-btn'>DEL</button>
                <button onClick={() => { handleInput('4') }} >4</button>
                <button onClick={() => { handleInput('5') }} >5</button>
                <button onClick={() => { handleInput('6') }} >6</button>
                <button onClick={() => { handleInput("+") }} >+</button>
                <button onClick={() => { handleInput('1') }} >1</button>
                <button onClick={() => { handleInput('2') }} >2</button>
                <button onClick={() => { handleInput('3') }} >3</button>
                <button onClick={() => { handleInput("-") }} >-</button>
                <button onClick={() => { handleInput(".") }} >.</button>
                <button onClick={() => { handleInput('0') }} >0</button>
                <button onClick={() => { handleInput("/") }} >/</button>
                <button onClick={() => { handleInput("*") }} >x</button>
                <button onClick={() => { handleInput("Reset") }} className='reset-btn'>RESET</button>
                <button onClick={() => { handleInput("Equal") }} className='equal-btn'>=</button>
            </div>
        </div >
    )
}

export default Calculator;
