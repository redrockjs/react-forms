import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form';
import s from './styles.module.scss'
import {forwardRef} from "react";
import {TextField} from "@mui/material";

export function DynamicForm() {

  const {
    register,
    control,
    reset,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm({
    defaultValues: {
      name: "Alex",
      surname: "Smith",
      email: "alex@smith.com",
      age: 18,
      gender: "",
      weight: 70,
      growth: 170
    }
  })

  const {fields:hobbyFields, append: hobbyAppend, remove:hobbyRemove} = useFieldArray({
    control,
    name: "hobbys"
  });

  const {fields: skillFields, append: skillAppend, remove: skillRemove} = useFieldArray({
    control,
    name: "skills"
  });

  const onSubmit = (data) => {
    console.log(data)
    //reset();
  }

  // you can use React.forwardRef to pass the ref too
  const Select = forwardRef(({onChange, onBlur, name, label}, ref) => (
    <div>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
      </select>
      <label>{label}</label>
    </div>
  ));

  const ddd = useWatch({control, name: 'growth'})
  console.log(ddd)

  return (
    <div>
      <h1 className={s.mainHeader}>Dynamic Form</h1>

      <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>

        <input className={s.mainInput} type="text" placeholder={'Name'}
               {...register("name", {})}
        />
        {errors?.name &&
          (<span className={s.mainInputError}> {errors?.name.message} </span>)}

        <div>
          <input className={s.mainInput} type="text" placeholder={'Surname'}
                 {...register("surname", {})}
          />
          {errors?.surname &&
            (<span className={s.mainInputError}> {errors?.surname.message} </span>)}
        </div>

        <div>
          <input className={s.mainInput} type="text" placeholder={'Email'}
                 {...register("email", {
                   required: "Email is required",
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "invalid email address"
                   }
                 })}
          />
          {errors?.email &&
            (<span className={s.mainInputError}> {errors?.email.message} </span>)}
        </div>

        <div>
          <input className={s.mainInput} type="number"
                 {...register("age", {
                   min: 18,
                   max: 99
                 })} />
        </div>

        <div>
          <select className={s.mainSelect} {...register("gender")} defaultValue={"male"}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors?.gender &&
            (<span className={s.mainInputError}> {errors?.gender.message} </span>)}
        </div>

        <div>
          <Select className={s.mainSelect} label={'Weight'} {...register("weight")}/>
        </div>

        <Controller
          name="growth"
          control={control}
          render={({field}) => {
            return <TextField
              type={"text"}
              id="outlined-basic"
              label="Growth"
              variant="outlined"
              {...field}
            />
          }}
        />

        <ul>
          {
            hobbyFields.map((item, idx) => (
                <li key={item.id}>
                  <div className="w-full">
                    <input type="text" {...register(`hobbys.${idx}.hobby`)}/>

                    <button type={'button'} onClick={() => hobbyRemove(idx)}>X</button>
                  </div>
                </li>
              )
            )
          }
        </ul>

        <button className={s.mainButton}
                type={'button'}
                onClick={() => hobbyAppend({hobby: "hobby"})}
        >
          Add hobby
        </button>

        <ul>
          {
            skillFields.map((item, idx) => (
                <li key={item.id}>
                  <div className="w-full">
                    <Controller
                      control={control}
                      name={`skills.${idx}.skill`}
                      render={({field}) => <input {...field}/>}
                    />

                    <button type={'button'} onClick={() => skillRemove(idx)}>X</button>
                  </div>
                </li>
              )
            )
          }
        </ul>

        <button className={s.mainButton}
                type={'button'}
                onClick={() => skillAppend({skill: "skill"})}
        >
          Add skill
        </button>

        <button className={s.mainButton} type={'submit'}>
          Send
        </button>
      </form>
    </div>
  )
}