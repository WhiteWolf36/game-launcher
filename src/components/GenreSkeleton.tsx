import { HStack, List, ListItem, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <List paddingY="15px">
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="15px">
          <HStack>
            <SkeletonText noOfLines={1} width="90%" height="10px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreSkeleton;
