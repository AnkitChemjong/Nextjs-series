
import { Skeleton } from "@/components/ui/skeleton"

function Loading(){
    return (
        <div className="w-screen h-screen flex justify-center items-center relative">
            <Skeleton className="w-[300px] h-[300px] bg-black  rounded-full" />
            <div className="w-[200px] h-[200px] bg-white rounded-full absolute"></div>
        </div>

    )
}
export default Loading;