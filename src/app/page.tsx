'use client'

import { ApiGet } from '@/api/apiGet'
import { dataProps } from '@/types/type'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [rows, setRows] = useState<dataProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiGet()

        const mapData = data.map((data: dataProps) => ({
          id: data.id,
          name: data.name,
          alternate_names: data.alternate_names,
          gender: data.gender,
          house: data.house,
          dateOfBirth: data.dateOfBirth,
          ancestry: data.ancestry,
          patronus: data.patronus,
          actor: data.actor,
          image: data.image,
        }))

        setRows(mapData)
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <div className="h-56 grid grid-cols-4 gap-4">
      {rows.map((item) => (
        <div
          key={item.id}
          className={`bg-gradient-to-br ${
            item.house === 'Gryffindor'
              ? 'from-gryffindor-50 to-gryffindor-100'
              : item.house === 'Slytherin'
              ? 'from-slytherin-50 to-slytherin-100'
              : item.house === 'Ravenclaw'
              ? 'from-ravenclaw-50 to-ravenclaw-100'
              : item.house === 'Hufflepuff'
              ? 'from-hufflepuff-50 to-hufflepuff-100'
              : ''
          } m-5 rounded-xl text-center p-4 justify-center items-center`}
        >
          <Image
            alt="harry potter casting"
            src={item.image}
            width={150}
            height={150}
            className={`mx-auto mb-3 shadow-xl ${
              item.house === 'Gryffindor'
                ? 'shadow-gryffindor-150'
                : item.house === 'Slytherin'
                ? 'shadow-slytherin-150'
                : item.house === 'Ravenclaw'
                ? 'shadow-ravenclaw-150'
                : item.house === 'Hufflepuff'
                ? 'shadow-hufflepuff-150'
                : ''
            } rounded-md`}
          />

          <div
            className={`${
              item.house === 'Gryffindor'
                ? 'bg-gryffindor-150'
                : item.house === 'Slytherin'
                ? 'bg-slytherin-150'
                : item.house === 'Ravenclaw'
                ? 'bg-ravenclaw-150'
                : item.house === 'Hufflepuff'
                ? 'bg-hufflepuff-150'
                : ''
            } rounded-lg`}
          >
            <h1 className="text text-xl">{item.name}</h1>
            <p>Alternate Names: {item.alternate_names}</p>
            <p>House: {item.house}</p>
            <p>Patronus: {item.patronus}</p>
            <p>Age: {item.dateOfBirth}</p>
            <p>Gender: {item.gender}</p>
            <p>Actor: {item.actor}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
