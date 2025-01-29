import Image from 'next/image'
import Script from 'next/script'

export default function Cursor() {
  return (
    <div id="cursor">
      <span></span>
      <Script src='JS/cursor.js' />
    </div>
    
  )
}
