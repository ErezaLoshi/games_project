import React from 'react'
import { useParams } from 'react-router-dom';

interface Props{
    error?: string;
}

const FormMessage = ({error}: Props) => {

  return (
    <div>
        {
            error ? <span style={{
                color: "red"
            }}>
                {error}
            </span>
            : <></>
        }
    </div>
  )
}

export default FormMessage