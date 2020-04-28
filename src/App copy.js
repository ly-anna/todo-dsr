import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  CSSReset,
  Icon,
  ThemeProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/core'
import { Form, Field, useField } from 'react-final-form'
import validate from './validate'


const onSubmit =  () => {
  window.alert(JSON.stringify(this.values, 0, 2))
}

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <Box w={500} p={4} m="20px auto">


      <Box as="p" textAlign="center">

      </Box>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({
          handleSubmit,
          form,
          errors,
          submitting,
          pristine,
          values
        }) => (
            <Box
              as="form"
              p={4}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              {/* 
            This example uses a mixture of custom field components using useField() 
            and components adapted to take the { input, meta } structure <Field/>
            provides
            */}
              <InputControl name="login" label="login" />
              <InputControl name="password" label="password" />
              <Field
                name="login"
                label="login"
                type="text"
                component={PasswordInput}
              >
              </Field>

              <Field
                name="password"
                label="password"
                component={PasswordInput}
              >
              </Field>



              <ButtonGroup spacing={4}>
                <Button
                  isLoading={submitting}
                  loadingText="Submitting"
                  variantColor="teal"
                  type="submit"
                >
                  Submit
              </Button>
                <Button
                  variantColor="teal"
                  variant="outline"
                  onClick={form.reset}
                  isDisabled={submitting || pristine}
                >
                  Reset
              </Button>
              </ButtonGroup>
              <Box as="pre" my={10}>
                {JSON.stringify(values, 0, 2)}
              </Box>
            </Box>
          )}
      />
    </Box>
  </ThemeProvider>
)




const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched }
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const Error = ({ name }) => {
  const {
    meta: { error }
  } = useField(name, { subscription: { error: true } })
  return <FormErrorMessage>{error}</FormErrorMessage>
}

const InputControl = ({ name, label }) => {
  const { input, meta } = useField(name)
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
      />
      <Error name={name} />
    </Control>
  )
}

const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  console.log(setShow)
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4rem">
        <Icon name={show ? "view" : "view-off"} onClick={handleClick} />
      </InputRightElement>
    </InputGroup>
  );

}

export default App;
