import s from "./styles.module.scss";
import {useForm, useWatch} from "react-hook-form";

export function FilesForm() {

  const {register, control, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const file = useWatch({control, name: 'file'})
  const files = useWatch({control, name: 'files'})

  //console.log('file', file[0].name)
  //console.log('files', typeof files)

  return <>
    <div>

      <h1 className={s.filesHeader}>Files Form</h1>

      <form className={s.filesForm} onSubmit={handleSubmit(onSubmit)}>

        <input className={s.filesInput}
               type="file"
               accept=".txt, .doc, .xml"
               {...register("file", {})}
        />

        <input className={s.filesInput}
               type="file"
               accept=".jpg, .png, .pdf"
               multiple
               {...register("files", {})}
        />

        <button className={s.filesButton} type={'submit'}>
          Send
        </button>
      </form>
    </div>
  </>
}