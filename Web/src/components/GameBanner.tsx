interface GameBannerProps {
  title: string
  image: string
  adsCount: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.image} alt="" />
      <div className="w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white">{props.title}</strong>
        <span className="text-zinc-300  text-sm block">{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}
