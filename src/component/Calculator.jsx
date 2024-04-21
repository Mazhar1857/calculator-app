import React, { useEffect, useState } from 'react';
import './calculator.css';
import { themeData } from './themeData';

const Calculator = ({ theme, setTheme, themeClr }) => {

    const handleTheme = (e) => {
        const value = e.target.value
        setTheme(value);

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
            <div className='input-field'><input type="text" /></div>
            <div className='calc-input-btn'>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='dell-btn'>DEL</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>-</button>
                <button>.</button>
                <button>0</button>
                <button>/</button>
                <button>x</button>
                <button className='reset-btn'>RESET</button>
                <button className='equal-btn'>=</button>
            </div>
        </div >
    )
}

export default Calculator;
