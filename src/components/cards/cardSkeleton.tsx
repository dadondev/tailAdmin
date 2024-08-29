/** @format */

import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
	return (
		<div className='border rounded-md p-3 max-w-[278px] sm:w-full'>
			<Skeleton className='w-full h-[250px] mb-2' />
			<article className='grid gap-1'>
				<Skeleton className='w-full h-5' />
				<Skeleton className='w-full h-5' />
				<Skeleton className='w-40 h-5' />
				<Skeleton className='w-32 h-5' />
			</article>
		</div>
	);
};

export default CardSkeleton;
