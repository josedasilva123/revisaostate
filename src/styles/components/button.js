import React from 'react'

const BaseButton = ({ children, type, tag, href, target, ...res }) => {
  return (
    <>
        {tag === "a" && <a href={href} target={target} {...res}>{children}</a>}
        {tag === "button" && <button type={type} {...res}>{children}</button>}
    </>
  )
}

export default BaseButton