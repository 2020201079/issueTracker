import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface props {
  issueId: number;
}

const EditIssueButton = ({ issueId }: props) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}> Edit issue </Link>
    </Button>
  );
};

export default EditIssueButton;
