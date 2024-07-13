import { RiRefreshLine } from '@remixicon/react';
import { Button } from '@tremor/react';

export function ButtonRed() {
  return (
    <div className="flex justify-center bg-red-200">
      <Button icon={RiRefreshLine}>Refresh data</Button>
    </div>
  );
}
