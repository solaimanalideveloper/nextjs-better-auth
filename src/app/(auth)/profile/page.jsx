"use client";

import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function ProfilePage() {
  const handelUpdateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("in the from data", userData);

    // alert("Form submitted successfully!");
    const resDate = await updateUser({
      name: userData.name,
    });
    console.log("after submit user profile: ", resDate);
  };

  return (
    <Form className="w-full max-w-96" onSubmit={handelUpdateUser}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          {/* <Button
          type="submit"
            onPress={() => {
              const id = Toast.success("You have upgraded your plan", {
                actionProps: {
                  children: "Billing",
                  className: "bg-success text-success-foreground",
                  onPress: () => toast.close(id),
                },
                description: "You can continue using HeroUI Chat",
              });
            }}
          >
            <FloppyDisk></FloppyDisk>
            Save changes
          </Button> */}

          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>

          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
