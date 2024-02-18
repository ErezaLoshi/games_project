import React, { useEffect, useState } from 'react'
import { useFilmsContext } from '../../lib/context/FilmsContext/FilmsContext';
import { validate } from '../../lib/helpers/validateFilmForm';
import FormMessage from './FormMessage';

export interface FormDataType{
  title: string;
  description: string;
  director: string;
  duration: number;
  price: number;
  featured: boolean
}

export interface ErrorFormDataType{
  title?: string;
  description?: string;
  director?: string;
  duration?: string;
  price?: string;
}

const FilmForm = () => {
  const {selectedFilm} = useFilmsContext()
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    description: "",
    director: "",
    duration: 0,
    price: 0,
    featured: false,
  })

  useEffect(() => {
    setFormData({
      title: selectedFilm?.title ?? '',
      description: selectedFilm?.description ?? '',
      director: selectedFilm?.director ?? '',
      duration: selectedFilm?.duration ?? 0,
      price: selectedFilm?.price ?? 0,
      featured: selectedFilm?.featured ?? false,
    })
  }, [selectedFilm])

  const [errorData, setErrorData] = useState<ErrorFormDataType>({})

  const {addNewFilm, updateFilm} = useFilmsContext()

  const handleStringInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: Number(value)
    }))
  }

  const handleBooleanInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, checked} = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: checked
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formData);
    
    if(Object.keys(errors).length === 0){
      //implement logic of add
      //reset errors state
      setErrorData(errors)
      if(selectedFilm){
        console.log({formData});
        
        updateFilm(selectedFilm?._id, formData)
      }else{
        addNewFilm(formData)
      }
    }else {
      setErrorData(errors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='ui form mb-6'>
        <div className='field'>
          <label>Film Title</label>
          <input onChange={handleStringInput} value={formData.title} type='text' name="title" id="title" placeholder='film title' />
          <FormMessage error={errorData.title} />
        </div>
        <div className='field'>
          <label>Film Description</label>
          <input onChange={handleStringInput} value={formData.description} type='text' name="description" id="description" placeholder='film description' />
          <FormMessage error={errorData.description} />
        </div>
        <div className='field'>
          <label>Film Director</label>
          <input onChange={handleStringInput} value={formData.director} type='text' name="director" id="director" placeholder='film description' />
          <FormMessage error={errorData.director} />
        </div>
        <div className='field'>
          <label>Film Duration</label>
          <input onChange={handleNumberInput} value={formData.duration} type='number' name="duration" id="duration" placeholder='film description' />
          <FormMessage  error={errorData.duration} />
        </div>
        <div className='field'>
          <label>Film Price</label>
          <input onChange={handleNumberInput} value={formData.price} type='number' name="price" id="price" placeholder='film price' />
          <FormMessage error={errorData.price} />
        </div>
        <div className='field'>
          <label>Film Featured</label>
          <input onChange={handleBooleanInput} type='checkbox' checked={formData.featured} name="featured" id="featured" placeholder='film price' />
        </div>

        <button className='ui button' type='submit'>
          {selectedFilm ? 'Update' : 'Save'}
        </button>
    </form>
  )
}

export default FilmForm