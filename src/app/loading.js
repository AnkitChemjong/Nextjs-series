import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="flex flex-col space-y-3">

        <Skeleton className='m-h-[630px] h-full w-full bg-zinc-500 mt-5'/>
    </div>
  )
}

export default Loading
