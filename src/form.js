import React, { Component } from 'react'
import arrayMutators from "final-form-arrays";
import { Form } from "react-final-form";
import { DataProvider } from 'Utils/context';
import App from 'App';
import { DEFAULT_SENDER_CLIENT, DEFAULT_SENDER_OPERATOR, DEFAULT_RECEIVER_CLIENT, DEFAULT_RECEIVER_OPERATOR } from "Constants";
import { axiosAPI } from 'Utils/axios'
import { withSnackbar } from "notistack";
import { showSnackbar } from 'Utils/Snackbar'

class FinalForm extends Component {

  bindFormApi = formApi => {
    this.formApi = formApi;
    const unsubscribe = () => {};
    return unsubscribe;
  };

  onSubmitFinalForm = async json => {}

  render () {

    return (
      <Form
        onSubmit={this.onSubmitFinalForm}
        decorators={[this.bindFormApi]}
        mutators={{ ...arrayMutators }}
        initialValues={{
          senderAbonent: [{...DEFAULT_SENDER_CLIENT}],
          senderOperator: [{...DEFAULT_SENDER_OPERATOR}],
          receiverAbonent: [{...DEFAULT_RECEIVER_CLIENT}],
          receiverOperator: [{...DEFAULT_RECEIVER_OPERATOR}]
        }}
        render={({ handleSubmit, reset, submitting, pristine, values, form, errors, touched }) => {
          const { change, mutators } = form;

          return (
            <DataProvider value={{ formApi: this.formApi, mutators: mutators }}>
              <App values={values} mutators={mutators} formApi={this.formApi} />
            </DataProvider>
          );
        }}
      />
    )
  }
}

export default withSnackbar(FinalForm)
