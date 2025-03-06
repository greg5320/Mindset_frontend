"use client"
import { useState, type FC, type FormEvent } from "react"
import type React from "react"

import "./DataForm.css"

interface FormData {
  firstName: string
  lastName: string
  patronymic: string
  phone: string
}

const DataForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    patronymic: "",
    phone: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Введите фамилию"
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Введите имя"
    }
    if (!formData.patronymic.trim()) {
      newErrors.patronymic = "Введите отчество"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else if (!/^\+?[78]\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Введите корректный номер телефона"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Здесь будет логика отправки данных
      console.log("Форма отправлена:", formData)
      alert("Заявка успешно отправлена!")
      setFormData({
        firstName: "",
        lastName: "",
        patronymic: "",
        phone: "",
      })
    }
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 0) {
      if (!value.startsWith("7") && !value.startsWith("8")) {
        value = "7" + value
      }
      if (value.length > 11) {
        value = value.slice(0, 11)
      }
      value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5")
    }
    setFormData({ ...formData, phone: value })
  }

  return (
    <section className="data-form">
      <div className="data-form__container">
        <h2 className="data-form__title">ФОРМА ДЛЯ ЗАЯВОК</h2>
        <form className="data-form__form" onSubmit={handleSubmit}>
        <div className="form-group">
            <input
              type="text"
              placeholder="Фамилия*"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Имя*"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Отчество*"
              value={formData.patronymic}
              onChange={(e) => setFormData({ ...formData, patronymic: e.target.value })}
              className={errors.patronymic ? "error" : ""}
            />
            {errors.patronymic && <span className="error-message">{errors.patronymic}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Номер телефона*"
              value={formData.phone}
              onChange={handlePhoneInput}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <button type="submit" className="submit-button">
            ОТПРАВИТЬ ЗАЯВКУ
          </button>
        </form>
      </div>
    </section>
  )
}

export default DataForm

