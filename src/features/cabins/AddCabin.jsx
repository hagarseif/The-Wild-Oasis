import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

/**
 * Renders a modal with a button to open a form for creating a new cabin.
 * The modal contains a `CreateCabinForm` component that allows the user to
 * input details for a new cabin.
 */
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open open="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
