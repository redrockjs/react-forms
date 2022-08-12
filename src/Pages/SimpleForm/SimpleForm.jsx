import {useForm} from "react-hook-form";

export default function SimpleForm() {

  const {register, reset, handleSubmit, formState: {errors}} = useForm( {mode:"onChange"})

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <h1 className="font-bold text-3xl pb-2">Simple Form</h1>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

        <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
               type="text"
               placeholder="First name is required"
               {...register("firstName", {
                 required: "First name is required",
               })}
        />
        {errors?.firstName &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.firstName.message} </span>)}

        <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
               type="text"
               placeholder="Last name"
               {...register("lastName", {
                 required: "Last name is required",
               })}
        />
        {errors?.lastName &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.lastName.message} </span>)}

        <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
               type="email"
               placeholder="Email"
               {...register("email", {
                 required: "Email is required",
                 pattern:{
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   message: "invalid email address"
                 }
               })}
        />
        {errors?.email &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.email.message} </span>)}

        <input className="border border-gray-400 py-1 px-5 m-1 w-[400px]"
               type="text"
               placeholder="Website"
               {...register("website", {
                 required: false,
               })}
        />

        <textarea className="border border-gray-400 py-1 px-5 m-1  w-[400px]"
                  placeholder="Your request"
                  {...register("request", {
                    required: true,
                  })}
        />
        {errors?.request &&
          (<span className="ml-2 text-xs text-red-500"> {errors?.request.message} </span>)}

        <button className="border border-gray-600 py-1 px-5 m-1 w-[200px]"
                onClick={handleSubmit(onSubmit)}
        >
          Send
        </button>
      </form>

    </div>
  )
}