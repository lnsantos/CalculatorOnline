import React, {Component } from 'react'
import './Calculetor.css'
import Button from '../components/Button/Button'
import Display from '../components/display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculetor extends Component{
    state = {...initialState}

    constructor(props){
        super();
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    /* return to value the state initial from object initialState
    it located at the top of class */
    clearMemory(){
        this.setState({...initialState})
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current:1, clearDisplay:true})
        }else{
            const finish = operation === '='
            const currentOpenration = this.state.operation
            const values = [...this.state.values]
           //  values[0] = eval(`${values[0]} `)

            switch(currentOpenration){
                case '+':
                    var valueFinish = values[0] + values[1];
                    this.setState({
                        displayValue: valueFinish,
                        clearDisplay: true,
                        values: [ 0, valueFinish],
                        current: 0,
                        operation: null
                    });
                    console.log('Soma tudo')
                    break;
                case '-':
                    console.log('Subitrai tudo')
                    break;
                case '*':
                    console.log('Multiplica tudo')
                    break;
                case '/':
                    console.log('Divide tudo')
                    break;
            }
            this.setState({operation, current:0, clearDisplay:true})
        }
        console.log(operation)
    }
    addDigit(n){
        /* verifying if is exist a point at the state from the display*/
        if(n === '.' && this.state.displayValue.includes('.')){
            return 
        }
        // verifying if need clear the display. 'this.state.displayValue === '0' does not allow zero the left
        const clearDisplay = this.state.displayValue === '0' ||
            this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        // changing the value from display
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay:false })

        // checked if seleted value is unlike from a point
        if(n !== '.'){
            // Check the index from array, if number is zero or one
            const i = this.state.current
            // Converts value to float
            const newValue = parseFloat(displayValue)
            // Cloning array from state
            const values = [...this.state.values]
            values[i] = newValue
           this.setState({ values })
        }
        console.log(displayValue)
    }


    render(){
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit} operation/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}