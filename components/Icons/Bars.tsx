import { SVGProps } from 'react'

const Bars: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill='currentColor'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    viewBox='0 0 24 24'
    {...props}>
    <path d='M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z'></path>
  </svg>
)

export default Bars
