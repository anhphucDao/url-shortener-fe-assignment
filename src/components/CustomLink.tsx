import { type ComponentPropsWithoutRef } from 'react'
function CustomLink({ className = '', ...props }: ComponentPropsWithoutRef<'a'>) {
  const baseClassName = 'p-1 bg-primary-500 rounded-[50%] hover:cursor-pointer shrink'
  return (
    <a className={`${baseClassName} ${className}`} {...props}>
      <img src="../public/download.svg" />
    </a>
  )
}
export default CustomLink
