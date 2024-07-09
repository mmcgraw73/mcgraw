import { SetStateAction, useState } from 'react';
import Modal from '../app/components/modal';
import dummyWorks from '../public/dummy';

const Work = ({ works }: { works: any[] }) => {
  interface Job {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    // Add more properties as needed
  }
  
  const [selectedWork, setSelectedWork] = useState<null | Job>(null);

  const openModal = (work: SetStateAction<Job | null>) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="mb-4 w-full md:w-300px panel-bg p-4 rounded-lg shadow cursor-pointer"
            onClick={() => openModal(work)}
          >
            <h3 className="text-xl">{work.title}</h3>
            <p>{work.company}</p>
            <p>
              {work.startDate} - {work.endDate}
            </p>
            <p>{work.description}</p>
          </div>
        ))}
      </div>

      {selectedWork && (
        <Modal onClose={closeModal}>
          <h2 className="text-3xl">{selectedWork.title}</h2>
          <p>{selectedWork.description}</p>
          {/* Add more details as needed */}
        </Modal>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <Work works={dummyWorks} />
    </div>
  );
};

export default Experience;
