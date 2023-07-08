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
    <div className="grid h-56 grid-cols-4 gap-4">
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
              : item.house === ''
              ? 'from-staffhogwarts-50 to-staffhogwarts-100'
              : item.house === ''
          } m-5 items-center justify-center rounded-xl p-4 text-center hover:shadow-lg hover:shadow-slate-300`}
        >
          <Image
            alt="harry potter casting"
            src={item.image ? item.image : '/img/hogwarts.png'}
            width={150}
            height={150}
            className={`mx-auto mb-5 shadow-xl ${
              item.house === 'Gryffindor'
                ? 'hover:shadow-gryffindor-150'
                : item.house === 'Slytherin'
                ? 'hover:shadow-slytherin-150'
                : item.house === 'Ravenclaw'
                ? 'hover:shadow-ravenclaw-150'
                : item.house === 'Hufflepuff'
                ? 'hover:shadow-hufflepuff-150'
                : item.house === ''
                ? 'hover:shadow-staffhogwarts-150'
                : ''
            } h-[200px] rounded-md transition-colors`}
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
                : item.house === ''
                ? 'bg-staffhogwarts-150'
                : item.house === ''
            } h-[200px] rounded-lg `}
          >
            <h1 className="text text-xl">{item.name}</h1>
            {item.alternate_names.length > 0 && (
              <p>Alternate Names: {item.alternate_names}</p>
            )}
            {item.house && <p>House: {item.house}</p>}
            {item.patronus && <p>Patronus: {item.patronus}</p>}
            {item.dateOfBirth && <p>Age: {item.dateOfBirth}</p>}
            {item.gender && <p>Gender: {item.gender}</p>}
            {item.actor && <p>Actor: {item.actor}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
