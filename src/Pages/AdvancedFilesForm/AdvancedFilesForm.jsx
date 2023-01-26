import s from "./styles.module.scss";
import {useForm, useWatch} from "react-hook-form";
import {useState} from "react";
import {getValue} from "@testing-library/user-event/dist/utils";

export function AdvancedFilesForm() {

  const {register, control, handleSubmit, setValue, getValues} = useForm()

  const [fileList, setFilesList] = useState('')

  const onSubmit = (data) => {
    //console.log(data)
  }

  const files = useWatch({control, name: 'files'})

  files && console.log('files', JSON.stringify(files))


  const AppInputFiles = () => {

    const [fileList,setFilelist] =useState()

    const getFileArray = (fileList) => Array.from(fileList)

    const dt = new DataTransfer();

    const handleAddFile = (e) => {

      const arrFiles = getFileArray(e.target.files)

      arrFiles.forEach((file) => dt.items.add(file))

      console.log('list', dt.files)
    }

    const handleClickMe = () => {
      console.log('list', dt.files)
    }

    return (
      <div>
        <input type="file" multiple onChange={handleAddFile}/>

        <ul>
        { dt.files &&
            Array.from(dt.files).map(file=>{
            return <li>file.name</li>
          })
        }
        </ul>
        <button className={s.filesButton} onClick={handleClickMe}> Click me</button>

      </div>
    )
  }

  return <>
    <div>

      <h1 className={s.filesHeader}>Advanced Files Form</h1>

      <form className={s.filesForm} onSubmit={handleSubmit(onSubmit)}>

        <AppInputFiles/>

        <button className={s.filesButton} type={'submit'}>
          Send
        </button>
      </form>
    </div>
  </>
}