import { Skeleton, Card, SkeletonText, CardBody } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody minHeight={"120px"}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
