import React, { FunctionComponent } from 'react';
import { Field, Form } from 'react-final-form';
import Input from 'src/components/Input/Input';
import Loading from 'src/components/Loading/Loading';
import { IProfileProps } from './types';
import NoImage from '../../assets/noImage.png';
import {
  Button,
  ButtonContainer,
  ColumnContainer,
  ColumnFormContainer,
  Container,
  CustomForm,
  CustomImg,
  DefaultDescription,
  DescriptionText,
  EditContainer,
  FormContainer,
  Label,
  NameText,
  RowContainer,
  Title,
} from './styles';

const Profile: FunctionComponent<IProfileProps> = (props: IProfileProps) => {
  const { user, onEditProfile, loading } = props;

  return (
    <>
      <Title>Mi Perfil</Title>
      {
        loading
          ? <Loading/>
          : <>
        <RowContainer>
        {user && user.image ? (
          <CustomImg src={`data:image/jpeg;base64,${user.image}`} />
        ) : (
          <CustomImg src={NoImage} />
        )}

        <ColumnContainer>
          <NameText> {user?.name} </NameText>
          {user && user.description && user.description !== '' ? (
            <DescriptionText> {user.description}</DescriptionText>
          ) : (
            <DefaultDescription>
              [ Todavia no tienes una descripcion ]
            </DefaultDescription>
          )}
        </ColumnContainer>
      </RowContainer>

      <EditContainer>
        <Title>Editar Perfil</Title>
        <FormContainer>
          <Form
            onSubmit={onEditProfile}
            initialValues={user}
            render={({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Container>
                  <ColumnFormContainer>
                    <div>
                      <Label>Nombre del organizador/organizacion</Label>
                      <Field
                        render={Input}
                        name='name'
                        label='Nombre del organizador/organizacion'
                        type='text'
                      />
                    </div>
                    <Field name='image'>
                      {({ input: { value, onChange, ...input } }) => (
                        <input
                          {...input}
                          type='file'
                          onChange={({ target }) => {
                            onChange(target.files);
                          }}
                          // instead of the default target.value
                          {...props}
                        />
                      )}
                    </Field>
                  </ColumnFormContainer>

                  <div>
                    <Label>Descripcion</Label>
                    <Field
                      render={Input}
                      multiline
                      label='Descripcion'
                      name='description'
                      type='textarea'
                    />
                  </div>
                </Container>
                <ButtonContainer>
                  <Button type='submit'>Guardar</Button>
                </ButtonContainer>
              </CustomForm>
            )}
          />
        </FormContainer>
      </EditContainer>
        </>
      }

    </>
  );
};

export default Profile;
