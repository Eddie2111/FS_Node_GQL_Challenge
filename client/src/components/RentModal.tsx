import {
  createOneRent,
  changeStatus,
} from "../graphql/mutations/products/index";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Text } from "@mantine/core";
import { useMutation } from "@apollo/client";

import { useAuth } from "../contexts/AuthContext";

const RentModal = ({
  product_id,
  createdBy,
  rent
}: {
  product_id: string;
  createdBy: number;
  rent: boolean;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [CreateOneRent] = useMutation(createOneRent);
  const { userData } = useAuth();
  const [from, setFrom] = React.useState<string>("");
  const [to, setTo] = React.useState<string>("");
  const [ChangeStatus] = useMutation(changeStatus);

  const schema = z.object({
    from: z.string().nonempty("From date is required"),
    to: z.string().nonempty("To date is required"),
    rented_by: z.number(),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rented_by = parseInt(userData.id ?? "0");
    if (createdBy === rented_by) {
      toast.warning("You cannot rent your own product.");
      return;
    }

    const validation = schema.safeParse({ from, to, rented_by });

    if (!validation.success) {
      toast.error(
        validation.error.issues.map((issue) => issue.message).join(", ")
      );
      return;
    }

    try {
      CreateOneRent({
        variables: {
          product_id,
          createdby: createdBy,
          rentedby: rented_by,
          from: from.toString(),
          to: to.toString(),
        },
      }).then(
        async () => {
          await ChangeStatus({
            variables: { id: product_id, status: "RENTED" },
          });
          toast.success("Successfully added for rent");
        }
      ).catch(()=>{toast.warning("Failed to add to rent")})
    } catch (error) {
      toast.error("An error occurred while processing your request.");
      console.error("Error:", error);
    }

    const payload = {
      product_id,
      created_by: createdBy,
      rented_by: rented_by,
      from: new Date(from),
      to: new Date(to),
    };

    console.log("payload", payload);
  };

  if(rent){
  return (
    <>
      <Modal opened={opened} onClose={close} title="Rent this product">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <Text className="font-medium">From</Text>
          <TextInput
            type="date"
            className="border-gray-300 p-2 border rounded-md"
            value={from}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFrom(event.currentTarget.value)
            }
          />
          <Text className="font-medium">To</Text>
          <TextInput
            type="date"
            className="border-gray-300 p-2 border rounded-md"
            value={to}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTo(event.currentTarget.value)
            }
          />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 mt-4 p-2 rounded-md text-white"
          >
            Submit
          </Button>
        </form>
      </Modal>

      <Button variant="light" color="red" onClick={open} className="my-2">
        Rent Now
      </Button>
    </>
  );
} if (!rent) {
  <p className="text-center">Product has been sold off </p>;
}
};

export default RentModal;
