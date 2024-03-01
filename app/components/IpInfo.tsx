type IpInfoProps = {
  title: string,
  value: string
}

export const IpInfo = ({title, value}: IpInfoProps) => {
  return (
    <div className="flex flex-col gap-2 items-center lg:max-w-56">
      <span aria-label={'key'} className="font-bold text-sm text-gray-400">{title}</span>
      <span aria-label={'value'} className="font-medium text-xl lg:text-2xl text-center">{value}</span>
    </div>
  )
}