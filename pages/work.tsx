'use client';
import { SetStateAction, useState, useEffect } from 'react';
import Modal from '../app/components/modal';
import dummyWorks from '../public/dummy';
import Vanta from "../app/components/vantabg";
import styles from './work.module.css'; // Assuming you're using CSS modules

interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
}

const Work = ({ works = [] }: { works?: Job[] }) => {
  const [selectedWork, setSelectedWork] = useState<null | Job>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (work: SetStateAction<Job | null>) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div>
      {/* <Vanta /> */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 lowercase">
        {works.map((work) => (
          <div
            key={work.id}
            className="mb-4 w-full md:w-300px panel-bg p-4 rounded-lg shadow cursor-pointer"
            onClick={() => openModal(work)}
          >
            <h3 className="text-xl">{work.title}</h3>
            <p className="text-orange-500 font-semibold">{work.company}</p>
            <p>
              {work.startDate} - {work.endDate}
            </p>
            <p className="text-sm mt-4">{work.description}</p>
          </div>
        ))}
      </div>

      {selectedWork && (
        <Modal onClose={closeModal}>
          <h2 className="text-3xl">{selectedWork.title}</h2>
          <p className="text-sm">{selectedWork.description}</p>
          {/* Add more details as needed */}
        </Modal>
      )}
    </div>
  );
};
const WorkComponent = () => <Work works={dummyWorks} />;
export default WorkComponent;
