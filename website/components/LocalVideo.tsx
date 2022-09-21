import React, { useEffect, useRef, useState } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"
import Image from "next/image"
import VideoPlaceholder from "../public/assets/images/plugin-screenshot.png"

export function LocalVideo({
  src,
  title,
  poster,
  width = 1024,
  height = 512,
  Cover = () => <Image width={width} height={height} src={VideoPlaceholder} alt='Video Cover' />,
  ...props
}: any) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)
  const { isIntersecting } = useIntersectionObserver(containerRef!)

  useEffect(() => {
    if (isIntersecting) {
      setShow(true)
    }
  }, [isIntersecting])

  return (
    <div ref={containerRef} className='' {...props}>
      {!show && <Cover />}
      {show && (
        <video
          className='w-full mx-auto'
          autoPlay
          loop
          controls={false}
          muted
          playsInline
          poster={poster}
          title={title}
          width={width}
          height={height}
        >
          <source src={src} type='video/mp4' />
        </video>
      )}
    </div>
  )
}

export default LocalVideo
