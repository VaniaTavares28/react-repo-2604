import React from 'react';
import './style.scss'

const SectionTitle = ({borderLow, title, content}) => {
  return (
    <div className={`section-title-wrapper ${borderLow}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default SectionTitle
