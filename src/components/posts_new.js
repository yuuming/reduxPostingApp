import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <labal>{field.label}</labal>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="Categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primaly">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
