"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import React from "react";
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

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      <TextArea
        placeholder="Description"
        {...register("description")}
      ></TextArea>

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
