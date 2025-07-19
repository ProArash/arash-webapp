import { Skeleton } from "@mui/material"


const PlanPageSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between gap-5 w-full">
        <div className="flex flex-col md:w-1/2">
            
            <Skeleton height={500} />
           
            <Skeleton height={500} />
           
            <Skeleton height={500} />
        </div>
        <div className="md:w-1/3">
            <Skeleton height={400} />
        </div>
    </div>
  )
}

export default PlanPageSkeleton