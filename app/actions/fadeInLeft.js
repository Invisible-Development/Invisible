// Note: use this as <FadeInLeft><children /></FadeInLeft>
import React, { useEffect } from 'react'

export default function fadeInLeft(props) {
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeInLeft")
                entry.target.classList.remove("opacity-0")
            }
        })
    });

    const elements = document.querySelectorAll('#children')
    elements.forEach((el) => {observer.observe(el)});
  })
  return (
    <div id="children" className="opacity-0">
        {props.children}
    </div>
  )
}
