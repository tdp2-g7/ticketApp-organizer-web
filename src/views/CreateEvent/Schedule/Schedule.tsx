import React, { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import Input from 'src/components/Input/Input';
import { IScheduleProps } from './types';
import { CustomForm, TimeContainer } from './styles';
import { Modal } from '../../../components/Modal/Modal';
import TimePicker from '../../../components/TimePicker/TimePicker';

const ScheduleComponent: FC<IScheduleProps> = (props: IScheduleProps) => {
  const {
    schedule, modalSchedule, setSchedule, onClose,
  } = props;
  const [numbers, setNumbers] = useState<any>([1]);

  const renderRow = (number: number) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <TimeContainer>
        <Field
          name={`startTime_${number}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de inicio" {...fieldRenderProps} />
          )} />
      </TimeContainer>
      <TimeContainer>
        <Field
          name={`endTime_${number}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de fin" {...fieldRenderProps} />
          )} />
      </TimeContainer>
      <Field
        render={Input}
        label="Descripcion"
        name={`description_${number}`}
        type="text" />
    </div>
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
          <>
            <CustomForm onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {numbers.map((_: any, index: number) => renderRow(index))}
              </div>
            </CustomForm>
            <button style={{ display: 'flex' }} type="submit">
              SUBMIT
            </button>
          </>
        )}
      />
      <div onClick={() => setNumbers([...numbers, 1])}>AGREGAR</div>
    </Modal>
  );
};

export default ScheduleComponent;
