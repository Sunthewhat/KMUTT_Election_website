import { Card, Flex, Image } from "antd";

interface CouncilCardProps {
  name?: string;
  studentId?: string;
  faculty?: string;
  imageUrl?: string;
}

export const CouncilCard = ({
  name,
  studentId,
  faculty,
  imageUrl,
}: CouncilCardProps) => {
  return (
    <Card style={{width: "352px"}}>
      <Flex justify="space-between">
        <Flex
          style={{ verticalAlign: "middle", flexDirection: "column" }}
          justify="center"
        >
          <h4>{name}</h4>
          <p>{studentId}</p>
          <p>{faculty}</p>
        </Flex>
		<Flex style={{ verticalAlign: "middle", flexDirection: "column" }}>
			<Image
			src={imageUrl}
			alt="Student Image"
			width={120}
			height={150}
			style={{ objectFit: "cover", borderRadius: "4px" }}
			/>
		</Flex>
      </Flex>
    </Card>
  );
};
