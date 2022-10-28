import React from 'react'


type Operation = 'multiply'| 'add' | 'divide';
type Result = string | number;


export const Exercise = () => {
    const multi = (a:number, b:number, printText:string )=> {
        console.log(printText, a, b);
      }
    
      const a:number = Number(process.argv[2])
      const b:number = Number(process.argv[3])
      multi(a,b, `Multiplied ${a} and ${b}, the result is:`)
    
      //refactor to swith function
    
      const calculator = (a:number, b:number, op: Operation): Result =>{
        switch (op) {
          case 'add':
            return a + b
          case 'divide':
            return a / b
          case 'multiply':
            return a * b
          default:
            throw new Error('Invalid operation, pls use add, divide or multiply')
        }
      }
    
      try {
        console.log(calculator(2,2, 'add'));
      } catch (error: unknown){
        let errorMessage = 'Something went wrong'
        error instanceof Error ? errorMessage += 'Error' + error.message  : ''
      console.log(errorMessage)
    }
    

  return (
    <div>Exercise</div>
  )
}
