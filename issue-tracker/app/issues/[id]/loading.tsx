import IssueStatusBadge from "@/app/component/IssueStatusBadge";
import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      {/* <Heading>{issue.title}</Heading> */}
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
