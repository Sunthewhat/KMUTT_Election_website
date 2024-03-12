import { Card, Flex } from "antd";

interface PartySmallCardProps {
  partyName?: string;
  partyNo?: number;
  partyLogo?: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const PartySmallCard = ({
  partyName,
  partyNo,
  partyLogo,
  isSelected,
  onSelect,
}: PartySmallCardProps) => {
  return (
    <Card
      style={{
        minWidth: "140px",
        height: "81px",
        borderRadius: "0",
        margin: "1em",
        backgroundImage: `url(${partyLogo})`,
        backgroundSize: "45px auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: isSelected ? "0px 0px 3px 3px orange" : "none",
      }}
      onClick={onSelect}
    >
      <Flex
        style={{ flexDirection: "row" }}
        justify="center"
        align="flex-end"
        gap={5}
      >
        <Flex style={{ flexDirection: "column" }}>
          <p>{partyName}</p>
        </Flex>
        <h5>{partyNo}</h5>
      </Flex>
    </Card>
  );
};
