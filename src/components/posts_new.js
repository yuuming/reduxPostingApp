import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <labal>{field.label}</labal>
        <input type="text" {...field.input} />
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
      <button type= "submit" className="btn btn-primaly">Submit</button>

      </form>
    );
  }
}

function validate(values) {

}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
