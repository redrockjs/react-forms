import {useEffect, useRef, useState} from "react";
import {useForm, Controller} from "react-hook-form"
import {cardNumberFormatter} from "../../utils/formatters";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import AppInput from "../../Components/AppInput/AppInput";

const schema = z.object({
    cardNumber: z.string().length(19 ,{ message: "Must be exactly 5 characters long" }),
    cardHolder: z.string(),
    cardExpire: z.string().length(5),
    cardCvc: z.string(),
});

export function CreditCardForm() {

    const {
        reset,
        handleSubmit,
        control,
        getValues,
        setValue,
        formState: {errors}
    } = useForm({mode: "onChange", resolver: zodResolver(schema)})

    const [cardData, setCardData] = useState({
        cardNumber: "",
        cardHolder: "",
        cardExpire: "",
        cardCvc: null,
    });

    function onSubmit(data) {
        console.log(data)
        reset()
    }


    const cardNumberRef = useRef(null)
    const cardHolderRef = useRef(null)

    useEffect(() => {
        if (cardNumberRef?.current) {
            cardNumberRef.current.focus()
        }
    }, [cardNumberRef])

    return (
        <div>
            <h1 className="font-bold text-3xl pb-2">Credit card</h1>
            <div className="flex flex-col">

                <Controller
                    // name="testField"
                    name="cardNumber"
                    control={control}
                    render={({field}) => (
                        <AppInput className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
                                  type="text"
                                  placeholder="0000-0000-0000-0000"
                                  ref={cardNumberRef}
                                  formatter={cardNumberFormatter}
                                  {...field}
                        />
                    )}
                />

                <Controller
                    name="cardHolder"
                    control={control}
                    render={({field}) => (
                        <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
                               type="text"
                               placeholder="Card Holder"
                               ref={cardHolderRef}
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