import { FastField, Form, Formik } from "formik";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";

PhotoForm.propTypes = {};

PhotoForm.defaultProps = {};

function PhotoForm(props) {
  const initiaValues = {
    title: "",
    CategoryId: null,
  };
  // npm i --save react-select
  return (
    <Formik initialValues={initiaValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="CategoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                id="categoryId"
                name="categoryId"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup>
            <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="promary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorful"
                ></img>
              </div>
            </FormGroup>
            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
