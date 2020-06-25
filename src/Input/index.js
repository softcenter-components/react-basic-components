import React, { forwardRef, useState, createRef } from 'react'
import '../index.css'
import { InputBody, Container, FloatingMessage } from './style'
import { AlertCircle, Eye, EyeOff } from '../assets/icons'

export const Input = forwardRef(({ errorMsg, ...props }, ref) => {
  return (
    <Container className={!(props.error && errorMsg) ? 'default' : ''}>
      <InputComponent {...props} ref={ref} />
      {props.error && errorMsg && (
        <FloatingMessage className='floating-message'>
          {errorMsg}
        </FloatingMessage>
      )}
    </Container>
  )
})

const InputComponent = forwardRef(
  (
    {
      className,
      id,
      disabled,
      placeholder,
      icon,
      onChange,
      onSvgClick = undefined,
      onFocus = undefined,
      onBlur = undefined,
      shouldStroke = false,
      containerRef,
      list,
      error,
      camelCase,
      type = 'text',
      ...props
    },
    ref
  ) => {
    ref = !ref ? createRef() : ref
    const hasIcon = !!icon
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const showIcon = hasIcon || error || type === 'password'

    const iconIsClickable = onSvgClick || type === 'password'

    const applyCamelCase = (event) => {
      if (event.target.value.charAt(event.target.value.length - 1) === ' ')
        return
      const words = event.target.value.split(' ')
      if (words[words.length - 1].length < 2) return

      const camelCaseWords = words.map((word) => {
        if (word.length > 1)
          return word.charAt(0).toUpperCase() + word.substring(1)
        else return word
      })

      let formattedText = ''

      for (let i = 0; i < camelCaseWords.length; i++) {
        if (camelCaseWords.length === 1 || i === camelCaseWords.length - 1)
          formattedText += camelCaseWords[i]
        else formattedText += camelCaseWords[i] + ' '
      }

      event.target.value = formattedText
    }

    return (
      <InputBody
        shouldStroke={shouldStroke}
        ref={containerRef}
        id={id}
        className={`
          ${className} ${error ? 'error' : ''} 
          ${type === 'password' ? 'password' : ''} 
          ${isFocused ? 'focused' : ''}
        `}
        icon={showIcon}
        onClick={() => ref.current.focus()}
        iconIsClickable={iconIsClickable}
      >
        <input
          {...props}
          onChange={(e) => {
            if (camelCase) applyCamelCase(e)
            if (onChange) onChange(e)
          }}
          onFocus={(e) => {
            setIsFocused(true)
            if (onFocus) onFocus(e)
          }}
          onBlur={() => {
            setIsFocused(false)
            if (onBlur) onBlur()
          }}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
        />
        {list || null}

        {type === 'password' ? (
          <div
            className='icon-container'
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </div>
        ) : error ? (
          <div className='icon-container'>
            <AlertCircle />
          </div>
        ) : (
          hasIcon && (
            <div onClick={onSvgClick} className='icon-container'>
              {icon}
            </div>
          )
        )}
      </InputBody>
    )
  }
)
