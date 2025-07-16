import { AutoComplete, InputNumber } from "antd"

interface FieldConfig {
  key: string
  type: 'autocomplete' | 'number' | 'description'
  label?: string
  value?: string | number
  options?: any[]
  placeholder?: string
  disabled?: boolean
  addonAfter?: string
  min?: number
  max?: number
  onChange?: (value: any, option?: any) => void
}

const InputField = ({
  type,
  label,
  value,
  options,
  placeholder,
  disabled = false,
  addonAfter,
  min,
  max,
  onChange,
}: FieldConfig) => {
  if (type === 'autocomplete') {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <AutoComplete
          className="w-full !mt-1"
          options={options}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    )
  }

  if (type === 'number') {
    return (
      <div className="flex flex-col w-full">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <InputNumber<number>
          className="!w-full !mt-1"
          value={value as number}
          min={min}
          max={max}
          addonAfter={addonAfter}
          onChange={onChange}
        />
      </div>
    )
  }

  if (type === 'description') {
    return (
      <div className="w-full rounded-md border border-blue-500 bg-blue-50 p-4 text-sm text-gray-500">
        {value}
      </div>
    )
  }

  return null
}

export default InputField;