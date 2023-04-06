import React, { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import Input from 'src/components/Input/Input';
import { IScheduleProps } from './types';
import { CustomForm, TimeContainer } from './styles';
import { Modal } from '../../../components/Modal/Modal';
import TimePicker from '../../../components/TimePicker/TimePicker';

const ScheduleComponent: FC<IScheduleProps> = (props: IScheduleProps) => {
  const { schedule, modalSchedule, setSchedule, onClose } = props;
  const [quantity, setQuantity] = useState(1);
  console.log('🚀 ~ setSchedule:', setSchedule);
  console.log('🚀 ~ schedule:', schedule);
  console.log('🚀 ~ modalSchedule:', modalSchedule);

  const renderRow = () => (
    <>
      <TimeContainer>
        <Field
          name={`startTime_${quantity}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de inicio" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <TimeContainer>
        <Field
          name={`endTime_${quantity}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de fin" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <Field
        render={Input}
        label="Descripcion"
        name={`description_${quantity}`}
        type="text"
      />
    </>
  );

  return (
    <Modal
      isOpen={modalSchedule}
      onClose={() => onClose()}
      title="Crear cronograma"
    >
      <Form
        onSubmit={(values) => console.log(values)}
        render={({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            {renderRow()}
          </CustomForm>
        )}
      />
    </Modal>
  );
};

export default ScheduleComponent;
