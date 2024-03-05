import { Separator } from '@/components/ui/separator';
import { BoardList } from './_components/board-list';
import { Info } from './_components/info';
import { Suspense } from 'react';

const OrganizationIdPage = () => {
  return (
    <div className="w-full mb-20">
      <Info isPro />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
