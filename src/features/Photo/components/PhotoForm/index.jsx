import RandomPhotoField from "custom-fields/RandomPhotoField";
import { FastField, Form, Formik } from "formik";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import * as Yup from "yup";

PhotoForm.propTypes = {};

PhotoForm.defaultProps = {};

function PhotoForm(props) {
  const initiaValues = {
    title: "",
    CategoryId: null,
    photo: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This filed is required."),
    CategoryId: Yup.number().required("This filed is required.").nullable(),
    photo: Yup.string().when("CategoryId", {
      is: 1,
      then: Yup.string().required("This field is required"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  // npm i --save react-select
  return (
    <Formik
      initialValues={initiaValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Submit: ", values)}
    >
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
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            {/* <FormGroup>
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
            </FormGroup> */}
            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
