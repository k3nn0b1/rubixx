import { ActivityItem } from "../ActivityItem";
import { useState } from "react";
import { Modal } from "../Modal";
import { QuestionList } from "../QuestionList";

export const ActivityList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);

  const openModal = (activity) => {
    setCurrentActivity(activity);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="list">
      {props.items.map((item) => (
        <ActivityItem
          key={item.id}
          activity={item}
          onClick={() => openModal(item)}
        />
      ))}

      <Modal isOpen={isOpen} handleClose={closeModal}>
        <QuestionList questions={currentActivity ? currentActivity.questions : null} />
      </Modal>
    </section>
  );
};
