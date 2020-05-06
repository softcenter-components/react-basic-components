import React, { forwardRef, useState, createRef } from 'react'

import { InputBody, FloatingMessage } from './style'

export const Input = forwardRef(
  (
    {
      className,
      id,
      disabled,
      placeholder,
      icon,
      hasIcon = true,
      onChange,
      onSvgClick = undefined,
      onFocus = undefined,
      shouldStroke = false,
      containerRef,
      error,
      errorMsg,
      ...props
    },
    ref
  ) => {
    ref = !ref ? createRef() : ref
    const [isFocused, setIsFocused] = useState(false)

    return (
      <InputBody
        shouldStroke={shouldStroke}
        ref={containerRef}
        id={id}
        className={`${className} ${error ? 'error' : ''}`}
        icon={hasIcon && icon}
        isFocused={isFocused}
        onClick={() => ref.current.focus()}
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
        />

        {icon && hasIcon ? (
          <div onClick={onSvgClick} className='icon-container'>
            {icon}
          </div>
        ) : null}

        {error && errorMsg && <FloatingMessage>* {errorMsg}</FloatingMessage>}
      </InputBody>
    )
  }
)
