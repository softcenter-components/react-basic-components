import React, { forwardRef, useState, createRef } from 'react'
import '../index.css'
import { InputBody, Container, FloatingMessage } from './style'
import { AlertCircle, Eye, EyeOff } from '../assets/icons'

export const Input = forwardRef(({ errorMsg, ...props }, ref) => {
  return (
    <Container className={!(props.error && errorMsg) ? 'default' : ''}>
      <InputComponent {...props} ref={ref} />
      {props.error && errorMsg && <FloatingMessage>{errorMsg}</FloatingMessage>}
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
      shouldStroke = false,
      containerRef,
      error,
      type,
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

    return (
      <InputBody
        shouldStroke={shouldStroke}
        ref={containerRef}
        id={id}
        className={`${className} ${error ? 'error' : ''} ${
          type === 'password' ? 'password' : ''
        }`}
        icon={showIcon}
        isFocused={isFocused}
        onClick={() => ref.current.focus()}
        iconIsClickable={iconIsClickable}
      >
        <input
          {...props}
          onChange={(e) => {
            if (onChange) onChange(e)
          }}
          onFocus={(e) => {
            setIsFocused(true)
            if (onFocus) onFocus(e)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
          }
        />

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
