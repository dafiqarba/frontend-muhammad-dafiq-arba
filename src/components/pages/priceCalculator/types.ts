export type FieldType = 'country' | 'port' | 'goods'
export type EditableFieldType = 'diskon' | 'harga'

export type Countries = {
  id_negara: number
  kode_negara: string
  nama_negara: string
}

export type Ports = {
  id_negara: string
  id_pelabuhan: string
  nama_pelabuhan: string
}

export type Goods = {
  id_barang: number
  nama_barang: string
  description: string
  id_pelabuhan: number
  harga: number
  diskon: number
}

export type GeneralFieldsValue = { value: null | string; label: null | string }

export type GoodsFieldValue = GeneralFieldsValue & {
  description: string | null
}

export type InputFields = {
  country: GeneralFieldsValue
  port: GeneralFieldsValue
  goods: GoodsFieldValue
}

export type EditableField = {
  diskon: number | null
  harga: number | null
}
