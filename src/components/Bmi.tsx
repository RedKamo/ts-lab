import { ChangeEvent, FormEvent, useState } from "react";

const initialState = {
  weigth: '',
  height: ''
}

export const Bmi = () => {

  /*  BMC = Weight(Kg) / height(m)2
      Example:
      Height = 165cm (1.65m)
      Weight = 68Kg
      BMC = 68 % 1.65 (2.7225)
          = 24.98
      let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

   */

  const[values, setValues]= useState(initialState)
  const[total, setTotal] = useState('')
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(0)



/*   const bmi = (weight: number, height: number)=> {
    console.log(weight / height);
  }

  bmi(22,33) */


  const calculateBmi = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setTotal(bmi(value1, value2))
  }
  
  const bmi = (value1: number, value2:number)=> {
    return (value1 / ((value2 * value2)/ 10000)).toFixed(2)
  }

  const handleHeight = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue2(parseFloat(e.target.value))
  }
  
  const handleWeight = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue1(parseFloat(e.target.value))
  }


  return (
    <main className="border-2 border-slate-600 p-4 border-solid max-w-md m-auto">
      <form onSubmit={calculateBmi}  className="flex flex-col items-center py-2 text-slate-500" >
      <h1 className=" text-3xl text-center text-slate-400 font-bold pb-4">BMC Calculator</h1>
      <input
      className="my-2 p-2 w-full bg-slate-700 border-2  border-slate-500 "
      type="number"
      name="weigth"
      value={value1}
      placeholder="Your Weight in Kg"
      onChange={handleWeight}/>
      
      <input
      className="my-2 p-2 w-full bg-slate-700 border-2  border-slate-500 "
      type="number"
      name="height"
      value={value2}
      placeholder="Your Height in cm"
      onChange={handleHeight}/>
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">Calculte</button>
      </form>
      <h1>TOTAL IS: {total}</h1>
    </main>
  )
}
