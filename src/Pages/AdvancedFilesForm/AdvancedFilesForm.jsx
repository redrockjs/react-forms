import s from "./styles.module.scss";
import {useForm, useWatch} from "react-hook-form";
import {useState} from "react";
import {getValue} from "@testing-library/user-event/dist/utils";

export function AdvancedFilesForm() {

  const {register, control, handleSubmit, setValue, getValues} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const files = useWatch({control, name: 'files'})

  const AppInputFiles = () => {

    const [fileList, setFilelist] = useState([])

    const getFileArray = (fileListData) => Array.from(fileListData)

    const handleAddFile = (e) => {
      const arrFiles = getFileArray(e.target.files)

      const result = fileList.concat(arrFiles).reduce((sum, current) => {
        if (!sum.find(file => file.name === current.name)) {
          sum.push(current);
        }
        return sum;
      }, []);

      setFilelist(result)
    }

    const handleRemoveFile = (id) => {
      const newList = fileList.filter((_, idx) => idx !== id)
      setFilelist(newList)
    }

    const handleClickMe = () => {
      console.log('list', fileList)
    }

    return (
      <div>

        <button className={s.filesButton} onClick={handleClickMe}> Click me</button>

        <input type="file" multiple onChange={handleAddFile}/>

        <ul>
          {fileList &&
            fileList.map((file, idx) => {
              return <li key={idx}>
                <span className="text-red-500 pr-1 cursor-pointer" onClick={() => handleRemoveFile(idx)}>X</span>
                <span>{file.name}</span>
              </li>
            })
          }
        </ul>


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