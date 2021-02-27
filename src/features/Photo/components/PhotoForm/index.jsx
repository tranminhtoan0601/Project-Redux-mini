import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

PhotoForm.propTypes = {};

PhotoForm.defaultProps = {};

function PhotoForm(props) {
  // npm i --save react-select
  return (
    <Form>
      <FormGroup>
        <Label For="titleId" placeholder="Eg: Wow nature ..." />
        <Input
          name="titleId"
          id="titleId"
          placeholder="Eg: Wow nature ..."
        ></Input>
      </FormGroup>
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
}

export default PhotoForm;
