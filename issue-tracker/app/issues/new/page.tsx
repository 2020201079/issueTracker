"use client";
import { TextField, TextArea, Button, Callout } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured.");
            console.log(error);
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        <TextArea
          placeholder="Description"
          {...register("description")}
        ></TextArea>

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
