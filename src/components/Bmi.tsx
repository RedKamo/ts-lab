import { ChangeEvent, FormEvent, useState } from "react";


export const Bmi = () => {

  /*  BMC = Weight(Kg) / height(m)2
      Example:
      Height = 165cm (1.65m)
      Weight = 68Kg
      BMC = 68 % 1.65 (2.7225)
          = 24.98
      let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

   */

  const[total, setTotal] = useState('')
  const [resultText, setResultText] = useState('')
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(0)

/*   const bmi = (weight: number, height: number)=> {
    console.log(weight / height);
  }

  bmi(22,33) */

  const getBmi = (value1 / ((value2 * value2)/ 10000)).toFixed(2)

  /*  const handleChange = (evt:ChangeEvent<HTMLInputElement>)=> {
    setValues({
      ...values, [evt.target.name]: evt.target.value
    })
  } */



  const handleWeight = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue1(parseInt(e.target.value))
  }


  const handleHeight = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue2(parseInt(e.target.value))
  }

  const calculateBmi = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setTotal(getBmi)
    finalresult(parseInt(getBmi))
  }

  

  const finalresult = (getBmi:number)=> {

    if(getBmi <= 18){
      setResultText('Underweight 😖')
      console.log('you are underweight')
    } if(getBmi > 18 && getBmi < 24.9){
      setResultText('Normal weight 😐')
      console.log('you have Normal weight')
    }if(getBmi > 25 && getBmi < 29.9){
      setResultText('Overweight 🤔')
    }if(getBmi > 30){
      setResultText('Obesity 🫣')
    }
}

  return (
    <main className="border-2 border-slate-600 p-4 border-solid max-w-md m-auto">
      <form onSubmit={calculateBmi}  className="flex flex-col items-center py-2 text-slate-500" >
        <h1 className=" text-3xl text-center text-slate-400 font-bold pb-4">BMC Calculator</h1>
        <label className="font-bold text-slate-300 pt-4 w-full" htmlFor="">Your Weight in Kg</label>
        <input
        className="my-2 p-2 w-full bg-slate-700 border-2  border-slate-500 "
        type="text"
        name="weight"
        value={value1}
        onChange={handleWeight}
        />
      <label className="font-bold text-slate-300 pt-4 w-full" htmlFor="">Your Height in cm</label>
      <input 
        className="my-2 p-2 w-full bg-slate-700 border-2  border-slate-500 "
        type="text"
        name="height"
        value={value2}
        
        onChange={handleHeight}
        />
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">Calculte</button>
      </form>
      <h1 className="text-2xl text-center text-slate-500 font-bold pt-4">Your BMI is: {total}</h1>
      <p className="text-center text-slate-400 py-4">yout weight is: {resultText}</p>
    </main>
  )
}
