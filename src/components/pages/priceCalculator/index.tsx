'use client'
import React, { useState } from 'react'
import { AutoComplete, InputNumber } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { DefaultOptionType } from 'antd/es/select'

import {
  Goods,
  Ports,
  FieldType,
  Countries,
  InputFields,
  EditableField,
  GoodsFieldValue,
  EditableFieldType,
} from './types'
import { fetchCountry, fetchGoods, fetchPorts } from '@/utils/networkRequest'

const initEditableField: EditableField = {
  diskon: null,
  harga: null,
}

const initInputField: InputFields = {
  port: { value: null, label: null },
  country: { value: null, label: null },
  goods: { value: null, label: null, description: null },
}

const getTotalPrice = (harga: number, diskon: number) => {
  if (!harga || !diskon) return 0
  return harga - (harga * diskon) / 100
}

const PriceCalculator = () => {
  const [inputField, setInputField] = useState(initInputField)
  const [editableField, setEditableField] = useState(initEditableField)

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountry,
  })

  const { data: ports } = useQuery({
    enabled: !!inputField.country.value,
    queryKey: ['ports', inputField.country.value],
    queryFn: async () => fetchPorts(inputField?.country?.value),
  })

  const { data: goods } = useQuery({
    enabled: !!inputField.port.value,
    queryKey: ['goods', inputField.port.value],
    queryFn: async () => fetchGoods(inputField?.port?.value),
  })

  const handleChangeAutocomplete = (
    data: string,
    option: DefaultOptionType | undefined,
    type: FieldType
  ) => {
    if (type !== 'goods') {
      setInputField((prev) => ({
        ...prev,
        [type]: { value: data, label: option?.label || '' },
      }))
      return
    }

    setInputField((prev) => ({
      ...prev,
      goods: {
        value: data,
        label: option?.label || '',
        description: option?.description || null,
      } as GoodsFieldValue,
    }))

    setEditableField({
      diskon: option?.diskon || null,
      harga: option?.harga || null,
    })
  }

  const handleChangeEditableField = (value: number | null, type: EditableFieldType) => {
    setEditableField((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  return (
    <section className="bg-white max-w-2xl mt-16 mb-0 mr-auto ml-auto pt-4 pb-8 pr-8 pl-8 border-[0.5px] border-gray-200 rounded-xl shadow-soft">
      <h2 className="text-xl font-semibold text-gray-800 tracking-tight mb-4 text-center">
        Kalkulasi Harga Barang
      </h2>
      <div className="w-full mt-12 flex flex-col gap-3.5">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Negara</label>
          <AutoComplete
            className="w-full !mt-1"
            placeholder="Pilih Negara"
            value={inputField.country.label || ''}
            options={
              countries?.map((country: Countries) => ({
                label: country.nama_negara,
                value: String(country.id_negara),
              })) || []
            }
            onChange={(value, option) =>
              handleChangeAutocomplete(value, option, 'country')
            }
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Pelabuhan</label>
          <AutoComplete
            className="w-full !mt-1"
            placeholder="Pilih Pelabuhan"
            value={inputField.port.label || ''}
            disabled={!inputField.country.value}
            options={
              ports?.map((port: Ports) => ({
                label: port.nama_pelabuhan,
                value: String(port.id_pelabuhan),
              })) || []
            }
            onChange={(value, option) => handleChangeAutocomplete(value, option, 'port')}
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Barang</label>
          <AutoComplete
            className="w-full !mt-1"
            placeholder="Pilih Barang"
            disabled={!inputField.port.value}
            options={
              goods?.map((good: Goods) => ({
                harga: good.harga,
                diskon: good.diskon,
                label: good.nama_barang,
                value: String(good.id_barang),
                description: good.description,
              })) || []
            }
            onChange={(value, option) => handleChangeAutocomplete(value, option, 'goods')}
          />
        </div>

        {inputField.goods.description && (
          <div className="w-full rounded-md border border-blue-500 bg-blue-50 p-4 text-sm text-gray-500">
            {inputField.goods.description}
          </div>
        )}

        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full">
            <label className="block text-sm font-medium text-gray-700">Harga</label>
            <InputNumber<number>
              min={0}
              className="!w-full !mt-1"
              value={editableField.harga || 0}
              onChange={(value) => handleChangeEditableField(value, 'harga')}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="block text-sm font-medium text-gray-700">Diskon</label>
            <InputNumber<number>
              min={0}
              max={100}
              addonAfter="%"
              className="w-full !mt-1"
              value={editableField.diskon || 0}
              onChange={(value) => handleChangeEditableField(value, 'diskon')}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Total</label>
          <InputNumber<number>
            min={0}
            disabled
            defaultValue={0}
            className="!w-full !mt-1"
            value={getTotalPrice(editableField.harga || 0, editableField.diskon || 0)}
          />
        </div>
      </div>
    </section>
  )
}

export default PriceCalculator
