import React, { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import _ from 'lodash';
import Input from 'src/components/Input/Input';
import { IScheduleProps } from './types';
import {
  CustomForm,
  TimeContainer,
  RowDiv,
  RemoveButton,
  RemoveButtonContainer,
  SubmitButton,
  SubmitButtonContainer,
} from './styles';
import { Modal } from '../../../components/Modal/Modal';
import TimePicker from '../../../components/TimePicker/TimePicker';

const ScheduleComponent: FC<IScheduleProps> = (props: IScheduleProps) => {
  const {
    schedule, modalSchedule, setSchedule, onClose,
  } = props;
  const [numbers, setNumbers] = useState<any>([{ id: 1 }]);

  const [number, setNumber] = useState<number>(2);

  const handleDeleteRow = (id: number, form: any) => {
    setNumbers(numbers.filter((item: any) => item.id !== id));
    if (form && form.getState && form.getState().values) {
      const { values } = form.getState();
      if (_.has(values, `startTime_${id}`)) {
        form.change(`startTime_${id}`, undefined);
      }
      if (_.has(values, `endTime_${id}`)) {
        form.change(`endTime_${id}`, undefined);
      }
      if (_.has(values, `description_${id}`)) {
        form.change(`description_${id}`, undefined);
      }
    }
  };

  const renderRow = (item: any, form: any) => (
    <RowDiv key={item.id}>
      <TimeContainer>
        <Field
          name={`startTime_${item.id}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de inicio" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <TimeContainer>
        <Field
          name={`endTime_${item.id}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de fin" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <Field
        render={Input}
        label="Descripcion"
        name={`description_${item.id}`}
        type="text"
      />
      <RemoveButtonContainer>
        <RemoveButton onClick={() => handleDeleteRow(item.id, form)}>
          <p style={{ margin: 0, fontSize: 30, lineHeight: '8px' }}>-</p>
        </RemoveButton>
      </RemoveButtonContainer>
    </RowDiv>
  );

  return (
    <Modal
      isOpen={modalSchedule}
      onClose={() => onClose()}
      title="Crear cronograma"
    >
      <Form
        onSubmit={(values) => console.log(values)}
        render={({ handleSubmit, form }) => (
          <CustomForm onSubmit={handleSubmit} id="myform">
            <RowDiv>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                {numbers.map((item: any) => renderRow(item, form))}
              </div>
            </RowDiv>
            <SubmitButtonContainer>
              <SubmitButton
                onClick={() => {
                  setNumber(number + 1);
                  setNumbers([...numbers, { id: number }]);
                }}
              >
                Agregar
              </SubmitButton>
            </SubmitButtonContainer>
          </CustomForm>
        )}
      />
      <SubmitButtonContainer>
        <SubmitButton type="submit" form="myform">
          Finalizar
        </SubmitButton>
      </SubmitButtonContainer>
    </Modal>
  );
};

export default ScheduleComponent;
