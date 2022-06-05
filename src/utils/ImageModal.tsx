import React from "react";
import { Modal } from "react-bootstrap";
import Image from "../shared/Image";

const ImageModal = (props: any) => {
  // const dispatch = useDispatch();
  // const [formdata, setFormdata] = useState({
  //   id: "",
  //   amount: "",
  //   profit: "",
  //   bonus: "",
  // });
  // useEffect(() => {
  //   if (props.data)
  //     return setFormdata({
  //       ...formdata,
  //       id: props.data?._id,
  //       amount: props.data?.amount,
  //       profit: props.data?.profit,
  //       bonus: props.data?.bonus,
  //     });
  // }, [props.data]);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormdata({
  //     ...formdata,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   console.log("submit");
  // };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body>
        {props?.data ? (
          <Image src={props?.data} h={100} unit='%' alt='company CAC' />
        ) : (
          <h4>No upload</h4>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
