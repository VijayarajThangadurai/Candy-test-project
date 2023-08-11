import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListContext from "./store/list-context";

function Forms() {
    const candyInputRef=useRef();
    const priceInputRef=useRef();
    const descriptionInputRef=useRef();

    const listCtx = useContext(ListContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredCandy = candyInputRef.current.value;
        const enteredDes = descriptionInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;


        const candyI ={
            candyName: enteredCandy,
            description: enteredDes,
            price: enteredPrice
        }
        listCtx.addListItem({...candyI});
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Candy</Form.Label>
        <Form.Control type="text" ref={candyInputRef} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" ref={descriptionInputRef} />
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" ref={priceInputRef} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Add
      </Button>
    </Form>
  );
}

export default Forms;