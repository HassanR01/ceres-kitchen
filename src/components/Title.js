'use client'
import Bgimage from '../../public/bg.png'

export default function Title({ title }) {
  return (
    <div className={'titlepage'} style={{
      height: '30vh',
      backgroundImage: `url(${Bgimage.src})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <h1>{title}</h1>
    </div>
  )
}
