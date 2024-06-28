"use client";
import addTransaction from "@/app/actions/addTransaction";

function AddTransactions() {

    const clientAction = async (formData) => {
        console.log(formData.get("text"), formData.get("amount"));
        const {data, error} = await addTransaction(formData);

        if(error) {
            alert(error)
        } else {
            alert("Transaction Added");
        }
    }


  return (
    <>
    <h3>Add Transaction</h3>
    <form action={clientAction}>
    <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter amount...'
            step='0.01'
          />
        </div>
        <button className='btn'>Add transaction</button>

    </form>  
    </>
  )
}

export default AddTransactions
