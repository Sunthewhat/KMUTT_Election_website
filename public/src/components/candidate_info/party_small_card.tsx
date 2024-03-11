import { Card, Flex } from "antd";

interface PartySmallCardProps {
	partyName?: string;
	partyNo?: string;
	partyLogo?: string;
}

export const PartySmallCard = ({partyName, partyNo, partyLogo}: PartySmallCardProps) => {
	return (
		<Card style={{
			minWidth: "140px",
			height: "81px",
			borderRadius: "0",
			backgroundImage: `url(${partyLogo})`,
			backgroundSize: "45px auto",
            backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		}}>
			<Flex style={{flexDirection: "row"}} justify="center" align="flex-end" gap={5}>
				<Flex style={{flexDirection: "column"}}>
					<p>{partyName}</p>
				</Flex>
				<h5>{partyNo}</h5>
			</Flex>
		</Card>
	);
};
