import {useForm, Controller} from "react-hook-form"
import {useState} from "react";
import {cardNumberFormatter} from "../../utils/formatters";

export default function CreditCardForm() {

  const {
    reset,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: {errors}
  } = useForm({mode: "onChange"})

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardHolder: "",
    cardExpire: "",
    cardCvc: "",
  });

  function onSubmit(data) {
    console.log(data)
    reset()
  }

  return (
    <div>
      <h1 className="font-bold text-3xl pb-2">Credit card</h1>
      <div className="flex flex-col">

        <Controller
          name="cardNumber"
          control={control}
          render={({field}) => (
            <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
                   type="text"
                   placeholder="0000-0000-0000-0000"
                   {...field}
            />
          )}
        />
        {errors?.cardNumber &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.cardNumber.message} </span>)}

        <Controller
          name="cardHolder"
          control={control}
          render={({field}) => (
            <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
                   type="text"
                   placeholder="Card Holder"
                   {...field}
            />
          )}
        />
        {errors?.cardHolder &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.cardHolder.message} </span>)}

        <Controller
          name="cardExpire"
          control={control}
          render={({field}) => (
            <input className="border border-gray-400 py-1 px-5 m-1 w-[100px]"
                   type="text"
                   placeholder="01/23"
                   {...field}
            />
          )}
        />
        {errors?.cardExpire &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.cardExpire.message} </span>)}

        <Controller
          name="cardCvc"
          control={control}
          render={({field}) => (
            <input className="border border-gray-400 py-1 px-5 m-1 w-[100px]"
                   type="text"
                   placeholder="***"
                   {...field}
            />
          )}
        />
        {errors?.cardCvc &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.cardCvc.message} </span>)}

        <button className="border border-gray-600 py-1 px-5 m-1 w-[200px]"
                onClick={handleSubmit(onSubmit)}
        >
          Send
        </button>

      </div>
    </div>
  )
}