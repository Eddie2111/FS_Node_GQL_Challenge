import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text } from "@mantine/core";
import { deleteProduct } from "../graphql/mutations/products/index";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";

const DeleteModal = ({ product_id }: { product_id: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [DeleteProduct, { loading, error }] = useMutation(deleteProduct);

  const action = async () => {
    try {
      const response = await DeleteProduct({ variables: { id: product_id } });
      if (loading) {
        toast("Deleting...");
      }
      if (error) {
        toast.error("Error deleting product");
        close();
        return;
      }
      if (response.data) {
        toast.success("Product deleted successfully");
        close();
      }
    } catch (err) {
      toast.error("An error occurred while deleting the product");
      console.error("Error:", err);
      close();
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Confirm Delete">
        <Text>Are you sure you want to delete this item?</Text>
        <div className="flex justify-end space-x-4 mt-4">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button color="red" onClick={action}>
            Delete
          </Button>
        </div>
      </Modal>
      <Button onClick={open} variant="light" color="pink">Delete</Button>
    </>
  );
};

export default DeleteModal;
