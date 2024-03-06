import { Card, Flex } from "antd";

interface PartySmallCardProps {
	partyName?: string;
	partyNo?: string;
}

export const PartySmallCard = ({partyName, partyNo}: PartySmallCardProps) => {
	return (
		<Card style={{minWidth: "140px", height: "81px", borderRadius: "0"}}>
			<Flex justify="center" align="flex-end" gap={5}>
				<p>{partyName}</p>
				<h5>{partyNo}</h5>
			</Flex>
		</Card>
	);
};
