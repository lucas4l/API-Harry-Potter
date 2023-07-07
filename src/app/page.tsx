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
          colorClass: getHouseColorClass(data.house),
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

  const getHouseColorClass = (house: string) => {
    switch (house) {
      case 'Gryffindor':
        return 'gryffindor'
      case 'Slytherin':
        return 'slytherin'
      case 'Ravenclaw':
        return 'ravenclaw'
      case 'Hufflepuff':
        return 'hufflepuff'
      default:
        return 'gryffindor'
    }
  }

  const getGradientClass = (colorClass: string) => {
    return `from-${colorClass}-50 to-${colorClass}-100`
  }

  return (
    <div className="h-56 grid grid-cols-4 gap-4">
      {rows.map((item) => (
        <div
          key={item.id}
          className={`bg-gradient-to-br ${getGradientClass(
            item.colorClass,
          )} m-5 rounded-xl text-center p-4 justify-center items-center`}
        >
          <Image
            alt="harry potter casting"
            src={item.image}
            width={150}
            height={150}
            className={`mx-auto mb-3 shadow-xl shadow-${item.colorClass}-150/50 rounded-md`}
          />

          <div className={`bg-${item.colorClass}-150 rounded-lg`}>
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
