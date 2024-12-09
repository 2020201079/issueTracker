import { Skeleton } from "@/app/component";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuesPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuesPage;
