import React, { useEffect, useState } from 'react'
import { createGame, editGame } from '../../api/Games/games.client';
import { AddGameRequest, GameRespnseType } from '../../api/Games/games.types';
import { useGamesContext } from '../../lib/context/GamesContext/GamesContext';
import FormMessage from './FormMessage';

export interface FormDataType{
  title: string;
  description:string;
  developer: string;
  date: string;
  price: number;
  featured: boolean
  img: string;
  genre1: string;
  genre2: string;
  genre3: string;
  genre4: string;
  
}

export interface ErrorFormDataType{
  title?: string;
  description?: string;
  developer?: string;
  price?: string;
  img?: string;
  date?: string;
  featured?: string
  genre1?: string;
  genre2?: string;
  genre3?: string;
  genre4?: string;
}

const GameForm = () => {
  const {selectedGame} = useGamesContext()
  const [formData, setFormData] = useState<AddGameRequest>({
    title: "",
    description: "",
    developer: "",
    img: "",
    price: 0,
    featured: false,
    date: "",
    genre1: "",
    genre2: "",
    genre3: "",
    genre4: "",
  })

  const [errors, setErrors] = useState<{[key:string]: string}>();

  useEffect(() => {
    setFormData({
      title: selectedGame?.title ?? '',
      description: selectedGame?.description ?? '',
      developer: selectedGame?.developer ?? '',
      img: selectedGame?.img ?? '',
      price: selectedGame?.price ?? 0,
      featured: selectedGame?.featured ?? false,
      date: selectedGame?.date ?? '',
      genre1: selectedGame?.genre1 ?? '',
      genre2: selectedGame?.genre2 ?? '',
      genre3: selectedGame?.genre3 ?? '',
      genre4: selectedGame?.genre4 ?? '',

    })
  }, [selectedGame])

  const {addNewGame, updateGame} = useGamesContext()

  const handleStringInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: AddGameRequest) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setFormData((previousState: AddGameRequest) => ({
      ...previousState,
      [name]: Number(value)
    }))
  }

  const handleBooleanInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, checked} = event.currentTarget;
    setFormData((previousState: AddGameRequest) => ({
      ...previousState,
      [name]: checked
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if(selectedGame){
        editGame(selectedGame?._id, formData).then(
          res => {
            setErrors({})
            setFormData({
              title: "",
              description: "",
              developer: "",
              img: "",
              price: 0,
              featured: false,
              date: "",
              genre1: "",
              genre2: "",
              genre3: "",
              genre4: "",
            })
            updateGame(selectedGame?._id, res.data.game)
          }
        ).catch(err => setErrors(err?.response.data.errors))
      }else{
        createGame(formData).then((response) =>{
          setErrors({})
          setFormData({
            title: "",
            description: "",
            developer: "",
            img: "",
            price: 0,
            featured: false,
            date: "",
            genre1: "",
            genre2: "",
            genre3: "",
            genre4: "",
          })
          addNewGame(response?.data?.game)
        }).catch(err => {
          console.log({err})
          setErrors(err?.response.data.errors)
        })
      }
  }

  return (
    <form onSubmit={handleSubmit} className='ui form mb-6'>
        <div className='field'>
          <label>Game Title</label>
          <input onChange={handleStringInput} value={formData.title} type='text' name="title" id="title" placeholder='Game title' />
          <FormMessage error={errors?.title} />
        </div>
        <div className='field'>
          <label>Game Description</label>
          <input onChange={handleStringInput} value={formData.description} type='text' name="description" id="description" placeholder='Game description' />
          <FormMessage error={errors?.description} />
        </div>
        <div className='field'>
          <label>Game Developer</label>
          <input onChange={handleStringInput} value={formData.developer} type='text' name="developer" id="developer" placeholder='Game developer' />
          <FormMessage error={errors?.developer} />
        </div>
        <div className='field'>
          <label>Game Image</label>
          <input onChange={handleStringInput} value={formData.img} type='text' name="img" id="img" placeholder='Game image url' />
          <FormMessage  error={errors?.img} />
        </div>
        <div className='field'>
          <label>Game Price</label>
          <input onChange={handleNumberInput} value={formData.price} type='number' name="price" id="price" placeholder='Game price' />
          <FormMessage error={errors?.price} />
        </div>
        <div className='field'>
          <label>Game Featured</label>
          <input onChange={handleBooleanInput} type='checkbox' checked={formData.featured} name="featured" id="featured" placeholder='' />
        </div>
        <div className='field'>
          <label>Game Date</label>
          <input onChange={handleStringInput} value={formData.date} type='text' name="date" id="date" placeholder='Game date' />
          <FormMessage error={errors?.date} />
        </div>
        <div className='ui grid col 2' style={{paddingTop:"1.5rem"}}>

        <div className='field'>
          <label>Game Genre1</label>
          <input onChange={handleStringInput} value={formData.genre1} type='text' name="genre1" id="genre1" placeholder='Game genre1' />
          <FormMessage error={errors?.genre1} />
        </div>
        <div className='field'>
          <label>Game Genre2</label>
          <input onChange={handleStringInput} value={formData.genre2} type='text' name="genre2" id="genre2" placeholder='Game genre2' />
          <FormMessage error={errors?.genre2} />
        </div>
        <div className='field'>
          <label>Game Genre3</label>
          <input onChange={handleStringInput} value={formData.genre3} type='text' name="genre3" id="genre3" placeholder='Game genre3' />
          <FormMessage error={errors?.genre3} />
        </div>
        <div className='field'>
          <label>Game Genre4</label>
          <input onChange={handleStringInput} value={formData.genre4} type='text' name="genre4" id="genre4" placeholder='Game genre4' />
          <FormMessage error={errors?.genre4} />
        </div>
        </div>

        <button className='ui button' type='submit' style={{marginTop:"1rem"}}>
          {selectedGame ? 'Update' : 'Save'}
        </button>
    </form>
  )
}

export default GameForm