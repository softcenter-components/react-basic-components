import React from 'react'

export const Close = (props) => (
  <svg {...props} fill='gray' width='auto' viewBox='0 0 512.001 512.001'>
    <path
      d='M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
      L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
      c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
      l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
      L284.286,256.002z'
    />
  </svg>
)

export const AlertCircle = () => (
  <svg viewBox='0 0 24 24'>
    <path d='M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
  </svg>
)

export const Eye = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z' />
  </svg>
)

export const EyeOff = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z' />
  </svg>
)

export const Checked = (props) => (
  <svg
    version='1.1'
    id='Layer_1'
    x='0px'
    y='0px'
    width='11px'
    height='11px'
    viewBox='0 0 11 11'
    enableBackground='new 0 0 11 11'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.03,6.535c0.125-0.15,0.246-0.296,0.367-0.442  c1.365-1.662,2.73-3.324,4.096-4.986C8.78,0.756,9.186,0.715,9.537,1.002c0.329,0.269,0.658,0.539,0.986,0.809  c0.357,0.293,0.398,0.698,0.106,1.054C9.094,4.736,7.556,6.606,6.02,8.477c-0.383,0.465-0.765,0.93-1.146,1.395  c-0.315,0.387-0.722,0.421-1.1,0.096C2.675,9.023,1.575,8.08,0.475,7.14c-0.362-0.311-0.397-0.708-0.088-1.07  c0.273-0.321,0.547-0.641,0.823-0.96c0.308-0.355,0.706-0.381,1.064-0.075C2.837,5.518,3.401,6,3.965,6.482  C3.983,6.499,4.003,6.514,4.03,6.535z'
    />
  </svg>
)
