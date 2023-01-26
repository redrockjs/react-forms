import s from "./styles.module.scss";
import {useForm} from "react-hook-form";
import {forwardRef, useEffect, useState} from "react";

export function AdvancedFilesForm() {

  const {handleSubmit, setValue} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const AppInputFiles = forwardRef((props, ref) => {

      const [fileList, setFilelist] = useState([])

      useEffect(() => {
        setValue('files', Object.assign({},fileList))
      }, [fileList])

      const handleAddFile = (e) => {
        const arrFiles = Array.from(e.target.files)
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

      return (
        <>
          <div className="flex flex-row">
            <div className="min-w-[120px]">
              <label className={s.filesButton}>
                Add file
                <input className="hidden" type="file" multiple onChange={handleAddFile} ref={ref}/>
              </label>
            </div>
            <div>
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
          </div>
        </>
      )
    }
  )

  return <>
    <div>

      <h1 className={s.filesHeader}>Advanced Files Form</h1>

      <form className={s.filesForm} onSubmit={handleSubmit(onSubmit)}>

        <AppInputFiles name={'files'}/>

        <button className={s.filesButton} type={'submit'}>
          Send
        </button>
      </form>
    </div>
  </>
}