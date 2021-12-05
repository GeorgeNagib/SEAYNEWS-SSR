import React from 'react';
import { useRouter } from 'next/router'

export default function MainCard({title, img, datetime}) {
  const history = useRouter();

  return (
      <div className="main-card" onClick={() => history.push(`/article/${title}`)} style={{cursor: 'pointer'}}>
          <img
            src={img}
            className="card-img img-fluid"
            alt="card-1"
          />
          <div className="overlay">
            <p className="sub-header time">{datetime}</p>
            <h1 className="card-title heading-3">
              {title}
            </h1>
          </div>
      </div>
  )
}